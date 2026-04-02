import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  ...(process.env.NODE_ENV === 'production' && {
    basePath: "/portfolio",
    assetPrefix: "/portfolio/",
  }),
};

export default nextConfig;