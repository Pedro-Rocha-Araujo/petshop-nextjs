import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactCompiler: true,
  basePath: `/petshop-nextjs`,
  assetPrefix: `/petshop-nextjs`,
};

export default nextConfig;
