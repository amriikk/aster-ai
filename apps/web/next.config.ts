import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tailwind v4 runs through Turbopack, the bundler Next.js uses.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;