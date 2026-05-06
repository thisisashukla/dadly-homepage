import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dadlyapp.com', 'www.dadlyapp.com'],
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/blogs/', destination: '/blog', permanent: true },
      { source: '/blogs/:path*', destination: '/blog/:path*', permanent: true },
      { source: '/privacy.html', destination: '/privacy', permanent: true },
      { source: '/support.html', destination: '/support', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
