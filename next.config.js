/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.discordapp.com", "s.gravatar.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
