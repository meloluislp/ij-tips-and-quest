/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'multimedia.infojobs.net']
  },
  generateEtags: false,
  reactStrictMode: true,
  headers: () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store'
        }
      ]
    }
  ]
}

module.exports = nextConfig
