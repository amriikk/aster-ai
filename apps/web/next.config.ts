import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site lives at jotrio.com/aster, so every page and file starts with /aster.
  basePath: "/aster",

  async redirects() {
    return [
      // Visiting the bare deployment URL sends people to the site.
      { source: "/", destination: "/aster", basePath: false, permanent: false },
    ];
  },

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