/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['t4.ftcdn.net','images.pexels.com',"platform-lookaside.fbsbx.com"]
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
