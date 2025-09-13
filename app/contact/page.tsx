"use client"; // 声明为客户端组件，以便使用Hooks

import { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import config from '@/config.json';
import { Users, Mail, Loader, CheckCircle, AlertTriangle } from 'lucide-react';

// 定义表单状态类型
type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const { whitepaper_download_count } = config.conversion_metrics;

  // 使用useState管理表单数据、错误和状态
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });
  const [formState, setFormState] = useState<FormState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let tempErrors = { name: '', email: '', phone: '' };
    let isValid = true;

    // 姓名校验
    if (!formData.name) {
      tempErrors.name = '姓名不能为空';
      isValid = false;
    }

    // 邮箱校验
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!formData.email) {
      tempErrors.email = '邮箱不能为空';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = '请输入有效的邮箱格式';
      isValid = false;
    }
    
    // 国内手机号校验 (长度11位，1开头)
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

    // --- 模拟API请求 ---
    // 在真实场景中，这里会向您的后端API发送请求
    try {
      // const response = await fetch('/api/send-whitepaper', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Network response was not ok.');
      
      // 模拟成功
      await new Promise(resolve => setTimeout(resolve, 1500)); // 模拟网络延迟
      setFormState('success');

    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <div>
      <PageHeader
        title="交流与合作"
        subtitle="获取完整的《AI驱动量化策略深度白皮书》，并可优先预约策略专家的一对一线上交流"
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
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 姓名 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary">姓名</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full bg-background border border-border rounded-md shadow-sm py-3 px-4 text-text-main focus:outline-none focus:ring-primary focus:border-primary" />
                <p className="mt-2 text-xs text-text-secondary">
                  * 请使用与未来券商开户一致的真实姓名。
                </p>
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* 邮箱 */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary">邮箱 (用于接收白皮书)</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full bg-background border border-border rounded-md shadow-sm py-3 px-4 text-text-main focus:outline-none focus:ring-primary focus:border-primary" />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
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
                  {formState === 'submitting' && '提交中...'}
                  {formState === 'success' && '提交成功'}
                  {formState === 'error' && '提交失败，请重试'}
                </button>
              </div>
            </form>

            {/* 提交反馈信息 */}
            {formState === 'success' && (
              <div className="mt-6 flex items-center text-green-400 bg-green-900/20 p-4 rounded-md">
                <CheckCircle className="w-5 h-5 mr-3" />
                <p>提交成功！白皮书将在10分钟内发送至您的邮箱，请注意查收。</p>
              </div>
            )}
            {formState === 'error' && (
              <div className="mt-6 flex items-center text-red-400 bg-red-900/20 p-4 rounded-md">
                <AlertTriangle className="w-5 h-5 mr-3" />
                <p>提交失败，请检查您的网络或稍后重试。</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}