/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/heishity',
  assetPrefix: '/heishity', // 注意：末尾的斜杠 / 已被移除，这是更规范的写法

  // V-- 这是新增的、解决问题的关键配置 --V
  images: {
    unoptimized: true,
  },
  // ^-- 新增部分结束 --^
};

module.exports = nextConfig;
