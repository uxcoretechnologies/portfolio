import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Raise default quality from 75 → 90 so marketing PNGs stay crisp
    qualities: [90, 95, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048],
  },
};

export default nextConfig;
