/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  compiler: {
    ssr: true,
  },
  experimental: {
    serverComponents: true,
  },
};

module.exports = nextConfig;
