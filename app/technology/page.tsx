import { PageHeader } from '@/components/PageHeader';
import { BrainCircuit, Layers, BarChart4, MoveRight } from 'lucide-react';

const coreFeatures = [
  {
    icon: BrainCircuit,
    title: "核心引擎：强化学习",
    description: "策略的核心是一个AI智能体，它在真实市场环境中通过不断“试错”学习，动态优化交易决策以寻求长期收益的最大化，而非依赖任何固定的止盈止损规则。"
  },
  {
    icon: Layers,
    title: "决策依据：四大多因子模型",
    description: "AI的决策基于一个全面的多维度因子库，涵盖基本面、技术面、市场情绪和宏观政策四大类别，形成对市场的立体化、全方位感知。"
  },
  {
    icon: BarChart4,
    title: "动态权重机制",
    description: "模型的核心优势在于能根据市场风格（如牛市、熊市、震荡市）的切换，动态调整不同因子的权重，确保策略的适应性和在不同周期下的有效性。"
  }
];

export default function TechnologyPage() {
  return (
    <div>
      <PageHeader
        title="AI核心技术"
        subtitle="揭示驱动策略alpha的硬核技术架构与决策模型"
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-6 mb-12">
                <div className="flex-shrink-0 w-12 h-12 bg-surface border border-border rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-text-main mb-2">{feature.title}</h3>
                  <p className="text-text-secondary text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}