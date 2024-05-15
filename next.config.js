/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      { protocol: "https", hostname: "**" },
    ],
  },
};

module.exports = nextConfig;
