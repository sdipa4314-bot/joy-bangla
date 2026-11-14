import React from 'react';

export default function RiskMeter({ score = 0, size = 'md', showLabel = true }) {
  // Score 0-100
  const normalizedScore = Math.min(100, Math.max(0, score));

  let color = 'emerald';
  let statusText = 'Low Risk';

  if (normalizedScore > 70) {
    color = 'red';
    statusText = 'Critical Risk';
  } else if (normalizedScore > 30) {
    color = 'amber';
    statusText = 'Suspicious';
  }

  const colorClasses = {
    emerald: {
      bar: 'bg-emerald-500',
      text: 'text-emerald-400',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-950/40',
    },
    amber: {
      bar: 'bg-amber-500',
      text: 'text-amber-400',
      border: 'border-amber-500/30',
      bg: 'bg-amber-950/40',
    },
    red: {
      bar: 'bg-red-500',
      text: 'text-red-400',
      border: 'border-red-500/30',
      bg: 'bg-red-950/40',
    },
  };

  const activeColor = colorClasses[color];

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-slate-400">Risk Assessment</span>
          <span className={`font-mono font-bold ${activeColor.text}`}>
            {normalizedScore} / 100 ({statusText})
          </span>
        </div>
      )}
      <div className="w-full h-2 bg-[#121b2d] rounded-full overflow-hidden border border-[#223352]">
        <div
          className={`h-full transition-all duration-300 rounded-full ${activeColor.bar}`}
          style={{ width: `${normalizedScore}%` }}
        />
      </div>
    </div>
  );
}
