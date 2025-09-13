import { PageHeader } from '@/components/PageHeader';
import { ShieldCheck, PieChart, Activity, Minimize } from 'lucide-react';

const riskPillars = [
  {
    icon: PieChart,
    title: "投资组合分散化",
    description: "通过配置多个低相关性的股票与因子策略，有效分散个股“黑天鹅”等非系统性风险，避免单一风险点对整体净值造成巨大冲击。"
  },
  {
    icon: Activity,
    title: "动态仓位管理",
    description: "AI模型根据对市场整体风险的评估，实时动态调整总仓位敞口。在风险升高时降低仓位，在机会出现时果断出击，实现风险与收益的平衡。"
  },
  {
    icon: ShieldCheck,
    title: "多维度风险预警",
    description: "系统7x24小时不间断监测市场波动率、最大回撤、因子拥挤度等多项指标，当风险触发预设阈值时，自动执行减仓或预警程序。"
  },
  {
    icon: Minimize,
    title: "严格回撤控制",
    description: "将最大回撤控制作为核心风控目标之一，通过预设的硬性回撤限制和动态止损机制，避免灾难性亏损，为长期复利增长奠定坚实基础。"
  }
];

export default function RiskControlPage() {
  return (
    <div>
      <PageHeader
        title="系统性风控哲学"
        subtitle="风险控制并非简单的止损，而是贯穿投前、投中、投后的动态系统工程"
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {riskPillars.map((pillar, index) => (
              <div key={index} className="bg-surface p-8 rounded-lg border border-border">
                <pillar.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-text-main mb-2">{pillar.title}</h3>
                <p className="text-text-secondary">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}