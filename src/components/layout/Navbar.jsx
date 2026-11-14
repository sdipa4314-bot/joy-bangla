import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, ArrowRight, Lock } from 'lucide-react';
import Button from '../common/Button';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1b263b] bg-[#080c14]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                QR<span className="text-emerald-400">Shield</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link
              to="/"
              className={`transition-colors hover:text-white ${
                location.pathname === '/' ? 'text-emerald-400 font-medium' : 'text-slate-300'
              }`}
            >
              Home
            </Link>
            <a
              href="#features"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-slate-300 hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="#why-qr-security"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Why QR Security
            </a>
            <Link
              to="/security-guide"
              className={`transition-colors hover:text-white ${
                location.pathname === '/security-guide' ? 'text-emerald-400 font-medium' : 'text-slate-300'
              }`}
            >
              Security Guide
            </Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/scanner">
              <Button variant="primary" size="sm" icon={ArrowRight} iconPosition="right">
                Launch Scanner
              </Button>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#1b263b] bg-[#0c121e] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/50 text-slate-200 hover:text-white"
            >
              Home
            </Link>
            <a
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/50 text-slate-200 hover:text-white"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/50 text-slate-200 hover:text-white"
            >
              How It Works
            </a>
            <a
              href="#why-qr-security"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/50 text-slate-200 hover:text-white"
            >
              Why QR Security
            </a>
            <Link
              to="/security-guide"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/50 text-slate-200 hover:text-white"
            >
              Security Guide
            </Link>
          </div>

          <div className="pt-3 border-t border-[#1b263b] flex flex-col gap-2">
            <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="secondary" size="md" className="w-full">
                Dashboard Overview
              </Button>
            </Link>
            <Link to="/scanner" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="primary" size="md" className="w-full" icon={ArrowRight} iconPosition="right">
                Launch Scanner
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
