import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { ShieldCheck, BrainCircuit, TrendingUp, ChevronRight } from 'lucide-react';
import { ConceptualChart } from '@/components/ConceptualChart';

const philosophies = [
  {
    icon: BrainCircuit,
    title: "AI驱动决策",
    description: "基于强化学习模型，规避人性弱点，执行高度纪律性的交易策略。",
  },
  {
    icon: ShieldCheck,
    title: "动态风险平价",
    description: "风险管理贯穿始终，动态调整因子权重与仓位，适应多变市场。",
  },
  {
    icon: TrendingUp,
    title: "追求长期Alpha",
    description: "通过多因子策略池，发掘与市场低相关的超额收益来源。",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-center">
         <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.1),rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-text-main mb-6">
            数据驱动未来，智能穿越周期
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-text-secondary mb-10">
            探索由AI深度赋能的下一代量化投资策略，旨在复杂市场环境中实现长期稳健的资本增值。
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 font-semibold text-background bg-primary hover:bg-primary-hover rounded-md transition-colors">
            获取策略白皮书
          </Link>
        </div>
      </section>

      {/* Philosophies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {philosophies.map((item, index) => (
              <div key={index} className="bg-surface p-8 rounded-lg border border-border">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-text-main mb-2">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conceptual Chart Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-text-main mb-4">策略理念示意</h2>
          <p className="max-w-2xl mx-auto text-text-secondary mb-8">
            我们致力于在控制回撤的前提下，捕捉市场中的增长机会，力求实现平滑向上的净值曲线。
          </p>
          <div className="w-full max-w-4xl mx-auto h-96 bg-surface rounded-lg border border-border p-4">
            <ConceptualChart />
          </div>
        </div>
      </section>
    </>
  );
}