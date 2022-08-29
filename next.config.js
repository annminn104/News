/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
    formats: ["image/webp"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  compiler: {
    removeConsole: true,
  },
};

module.exports = nextConfig;
