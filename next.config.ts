import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-hosted on Hostinger (Node runtime + PM2), so ship a standalone server
  // bundle instead of relying on a platform-managed build output.
  // Pin the workspace root so Turbopack ignores stray lockfiles above the project.
  turbopack: { root: path.resolve(__dirname) },
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // pg is a native-ish driver; keep it external to the server bundle.
    serverActions: { bodySizeLimit: "2mb" },
  },
  serverExternalPackages: ["pg"],
};

export default nextConfig;
