"use client"; // 确保这行在最顶部

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // <-- 引入一个新工具
import config from '@/config.json';

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/technology", label: "AI核心技术" },
  { href: "/risk-control", label: "风控哲学" },
  { href: "/research", label: "研究洞察" },
  { href: "/contact", label: "交流与合作" },
];

export function Header() {
  const { institution_name, logo_path } = config.site_settings;
  const router = useRouter(); // <-- 初始化工具
  
  // V-- 这是解决问题的关键 --V
  const basePath = process.env.NODE_ENV === 'production' ? '/heishity' : '';
  // ^-- 关键代码结束 --^

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* V-- 修改图片路径 --V */}
          <Image src={`${basePath}${logo_path}`} alt="Logo" width={32} height={32} />
          {/* ^-- 修改结束 --^ */}
          <span className="text-xl font-semibold text-text-main">{institution_name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-text-secondary hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
