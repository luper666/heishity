import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative py-20 bg-surface border-b border-border">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.08),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-text-main mb-4">{title}</h1>
        <p className="max-w-3xl mx-auto text-lg text-text-secondary">{subtitle}</p>
      </div>
    </section>
  );
}