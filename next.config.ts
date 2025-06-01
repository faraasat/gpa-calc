/** @type {import('next').NextConfig} */
// const optimize = require("next-optimized-classnames");

import { NextConfig } from "next";

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
  async redirects() {
    return [
      {
        source: "/calc-gpa",
        destination: "/calculate-gpa-grade-point-average",
        permanent: true,
      },
      {
        source: "/calc-cgpa",
        destination: "/calculate-cgpa-cumulative-grade-point-average",
        permanent: true,
      },
      {
        source: "/gpa-to-ects",
        destination: "/gpa-to-ects-european-credit-transfer-system",
        permanent: true,
      },
    ];
  },
};

// module.exports = optimize(nextConfig);

export default nextConfig;
