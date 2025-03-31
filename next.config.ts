import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;
