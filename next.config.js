/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['t4.ftcdn.net', 'encrypted-tbn0.gstatic.com','images.pexels.com',"platform-lookaside.fbsbx.com"]
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
