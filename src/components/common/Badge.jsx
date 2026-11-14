import React from 'react';

export default function Badge({ 
  variant = 'neutral', 
  children, 
  size = 'md',
  showDot = true,
  className = '' 
}) {
  const variantStyles = {
    safe: 'bg-emerald-950/50 text-emerald-300 border-emerald-800/60',
    suspicious: 'bg-amber-950/50 text-amber-300 border-amber-800/60',
    danger: 'bg-red-950/50 text-red-300 border-red-800/60',
    info: 'bg-sky-950/50 text-sky-300 border-sky-800/60',
    neutral: 'bg-slate-900 text-slate-300 border-slate-800',
  };

  const dotStyles = {
    safe: 'bg-emerald-400',
    suspicious: 'bg-amber-400',
    danger: 'bg-red-400',
    info: 'bg-sky-400',
    neutral: 'bg-slate-400',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5 font-medium',
    md: 'text-xs px-2.5 py-1 font-medium',
    lg: 'text-sm px-3 py-1.5 font-medium',
  };

  const selectedVariant = variantStyles[variant.toLowerCase()] || variantStyles.neutral;
  const selectedDot = dotStyles[variant.toLowerCase()] || dotStyles.neutral;

  return (
    <span
      className={`inline-flex items-center gap-1.5 border rounded-md tracking-wide ${selectedVariant} ${sizeStyles[size]} ${className}`}
    >
      {showDot && (
        <span className={`w-1.5 h-1.5 rounded-full ${selectedDot}`} />
      )}
      {children}
    </span>
  );
}
