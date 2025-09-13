"use client";

import { useState, useEffect } from 'react'; // <-- 引入新工具
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // <-- 引入新工具
import config from '@/config.json';
import { Menu, X } from 'lucide-react'; // <-- 引入新图标

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/technology", label: "AI核心技术" },
  { href: "/risk-control", label: "风控哲学" },
  { href: "/research", label: "研究洞察" },
  { href: "/contact", label: "交流与合作" },
];

export function Header() {
  const { institution_name, logo_path } = config.site_settings;
  const [isMenuOpen, setIsMenuOpen] = useState(false); // <-- 管理菜单开关的状态
  const pathname = usePathname();

  // 当路由变化时（用户点击链接跳转页面），自动关闭菜单
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const basePath = process.env.NODE_ENV === 'production' ? '/heishity' : '';

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src={`${basePath}${logo_path}`} alt="Logo" width={32} height={32} />
          <span className="text-xl font-semibold text-text-main">{institution_name}</span>
        </Link>
        
        {/* --- 电脑端导航 (中等屏幕及以上显示) --- */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-text-secondary hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* --- 手机端汉堡按钮 (中等屏幕以下显示) --- */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* --- 手机端展开的菜单 --- */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-surface border-b border-border flex flex-col items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="w-full text-center py-4 text-lg text-text-main hover:bg-background transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
