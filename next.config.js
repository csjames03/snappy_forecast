/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_KEY: process.env.API_KEY,
      },
      images: {
        domains: ['flagsapi.com', 'flagcdn.com'],
      },
}

module.exports = nextConfig
