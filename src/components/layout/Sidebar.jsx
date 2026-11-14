import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  QrCode,
  Link2,
  History,
  ShieldAlert,
  BookOpen,
  Shield,
  ArrowLeft,
  X,
  Radio,
} from 'lucide-react';
import { APP_NAME, APP_VERSION } from '../../utils/constants';

const navItems = [
  { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
  { name: 'QR Scanner', path: '/scanner', icon: QrCode },
  { name: 'URL Checker', path: '/url-checker', icon: Link2 },
  { name: 'Scan History', path: '/history', icon: History },
  { name: 'Threat Intelligence', path: '/threat-intelligence', icon: ShieldAlert },
  { name: 'Security Guide', path: '/security-guide', icon: BookOpen },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#0a0f1d] border-r border-[#1a263d] flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 px-5 border-b border-[#1a263d] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-white flex items-center gap-1">
                QR<span className="text-emerald-400">Shield</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">
                {APP_VERSION}
              </span>
            </div>
          </Link>

          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Core Modules
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-[#121b2d] border border-transparent'
                  }`
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>

        {/* Engine Status & Landing page return */}
        <div className="p-3 border-t border-[#1a263d] space-y-2">
          {/* Security Status Box */}
          <div className="p-3 rounded-lg bg-[#0d1424] border border-[#1d2b45] text-xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                Engine Status
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                STANDBY
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-tight">
              Visual foundation active. Threat heuristics pipeline ready for integration.
            </p>
          </div>

          {/* Return to Landing Page */}
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-2 px-3 text-xs text-slate-400 hover:text-slate-200 hover:bg-[#121b2d] rounded-lg transition-colors border border-transparent hover:border-[#1d2b45]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Landing Page</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
