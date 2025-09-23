"use client";

import { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import config from '@/config.json';
import { Users, Loader, CheckCircle, AlertTriangle } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

// 确保这里的PDF文件名和路径完全正确
const WHITE_PAPER_URL = "/heishity/AI驱动量化策略深度白皮书.pdf"; 

export default function ContactPage() {
  // **核心修改：用 state 来管理计数值，初始值为配置文件中的数字**
  const [viewCount, setViewCount] = useState(config.conversion_metrics.whitepaper_download_count);
  
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [formState, setFormState] = useState<FormState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let tempErrors = { name: '', phone: '' };
    let isValid = true;
    if (!formData.name) { tempErrors.name = '姓名不能为空'; isValid = false; }
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!formData.phone) { tempErrors.phone = '手机号不能为空'; isValid = false; } 
    else if (!phoneRegex.test(formData.phone)) { tempErrors.phone = '请输入11位有效的国内手机号码'; isValid = false; }
    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('submitting');
    
    try {
      // 我们依然将数据发送到Formspree来接收客户信息
      const response = await fetch("https://formspree.io/f/meoldpbq", { // <--- 请确保这里是您自己的Formspree链接！
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Network response was not ok.');

      setFormState('success');
      
      // **核心修改：提交成功后，前端计数值 +1**
      setViewCount(prevCount => prevCount + 1);

      setTimeout(() => {
        window.open(WHITE_PAPER_URL, '_blank');
      }, 1000);

    } catch (error) {
      setFormState('error');
    }
  };

return (
    <div>
      <PageHeader
        title="交流与合作"
        subtitle={<span className="font-bold text-primary">提交信息，即刻在线阅览《AI驱动量化策略深度白皮书》</span>}
      />
      
      {/* ===== 开始：新增的文本内容区域 ===== */}
      <section className="py-16 text-base">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-surface p-8 md:p-10 rounded-lg border border-border text-text-secondary leading-relaxed">
            <p className="mb-6">
              我们是黑石投研，一群着迷于数据与算法的技术人。我们相信，严谨的逻辑和创新的科技，能够帮助人们更深入地理解复杂信息背后的规律。
            </p>
            <p className="mb-4 text-text-main">
              在这里，我们主要做两件事：
            </p>
            <ul className="list-disc list-inside mb-6 space-y-3">
              <li>
                <strong className="font-semibold text-text-main">探索前沿的策略研究方法：</strong>我们痴迷于打磨各种量化分析模型，并将探索过程中的思考和发现分享给你。
              </li>
              <li>
                <strong className="font-semibold text-text-main">开发专业的分析辅助软件：</strong>我们致力于将复杂的研究逻辑，转化为简洁、高效的软件工具，做你市场研究和学习的好帮手。
              </li>
            </ul>
            <p className="mb-6">
              我们不是投资机构，也不提供任何投资建议。我们更像一个技术实验室，希望通过分享我们的研究成果和软件工具，与你一同探索、一同成长。
            </p>
            <p className="font-semibold text-text-main mb-2">
              👇 想加入我们的研究社群吗？
            </p>
            <p>
              在这里，你可以和我们的研究员直接交流，抢先体验新出炉的软件功能，与更多量化同好们一起碰撞思想的火花！
              <br/>
              期待与你更近一步的交流！
            </p>
          </div>
        </div>
      </section>
      {/* ===== 结束：新增的文本内容区域 ===== */}

      <section className="pb-20 pt-4">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-surface p-8 md:p-12 rounded-lg border border-border">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center bg-background px-4 py-2 rounded-full border border-border mb-4">
                <Users className="w-5 h-5 text-primary mr-2" />
                <span className="text-text-main">
                  {/* **核心修改：现在显示的是动态的 state 值** */}
                  已有 <strong className="text-primary">{viewCount.toLocaleString()}</strong> 位专业投资者获取
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-text-main">提交信息，即刻获取</h3>
            </div>
            
            {/* 表单的JSX部分保持完全不变 */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary">姓名</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full bg-background border border-border rounded-md shadow-sm py-3 px-4 text-text-main focus:outline-none focus:ring-primary focus:border-primary" />
                <p className="mt-2 text-xs text-text-secondary">* 请使用与未来券商开户一致的真实姓名。</p>
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-secondary">手机号</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full bg-background border border-border rounded-md shadow-sm py-3 px-4 text-text-main focus:outline-none focus:ring-primary focus:border-primary" />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div className="pt-4">
                <button type="submit" disabled={formState === 'submitting' || formState === 'success'} className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-background bg-primary hover:bg-primary-hover focus:outline-none disabled:bg-gray-600 disabled:cursor-not-allowed">
                  {formState === 'submitting' && <Loader className="animate-spin w-5 h-5 mr-2" />}
                  {formState === 'idle' && '确认提交'}
                  {formState === 'submitting' && '正在提交...'}
                  {formState === 'success' && '即将跳转...'}
                  {formState === 'error' && '提交失败, 请重试'}
                </button>
              </div>
            </form>

            {formState === 'success' && (
              <div className="mt-6 flex items-center text-green-400 bg-green-900/20 p-4 rounded-md">
                <CheckCircle className="w-5 h-5 mr-3" />
                <p>提交成功！正在为您打开白皮书...</p>
              </div>
            )}
             {formState === 'error' && (
              <div className="mt-6 flex items-center text-red-400 bg-red-900/20 p-4 rounded-md">
                <AlertTriangle className="w-5 h-5 mr-3" />
                <p>提交失败, 可能是网络问题, 请稍后重试。</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
