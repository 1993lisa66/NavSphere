/** @type {import('next').NextConfig} */
const nextConfig = {
  // 根据需要启用 standalone 输出
  // output: 'standalone',
  
  images: {
    domains: [
      'dash.cloudflare.com',
      'www.google.com',
      'ph-static.imgix.net',
      'app.leonardo.ai'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: '/api/auth/:path*'
      },
      {
        source: '/auth/:path*',
        destination: '/auth/:path*'
      }
    ]
  },
  // Vercel configuration
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost', '*.vercel.app', 'navsphere.com', 'nav.zhanglei928.com']
    }
  }
}

module.exports = nextConfig
