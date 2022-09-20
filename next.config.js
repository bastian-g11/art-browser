/** @type {import('next').NextConfig} */
const { withSuperjson } = require('next-superjson');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/artworks',
        permanent: true,
      },
    ];
  },
};

module.exports = withSuperjson()({
  ...nextConfig,
});
