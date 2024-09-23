/** @type {import('next').NextConfig} */
const optimize = require("next-optimized-classnames");

const nextConfig = {
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

module.exports = optimize(nextConfig);
