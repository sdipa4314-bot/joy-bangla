import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function StatCard({
  title,
  value,
  subvalue,
  icon: Icon,
  variant = 'neutral',
  trend,
  trendType = 'neutral', // 'positive' | 'negative' | 'neutral'
  className = '',
}) {
  const accentBorder = {
    emerald: 'border-l-4 border-l-emerald-500',
    amber: 'border-l-4 border-l-amber-500',
    red: 'border-l-4 border-l-red-500',
    neutral: 'border-l-4 border-l-slate-700',
  };

  const iconBg = {
    emerald: 'bg-emerald-950/50 text-emerald-400 border border-emerald-800/50',
    amber: 'bg-amber-950/50 text-amber-400 border border-amber-800/50',
    red: 'bg-red-950/50 text-red-400 border border-red-800/50',
    neutral: 'bg-slate-900 text-slate-300 border border-slate-800',
  };

  return (
    <div
      className={`bg-[#0d1424] border border-[#1d2a44] rounded-xl p-5 shadow-sm relative overflow-hidden ${
        accentBorder[variant] || accentBorder.neutral
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
            {title}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl lg:text-3xl font-bold tracking-tight text-white font-mono">
              {value}
            </span>
            {subvalue && (
              <span className="text-xs text-slate-400">{subvalue}</span>
            )}
          </div>
        </div>

        {Icon && (
          <div className={`p-2.5 rounded-lg shrink-0 ${iconBg[variant] || iconBg.neutral}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      {trend && (
        <div className="mt-4 pt-3 border-t border-[#1a253d] flex items-center gap-1.5 text-xs">
          {trendType === 'positive' && (
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
          )}
          {trendType === 'negative' && (
            <ArrowDownRight className="w-3.5 h-3.5 text-red-400" />
          )}
          <span
            className={
              trendType === 'positive'
                ? 'text-emerald-400 font-medium'
                : trendType === 'negative'
                ? 'text-red-400 font-medium'
                : 'text-slate-400'
            }
          >
            {trend}
          </span>
          <span className="text-slate-500">vs last 30 days</span>
        </div>
      )}
    </div>
  );
}
