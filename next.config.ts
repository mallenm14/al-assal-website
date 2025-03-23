import type { NextConfig } from "next";
import dotenv from "dotenv";

dotenv.config();

const nextConfig: NextConfig = {
  distDir: "build",
  experimental: {
    workerThreads: false,
    cpus: 4,
  },
};

export default nextConfig;
