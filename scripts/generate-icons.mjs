// Regenerates every favicon / PWA icon from the ATC logo.
// Run with: node scripts/generate-icons.mjs
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE = path.join(ROOT, "public/images/atc-logo.png");

// The full logo carries the "Knowledge is Growth" tagline, which turns to mush
// at 16px. Crop to the torch + ATC monogram so the favicon stays readable.
const CROP = { left: 290, top: 128, width: 690, height: 690 };

/** Cropped, flattened-on-white square at the requested size. */
function render(size) {
  return sharp(SOURCE)
    .extract(CROP)
    .resize(size, size, { fit: "contain", background: "#ffffff" })
    .flatten({ background: "#ffffff" })
    .png()
    .toBuffer();
}

/** ICO container wrapping PNG payloads — what browsers and Google expect. */
function ico(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(entries.length, 4);

  let offset = 6 + entries.length * 16;
  const directory = entries.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2); // palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    return entry;
  });

  return Buffer.concat([header, ...directory, ...entries.map((e) => e.data)]);
}

await mkdir(path.join(ROOT, "public/icons"), { recursive: true });

const sizes = [16, 32, 48, 180, 192, 256, 384, 512];
const rendered = new Map();
for (const size of sizes) rendered.set(size, await render(size));

const written = [
  ["public/favicon-192.png", rendered.get(192)],
  ["public/apple-touch-icon.png", rendered.get(180)],
  ["public/icons/icon-192.png", rendered.get(192)],
  ["public/icons/icon-256.png", rendered.get(256)],
  ["public/icons/icon-384.png", rendered.get(384)],
  ["public/icons/icon-512.png", rendered.get(512)],
  ["public/icons/icon-maskable-512.png", rendered.get(512)],
  ["public/favicon.ico", ico([16, 32, 48, 256].map((size) => ({ size, data: rendered.get(size) })))],
];

for (const [target, data] of written) {
  await writeFile(path.join(ROOT, target), data);
  console.log(`wrote ${target} (${data.length} bytes)`);
}

// ── Social preview card ──────────────────────────────────────────────────
// Next serves src/app/opengraph-image.png for every route that does not
// override it, so one 1200×630 card replaces the square logo WhatsApp,
// Facebook and X were previously cropping.
const OG = { width: 1200, height: 630 };
const NAVY = "#00374C";
const ORANGE = "#F2882D";

// The source logo has no alpha channel — its "transparent" corners are baked-in
// checkerboard pixels — so reuse the cropped render and mask it to a rounded card.
const ogLogo = await sharp(await render(300))
  .composite([
    {
      input: Buffer.from(
        '<svg width="300" height="300"><rect width="300" height="300" rx="40" fill="#fff"/></svg>',
      ),
      blend: "dest-in",
    },
  ])
  .png()
  .toBuffer();

const ogText = Buffer.from(`
<svg width="${OG.width}" height="${OG.height}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .brand { font: 700 78px 'Helvetica Neue', Helvetica, Arial, sans-serif; fill: #ffffff; }
    .line  { font: 400 40px 'Helvetica Neue', Helvetica, Arial, sans-serif; fill: #cfe3ea; }
    .tag   { font: 700 30px 'Helvetica Neue', Helvetica, Arial, sans-serif; fill: ${ORANGE}; letter-spacing: 2px; }
  </style>
  <text class="brand" x="440" y="250">ATC Ajmer</text>
  <text class="line"  x="444" y="322">IAS &#183; RAS &#183; Rajasthan PSI Coaching</text>
  <text class="tag"   x="444" y="400">KNOWLEDGE IS GROWTH... GROWTH IS LIFE</text>
  <rect x="444" y="430" width="300" height="6" rx="3" fill="${ORANGE}" />
</svg>`);

const ogCard = await sharp({
  create: { width: OG.width, height: OG.height, channels: 4, background: NAVY },
})
  .composite([
    { input: ogLogo, top: 165, left: 100 },
    { input: ogText, top: 0, left: 0 },
  ])
  .png()
  .toBuffer();

await writeFile(path.join(ROOT, "src/app/opengraph-image.png"), ogCard);
console.log(`wrote src/app/opengraph-image.png (${ogCard.length} bytes)`);
