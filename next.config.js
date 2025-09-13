/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // 核心配置：必须明确告诉Next.js网站的最终家在一个子目录里
  basePath: '/heishity',
  assetPrefix: '/heishity',

  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
