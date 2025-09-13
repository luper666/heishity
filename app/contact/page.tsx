"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // <-- 引入 useRouter
import { PageHeader } from '@/components/PageHeader';
import config from '@/config.json';
import { Users, Loader, CheckCircle, AlertTriangle } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

// 在这里定义您的公开PDF链接
const WHITE_PAPER_URL = "/heishity/AI驱动量化策略深度白皮书.pdf";

export default function ContactPage() {
  const { whitepaper_download_count } = config.conversion_metrics;
  const router = useRouter(); // <-- 初始化 router

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

    if (!formData.name) {
      tempErrors.name = '姓名不能为空';
      isValid = false;
    }
    
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!formData.phone) {
      tempErrors.phone = '手机号不能为空';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = '请输入11位有效的国内手机号码';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('submitting');
    
    // 模拟保存数据的操作 (未来您可以将formData发送到您的数据库)
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    setFormState('success');

    // **关键修改：提交成功后，延迟1秒然后跳转到PDF链接**
    setTimeout(() => {
      window.open(WHITE_PAPER_URL, '_blank');
    }, 1000);
  };

  return (
    <div>
      <PageHeader
        title="交流与合作"
        subtitle="提交信息，即刻在线阅览《AI驱动量化策略深度白皮书》"
      />
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-surface p-8 md:p-12 rounded-lg border border-border">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center bg-background px-4 py-2 rounded-full border border-border mb-4">
                <Users className="w-5 h-5 text-primary mr-2" />
                <span className="text-text-main">
                  已有 <strong className="text-primary">{whitepaper_download_count.toLocaleString()}</strong> 位专业投资者获取
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-text-main">提交信息，即刻获取</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 姓名 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary">姓名</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full bg-background border border-border rounded-md shadow-sm py-3 px-4 text-text-main focus:outline-none focus:ring-primary focus:border-primary" />
                <p className="mt-2 text-xs text-text-secondary">* 请使用与未来券商开户一致的真实姓名。</p>
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              
              {/* 手机号 */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-secondary">手机号</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full bg-background border border-border rounded-md shadow-sm py-3 px-4 text-text-main focus:outline-none focus:ring-primary focus:border-primary" />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>

              {/* 提交按钮 */}
              <div className="pt-4">
                <button type="submit" disabled={formState === 'submitting' || formState === 'success'} className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-background bg-primary hover:bg-primary-hover focus:outline-none disabled:bg-gray-600 disabled:cursor-not-allowed">
                  {formState === 'submitting' && <Loader className="animate-spin w-5 h-5 mr-2" />}
                  {formState === 'idle' && '确认提交'}
                  {formState === 'submitting' && '正在验证...'}
                  {formState === 'success' && '即将跳转...'}
                </button>
              </div>
            </form>

            {/* 提交反馈信息 */}
            {formState === 'success' && (
              <div className="mt-6 flex items-center text-green-400 bg-green-900/20 p-4 rounded-md">
                <CheckCircle className="w-5 h-5 mr-3" />
                <p>验证成功！正在为您打开白皮书...</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
