/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // V-- 新增部分 --V
  basePath: '/heishity',
  assetPrefix: '/heishity/',
  // ^-- 新增部分 --^
};

module.exports = nextConfig;
