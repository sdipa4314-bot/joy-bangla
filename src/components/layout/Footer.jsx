import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Terminal, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#1b263b] bg-[#070b12] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg">
              <div className="w-7 h-7 rounded-md bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Shield className="w-4 h-4" />
              </div>
              <span>QR<span className="text-emerald-400">Shield</span></span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Real-time QR code threat detection and malicious URL inspection platform, protecting users from quishing and rogue redirects.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400/90 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>UI Foundation Ready • v0.1.0-alpha</span>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Application
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/dashboard" className="hover:text-emerald-400 transition-colors">
                  Overview Dashboard
                </Link>
              </li>
              <li>
                <Link to="/scanner" className="hover:text-emerald-400 transition-colors">
                  QR Scanner
                </Link>
              </li>
              <li>
                <Link to="/url-checker" className="hover:text-emerald-400 transition-colors">
                  URL Threat Checker
                </Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-emerald-400 transition-colors">
                  Scan History
                </Link>
              </li>
            </ul>
          </div>

          {/* Intelligence & Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Security Intelligence
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/threat-intelligence" className="hover:text-emerald-400 transition-colors">
                  Global Threat Radar
                </Link>
              </li>
              <li>
                <Link to="/security-guide" className="hover:text-emerald-400 transition-colors">
                  Quishing Defense Guide
                </Link>
              </li>
              <li>
                <a href="#why-qr-security" className="hover:text-emerald-400 transition-colors">
                  Why QR Security Matters
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">
                  Inspection Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Security & Compliance notice */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Zero-Trust Verification
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Never trust raw QR redirects blindly. Inspect domain age, redirection loops, and SSL signatures prior to client navigation.
            </p>
            <div className="p-2.5 rounded-lg bg-[#0d1424] border border-[#1b273d] text-[11px] text-slate-400 flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Client-side sandbox &amp; heuristic assessment</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#141d2f] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} QR Shield Cybersecurity Systems. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-slate-400">
              STAGE 1: FRONTEND VISUAL FOUNDATION
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
