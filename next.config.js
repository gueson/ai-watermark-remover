/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  experimental: {
    serverActions: true
  },
  // 让 @imgly/background-removal 在客户端动态加载，不参与服务端构建
  transpilePackages: ['@imgly/background-removal']
};

module.exports = nextConfig;
