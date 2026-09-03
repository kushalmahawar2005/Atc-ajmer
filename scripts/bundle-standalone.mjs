// Packs the standalone build the way Hostinger needs it:
// .next/standalone/server.js expects `.next/static` and `public` next to it.
import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const standalone = path.join(root, ".next", "standalone");

if (!existsSync(standalone)) {
  console.error("No .next/standalone found. Run `npm run build` first.");
  process.exit(1);
}

await rm(path.join(standalone, ".next", "static"), { recursive: true, force: true });
await mkdir(path.join(standalone, ".next"), { recursive: true });
await cp(path.join(root, ".next", "static"), path.join(standalone, ".next", "static"), {
  recursive: true,
});

if (existsSync(path.join(root, "public"))) {
  await cp(path.join(root, "public"), path.join(standalone, "public"), { recursive: true });
}

console.log("Standalone bundle ready at .next/standalone");
