import React from 'react';
import { Info } from 'lucide-react';

export default function DemoNotice({
  label = 'Visual Evaluation Mode — Telemetry & analytics shown below are simulated sample data for UI demonstration.',
  className = '',
}) {
  return (
    <div
      className={`flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-[#0e172a] border border-[#233555] text-slate-400 text-xs ${className}`}
    >
      <Info className="w-4 h-4 text-emerald-400 shrink-0" />
      <span className="leading-relaxed">
        <strong className="text-slate-200 font-semibold uppercase tracking-wider text-[11px] mr-1.5">
          [Sample Telemetry]
        </strong>
        {label}
      </span>
    </div>
  );
}
