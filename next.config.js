/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'multimedia.infojobs.net']
  },
  generateEtags: false,
  reactStrictMode: true
}

module.exports = nextConfig
