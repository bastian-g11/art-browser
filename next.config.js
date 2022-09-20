/** @type {import('next').NextConfig} */
const { withSuperjson } = require('next-superjson');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = withSuperjson()({
  ...nextConfig,
});
