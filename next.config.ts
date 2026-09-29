import path from "node:path";
import type { NextConfig } from "next";

// Vercel builds its own output; standalone and the pinned root are only for
// self-hosting and break Vercel's file tracing (missing next-server.js.nft.json).
const onVercel = Boolean(process.env.VERCEL);

const nextConfig: NextConfig = {
  // Self-hosted on Hostinger (Node runtime + PM2), so ship a standalone server
  // bundle instead of relying on a platform-managed build output.
  // Pin the workspace root so Turbopack ignores stray lockfiles above the project.
  ...(onVercel ? {} : { turbopack: { root: path.resolve(__dirname) }, output: "standalone" as const }),
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // pg is a native-ish driver; keep it external to the server bundle.
    serverActions: { bodySizeLimit: "2mb" },
  },
  serverExternalPackages: ["pg", "pdfkit"],
};

export default nextConfig;
