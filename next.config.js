/** @type {import('next').NextConfig} */
const optimize = require("next-optimized-classnames");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = optimize(nextConfig);
