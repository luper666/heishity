/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  // 核心配置：仅在生产环境（部署时）添加前缀
  basePath: isProd ? '/heishity' : '',
  assetPrefix: isProd ? '/heishity/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
