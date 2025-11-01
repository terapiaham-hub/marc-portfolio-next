/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    formats: ['image/webp'],
  },
  i18n: {
    locales: ['en', 'es', 'ca'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
