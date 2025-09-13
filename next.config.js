/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/heishity',
  assetPrefix: '/heishity',
  images: {
    unoptimized: true,
  },
  // V-- 新增一行，确保所有链接末尾都有斜杠，提高兼容性 --V
  trailingSlash: true,
  // ^-- 新增部分结束 --^
};

module.exports = nextConfig;
