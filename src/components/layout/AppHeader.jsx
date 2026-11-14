import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, QrCode, ShieldCheck, Bell, ShieldAlert } from 'lucide-react';
import Button from '../common/Button';

const pageTitles = {
  '/dashboard': { title: 'Security Overview', category: 'Dashboard' },
  '/scanner': { title: 'QR Code Threat Scanner', category: 'Live Detection' },
  '/url-checker': { title: 'URL Analysis Engine', category: 'Inspection' },
  '/history': { title: 'Scan Activity Audit', category: 'Telemetry Logs' },
  '/threat-intelligence': { title: 'Threat Intelligence Radar', category: 'Global Feeds' },
  '/security-guide': { title: 'Security Best Practices Guide', category: 'Knowledge Base' },
};

export default function AppHeader({ onToggleSidebar }) {
  const location = useLocation();
  const current = pageTitles[location.pathname] || {
    title: 'Security Workspace',
    category: 'Console',
  };

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-[#1a263d] bg-[#090e1a]/95 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between">
      {/* Left: Mobile hamburger & breadcrumbs */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#141f33] lg:hidden focus:outline-none"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {current.category}
          </div>
          <h1 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {current.title}
          </h1>
        </div>
      </div>

      {/* Right: Actions, radar status, quick scan */}
      <div className="flex items-center gap-3">
        {/* Quick Scan Action */}
        <Link to="/scanner">
          <Button variant="primary" size="sm" icon={QrCode} className="hidden sm:inline-flex">
            Scan QR Code
          </Button>
        </Link>

        {/* Status Chip */}
        <div className="hidden md:flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-[#0f172a] border border-[#1f2d47] text-xs font-mono text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Zero-Trust Active</span>
        </div>

        {/* Security Operator Mock Profile */}
        <div className="flex items-center gap-2 pl-2 border-l border-[#1a263d]">
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-emerald-400 font-mono">
            SEC
          </div>
          <div className="hidden xl:block text-left">
            <div className="text-xs font-medium text-slate-200">Security Analyst</div>
            <div className="text-[10px] text-slate-400 font-mono">analyst@qrshield.local</div>
          </div>
        </div>
      </div>
    </header>
  );
}
