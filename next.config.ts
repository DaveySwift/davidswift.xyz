import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Dev scripts are blocked unless the browser origin is allowlisted.
  // localhost is allowed by default; 127.0.0.1 is what local previews use.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
