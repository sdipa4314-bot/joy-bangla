import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  QrCode,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Eye,
  Zap,
  ArrowRight,
  Search,
  Layers,
  FileSearch,
  ExternalLink,
  ShieldAlert,
  Server,
  Globe,
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-400">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden cyber-grid border-b border-[#141e30]">
        {/* Subtle radial ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Security Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>CYBER DEFENSE PLATFORM • ANTI-QUISHING ENGINE</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Scan Smart.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                  Stay Safe.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                QR codes conceal their true destinations from human eyes. Cybercriminals use them
                for <strong>quishing</strong>, deceptive payment overlays, and multi-hop phishing
                redirections. <strong>QR Shield</strong> decodes and assesses the security of embedded URLs
                before you ever land on an unsafe page.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/scanner" className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    icon={QrCode}
                    className="w-full sm:w-auto text-base font-semibold px-6 py-3"
                  >
                    Scan a QR Code
                  </Button>
                </Link>
                <a href="#features" className="w-full sm:w-auto">
                  <Button
                    variant="secondary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right"
                    className="w-full sm:w-auto text-base px-6 py-3"
                  >
                    Explore Features
                  </Button>
                </a>
              </div>

              {/* Trust & Architecture Indicators */}
              <div className="pt-6 border-t border-[#1a253a] grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-xl font-bold font-mono text-white">0-Hop</div>
                  <div className="text-xs text-slate-400">Zero-Trust Sandbox</div>
                </div>
                <div>
                  <div className="text-xl font-bold font-mono text-emerald-400">100%</div>
                  <div className="text-xs text-slate-400">URL Pre-Inspection</div>
                </div>
                <div>
                  <div className="text-xl font-bold font-mono text-white">Multi-Vector</div>
                  <div className="text-xs text-slate-400">Threat Heuristics</div>
                </div>
              </div>
            </div>

            {/* Right Visual: Bespoke Cybersecurity QR Scanner HUD */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-[#0a101d] border border-[#1d2a44] rounded-2xl p-6 shadow-2xl relative">
                {/* HUD Top Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[#1a263d]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">
                      SYSTEM_HUD::ANALYSIS_LAYER
                    </span>
                  </div>
                  <Badge variant="safe" size="sm">
                    Target Armed
                  </Badge>
                </div>

                {/* QR Target Viewfinder */}
                <div className="my-6 relative bg-[#070b14] border border-[#19253d] rounded-xl p-8 flex flex-col items-center justify-center overflow-hidden">
                  {/* Viewfinder Corner Brackets */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-emerald-400" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-emerald-400" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-emerald-400" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-emerald-400" />

                  {/* Scanning Laser Line (CSS Subtle) */}
                  <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_rgba(16,185,129,0.8)]" />

                  {/* High Tech QR Matrix Graphic */}
                  <div className="w-40 h-40 border border-[#21324f] rounded-lg p-3 bg-[#0d1424] flex flex-col justify-between">
                    <div className="flex justify-between">
                      {/* Top-left position marker */}
                      <div className="w-8 h-8 border-2 border-emerald-400 p-1 flex items-center justify-center">
                        <div className="w-3.5 h-3.5 bg-emerald-400" />
                      </div>
                      {/* Top-right position marker */}
                      <div className="w-8 h-8 border-2 border-emerald-400 p-1 flex items-center justify-center">
                        <div className="w-3.5 h-3.5 bg-emerald-400" />
                      </div>
                    </div>

                    {/* Simulated data matrix cells */}
                    <div className="grid grid-cols-6 gap-1.5 px-1 py-2">
                      <div className="h-1.5 bg-slate-700 rounded-sm" />
                      <div className="h-1.5 bg-emerald-500 rounded-sm" />
                      <div className="h-1.5 bg-slate-700 rounded-sm" />
                      <div className="h-1.5 bg-emerald-500 rounded-sm" />
                      <div className="h-1.5 bg-slate-700 rounded-sm" />
                      <div className="h-1.5 bg-slate-700 rounded-sm" />
                      <div className="h-1.5 bg-emerald-400 rounded-sm" />
                      <div className="h-1.5 bg-slate-700 rounded-sm" />
                      <div className="h-1.5 bg-emerald-500 rounded-sm" />
                      <div className="h-1.5 bg-slate-700 rounded-sm" />
                      <div className="h-1.5 bg-slate-700 rounded-sm" />
                      <div className="h-1.5 bg-emerald-400 rounded-sm" />
                    </div>

                    <div className="flex justify-between items-end">
                      {/* Bottom-left position marker */}
                      <div className="w-8 h-8 border-2 border-emerald-400 p-1 flex items-center justify-center">
                        <div className="w-3.5 h-3.5 bg-emerald-400" />
                      </div>
                      <div className="text-[9px] font-mono text-emerald-400/90 uppercase tracking-widest">
                        v0.1 PAYLOAD
                      </div>
                    </div>
                  </div>

                  {/* Subtext indicator */}
                  <div className="mt-4 text-center">
                    <div className="text-xs font-mono text-emerald-400">
                      EXTRACTION :: READY
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Optical frame telemetry active
                    </div>
                  </div>
                </div>

                {/* HUD Telemetry Status */}
                <div className="space-y-2 pt-2 border-t border-[#1a263d] text-xs font-mono">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>DECODED PROTOCOL</span>
                    <span className="text-slate-200">HTTPS / TLS 1.3</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>REDIRECT CHAIN</span>
                    <span className="text-amber-400 font-semibold">2 Hops Detected</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>SECURITY RATING</span>
                    <span className="text-emerald-400 font-bold">PRE-INSPECTION REQ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 border-b border-[#141e30] bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121c2e] border border-[#233554] text-xs font-mono text-emerald-400 mb-4">
              <span>PROTECTION ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Enterprise-Grade QR Defense
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              A comprehensive threat analysis stack designed specifically to counter visual phishing,
              malicious sticker replacements, and covert quishing vectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl bg-[#0d1424] border border-[#1c2a44] hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4">
                <QrCode className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Camera &amp; Image Scanning
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Scan physical QR codes in real-time through your device camera or upload image files, screenshots, and PDF documents.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl bg-[#0d1424] border border-[#1c2a44] hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Redirection Chain Unravelling
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Traces URL shorteners (bit.ly, tinyurl) and multi-hop HTTP 301/302 redirects to reveal the true final landing endpoint.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl bg-[#0d1424] border border-[#1c2a44] hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Domain Age &amp; Typosquatting
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Examines WHOIS domain registration age, homoglyph substitutions, and brand impersonation patterns designed to deceive users.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-xl bg-[#0d1424] border border-[#1c2a44] hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Heuristic Quishing Detection
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Evaluates URL parameters, auth tokens, and credential-harvesting signatures matching modern enterprise phishing campaigns.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-xl bg-[#0d1424] border border-[#1c2a44] hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Zero-Trust Safe Previews
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Inspect raw headers, canonical IP addresses, and page metadata without executing client scripts or exposing your browser session.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-xl bg-[#0d1424] border border-[#1c2a44] hover:border-emerald-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Real-Time Risk Scoring
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Aggregates intelligence vectors into an intuitive 0–100 threat score with clear warnings (Safe, Suspicious, Dangerous).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-28 border-b border-[#141e30] bg-[#080c14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121c2e] border border-[#233554] text-xs font-mono text-emerald-400 mb-4">
              <span>WORKFLOW EXECUTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              How QR Shield Protects You
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              A 4-step security pipeline that verifies untrusted codes before your browser makes contact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative p-6 rounded-xl bg-[#0d1424] border border-[#1c2a44]">
              <div className="text-xs font-mono text-emerald-400 font-bold mb-3 flex items-center justify-between">
                <span>PHASE 01</span>
                <span className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-xs">
                  1
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Scan or Upload
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Capture the physical code with your device camera or upload an image file containing any standard 2D barcode format.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 rounded-xl bg-[#0d1424] border border-[#1c2a44]">
              <div className="text-xs font-mono text-emerald-400 font-bold mb-3 flex items-center justify-between">
                <span>PHASE 02</span>
                <span className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-xs">
                  2
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Payload Extraction
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                The optical scanner decodes the raw byte matrix and extracts embedded URLs, scheme strings, or encoded payload text.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 rounded-xl bg-[#0d1424] border border-[#1c2a44]">
              <div className="text-xs font-mono text-emerald-400 font-bold mb-3 flex items-center justify-between">
                <span>PHASE 03</span>
                <span className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-xs">
                  3
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Threat Inspection
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                The URL is analyzed against malicious reputation datasets, SSL signatures, domain registration age, and redirect paths.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative p-6 rounded-xl bg-[#0d1424] border border-[#1c2a44]">
              <div className="text-xs font-mono text-emerald-400 font-bold mb-3 flex items-center justify-between">
                <span>PHASE 04</span>
                <span className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-xs">
                  4
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Safe Verdict &amp; Warning
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Receive an immediate risk verdict (Safe, Suspicious, or Dangerous). Hazardous destinations are blocked with actionable advisories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why QR Security Matters Section */}
      <section id="why-qr-security" className="py-20 md:py-28 border-b border-[#141e30] bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/60 text-xs font-mono text-amber-300">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                <span>CRITICAL THREAT LANDSCAPE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Why QR Code Security Cannot Be Ignored
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Unlike regular hyperlinks where a user can hover and review the destination hostname,
                QR codes are visually opaque pixel patterns. You cannot discern a trusted bank portal
                from an attacker's credential harvester until after your phone has initiated the connection.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-lg bg-[#0d1424] border border-[#1c2a44] flex items-start gap-3">
                  <div className="p-2 rounded bg-red-950/50 border border-red-800/50 text-red-400 shrink-0">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">Physical Sticker Replacement</h5>
                    <p className="text-xs text-slate-400 mt-1">
                      Scammers affix fraudulent adhesive QR codes over legitimate parking meters, restaurant tables, and utility bill kiosks.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#0d1424] border border-[#1c2a44] flex items-start gap-3">
                  <div className="p-2 rounded bg-amber-950/50 border border-amber-800/50 text-amber-400 shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">Quishing Bypasses Email Gateways</h5>
                    <p className="text-xs text-slate-400 mt-1">
                      Attackers embed malicious QR codes inside PDF attachments to bypass conventional corporate email text filters and MFA protections.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#0d1424] border border-[#1c2a44] flex items-start gap-3">
                  <div className="p-2 rounded bg-sky-950/50 border border-sky-800/50 text-sky-400 shrink-0">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">Rogue Wi-Fi &amp; Device Pairing</h5>
                    <p className="text-xs text-slate-400 mt-1">
                      Malicious QR codes can prompt smartphones to automatically join insecure rogue Wi-Fi access points or trigger unauthorized WhatsApp Web sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Comparison Box */}
            <div className="lg:col-span-6">
              <div className="bg-[#0b1220] border border-[#1c2b47] rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#1b263d]">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Protection Matrix
                  </span>
                  <span className="text-xs text-emerald-400 font-mono">
                    DEFENSE VERIFIED
                  </span>
                </div>

                {/* Unprotected Vector */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-medium text-red-400">
                    <span>STANDARD PHONE CAMERA APP</span>
                    <span>VULNERABLE</span>
                  </div>
                  <div className="p-3 rounded-lg bg-red-950/20 border border-red-900/40 text-xs text-slate-300">
                    Opens the browser immediately or prompts only a truncated URL snippet. Users cannot see redirection hops, domain reputation, or credential interception scripts.
                  </div>
                </div>

                {/* QR Shield Vector */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-medium text-emerald-400">
                    <span>WITH QR SHIELD ZERO-TRUST</span>
                    <span>PROTECTED</span>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-xs text-slate-300">
                    Intercepts the payload, unmasks redirects, calculates a multi-attribute threat score (0–100), and presents a full preview before any navigation occurs.
                  </div>
                </div>

                {/* CTA inside card */}
                <div className="pt-4 border-t border-[#1b263d] flex flex-col sm:flex-row items-center gap-3">
                  <Link to="/scanner" className="w-full sm:flex-1">
                    <Button variant="primary" size="md" className="w-full" icon={QrCode}>
                      Try The Scanner UI
                    </Button>
                  </Link>
                  <Link to="/security-guide" className="w-full sm:w-auto">
                    <Button variant="outline" size="md" className="w-full">
                      Read Security Guide
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Call to Action */}
      <section className="py-16 bg-[#070b13] border-b border-[#141e30] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Inspect Untrusted QR Codes with Confidence
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-6">
            Explore the QR Shield visual console, audit scan history, and review real-time threat telemetry.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/dashboard">
              <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                Open Security Dashboard
              </Button>
            </Link>
            <Link to="/url-checker">
              <Button variant="secondary" size="lg" icon={Search}>
                Test URL Checker
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
