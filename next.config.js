/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true // 避免外部图像优化，因为我们处理的是本地文件
  },
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig;
