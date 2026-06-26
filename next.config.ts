import type { NextConfig } from "next";

// Static HTML export, served by GitHub Pages from the repo root.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
