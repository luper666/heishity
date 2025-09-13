"use client";
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const conceptualData = [
  { name: 'M1', strategy: 2, market: 1 },
  { name: 'M2', strategy: 5, market: 2 },
  { name: 'M3', strategy: 4, market: -1 },
  { name: 'M4', strategy: 8, market: 3 },
  { name: 'M5', strategy: 12, market: 5 },
  { name: 'M6', strategy: 15, market: 6 },
  { name: 'M7', strategy: 13, market: 4 },
  { name: 'M8', strategy: 18, market: 7 },
  { name: 'M9', strategy: 25, market: 10 },
  { name: 'M10', strategy: 30, market: 12 },
  { name: 'M11', strategy: 28, market: 11 },
  { name: 'M12', strategy: 35, market: 15 },
  { name: 'M13', strategy: 40, market: 18 },
  { name: 'M14', strategy: 38, market: 16 },
  { name: 'M15', strategy: 45, market: 20 },
  { name: 'M16', strategy: 55, market: 22 },
  { name: 'M17', strategy: 60, market: 25 },
  { name: 'M18', strategy: 58, market: 23 },
  { name: 'M19', strategy: 65, market: 28 },
  { name: 'M20', strategy: 75, market: 30 },
];

export function ConceptualChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={conceptualData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        {/* V-- 关键修改：定义两个独立的颜色渐变 --V */}
        <defs>
          <linearGradient id="colorStrategy" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.4}/>
            <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorMarket" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8B949E" stopOpacity={0.2}/>
            <stop offset="95%" stopColor="#8B949E" stopOpacity={0}/>
          </linearGradient>
        </defs>
        {/* ^-- 关键修改 --^ */}

        <XAxis dataKey="name" tick={{ fill: '#8B949E', fontSize: 12 }} axisLine={{ stroke: '#30363D' }} tickLine={{ stroke: '#30363D' }}/>
        <YAxis tickFormatter={(tick) => `${tick}%`} tick={{ fill: '#8B949E', fontSize: 12 }} axisLine={{ stroke: '#30363D' }} tickLine={{ stroke: '#30363D' }}/>
        <Tooltip contentStyle={{ background: 'rgba(13, 17, 23, 0.8)', borderColor: '#30363D', color: '#E6EDF3', backdropFilter: 'blur(4px)', }} labelStyle={{ fontWeight: 'bold' }} cursor={{ stroke: '#484F58', strokeDasharray: '3 3' }}/>
        <Legend verticalAlign="top" align="right" wrapperStyle={{ top: -10, right: 0 }} formatter={(value) => <span style={{ color: '#E6EDF3' }}>{value}</span>}/>
        
        {/* V-- 关键修改：使用 Area 组件并应用不同的 fill --V */}
        <Area type="monotone" dataKey="market" name="市场基准" stroke="#8B949E" strokeWidth={1.5} fillOpacity={1} fill="url(#colorMarket)" dot={false} />
        <Area type="monotone" dataKey="strategy" name="策略理念" stroke="#D4AF37" strokeWidth={2.5} fillOpacity={1} fill="url(#colorStrategy)" dot={false} />
        {/* ^-- 关键修改 --^ */}
      </AreaChart>
    </ResponsiveContainer>
  );
}