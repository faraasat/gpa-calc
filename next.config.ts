/** @type {import('next').NextConfig} */
// const optimize = require("next-optimized-classnames");

import {NextConfig} from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/sitemap",
        destination: "/sitemap.xml",
      },
    ];
  },
};

// module.exports = optimize(nextConfig);

export default nextConfig
