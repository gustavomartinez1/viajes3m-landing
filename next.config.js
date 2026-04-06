/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/viajes3m-landing',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
