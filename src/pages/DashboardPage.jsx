import React from 'react';
import { Link } from 'react-router-dom';
import {
  QrCode,
  ShieldCheck,
  AlertTriangle,
  ShieldAlert,
  ArrowRight,
  TrendingUp,
  Activity,
  ExternalLink,
  Filter,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from 'recharts';
import StatCard from '../components/common/StatCard';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import DemoNotice from '../components/common/DemoNotice';
import {
  DEMO_DASHBOARD_METRICS,
  DEMO_WEEKLY_ACTIVITY,
  DEMO_SCAN_HISTORY,
} from '../utils/constants';

// Custom dark tooltip for Recharts
function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0b1220] border border-[#1f2d47] p-3 rounded-lg shadow-xl text-xs space-y-1 font-mono">
        <p className="text-slate-300 font-bold border-b border-[#1b273d] pb-1 mb-1">
          {label} Security Telemetry
        </p>
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center justify-between gap-4">
            <span style={{ color: entry.color }} className="font-sans">
              {entry.name}:
            </span>
            <span className="font-bold text-white">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export default function DashboardPage() {
  const recentScans = DEMO_SCAN_HISTORY.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Visual Evaluation Notice */}
      <DemoNotice label="Simulated Security Telemetry — Metrics, scan records, and chart telemetry represent demo data." />

      {/* Welcome Heading & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Security Overview
          </h2>
          <p className="text-sm text-slate-400 mt-0.5">
            Real-time optical threat monitoring and recent QR scan heuristics.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/scanner">
            <Button variant="primary" size="md" icon={QrCode}>
              Scan a QR Code
            </Button>
          </Link>
          <Link to="/url-checker">
            <Button variant="secondary" size="md">
              Check Raw URL
            </Button>
          </Link>
        </div>
      </div>

      {/* Metrics Row (4 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Scans (Sample)"
          value={DEMO_DASHBOARD_METRICS.totalScans}
          subvalue="Scanned items"
          icon={Activity}
          variant="neutral"
          trend={DEMO_DASHBOARD_METRICS.totalScansChange}
          trendType="positive"
        />

        <StatCard
          title="Safe Verifications"
          value={DEMO_DASHBOARD_METRICS.safeScans}
          subvalue={DEMO_DASHBOARD_METRICS.safeScansRate}
          icon={ShieldCheck}
          variant="emerald"
          trend="+5.1%"
          trendType="positive"
        />

        <StatCard
          title="Suspicious Hops"
          value={DEMO_DASHBOARD_METRICS.suspiciousScans}
          subvalue={DEMO_DASHBOARD_METRICS.suspiciousScansRate}
          icon={AlertTriangle}
          variant="amber"
          trend="-1.4%"
          trendType="neutral"
        />

        <StatCard
          title="Dangerous Threats"
          value={DEMO_DASHBOARD_METRICS.dangerousScans}
          subvalue={DEMO_DASHBOARD_METRICS.dangerousScansRate}
          icon={ShieldAlert}
          variant="red"
          trend="+2.8%"
          trendType="negative"
        />
      </div>

      {/* Charts & Visual Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Weekly Scan Volume Chart */}
        <Card
          title="Weekly Scan Activity &amp; Threat Detection"
          subtitle="7-day distribution of Safe, Suspicious, and Dangerous classifications"
          className="lg:col-span-8"
          headerClassName="bg-[#0b101d]"
          action={
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Simulation Feed
            </span>
          }
        >
          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={DEMO_WEEKLY_ACTIVITY}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorSafe" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="colorSuspicious" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="colorDangerous" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1d2b45" />
                <XAxis dataKey="day" stroke="#64748b" tick={{ fontSize: 12 }} />
                <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="safe"
                  name="Safe"
                  stroke="#10b981"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorSafe)"
                />
                <Area
                  type="monotone"
                  dataKey="suspicious"
                  name="Suspicious"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorSuspicious)"
                />
                <Area
                  type="monotone"
                  dataKey="dangerous"
                  name="Dangerous"
                  stroke="#ef4444"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorDangerous)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 pt-4 border-t border-[#1a253d] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-emerald-500" />
              <span className="text-slate-300">Safe Codes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-amber-500" />
              <span className="text-slate-300">Suspicious Redirects</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-red-500" />
              <span className="text-slate-300">Dangerous / Quishing</span>
            </div>
          </div>
        </Card>

        {/* Security Engine Health / Quick Stat Column */}
        <Card
          title="Engine Posture"
          subtitle="Heuristic scanner component status"
          className="lg:col-span-4"
          headerClassName="bg-[#0b101d]"
        >
          <div className="space-y-4">
            <div className="p-3.5 rounded-lg bg-[#080d17] border border-[#1d2b45]">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">Domain Age Analysis</span>
                <span className="text-emerald-400 font-mono">READY</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Flags newly registered domains (&lt; 30 days) commonly used in quishing.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#080d17] border border-[#1d2b45]">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">Redirection Loop Tracer</span>
                <span className="text-emerald-400 font-mono">READY</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Follows shortened URLs across HTTP 301/302 hops to uncover hidden landing hosts.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#080d17] border border-[#1d2b45]">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">SSL / Typosquatting Checker</span>
                <span className="text-emerald-400 font-mono">READY</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Validates certificate authority chains and homoglyph spoofing.
              </p>
            </div>

            <div className="pt-2">
              <Link to="/scanner" className="block w-full">
                <Button variant="primary" size="md" className="w-full" icon={QrCode}>
                  Launch Optical Scanner
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Scan Activity Table */}
      <Card
        title="Recent Scan Activity (Demonstration)"
        subtitle="Latest 5 QR payloads processed by the inspection pipeline"
        headerClassName="bg-[#0b101d]"
        action={
          <Link to="/history">
            <Button variant="ghost" size="sm" icon={ArrowRight} iconPosition="right">
              View All History
            </Button>
          </Link>
        }
      >
        <div className="overflow-x-auto -mx-5 -my-5">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0a0f1d] text-slate-400 border-b border-[#1a263d] uppercase tracking-wider font-mono text-[11px]">
              <tr>
                <th className="py-3 px-5">ID &amp; Timestamp</th>
                <th className="py-3 px-5">Extracted Destination URL</th>
                <th className="py-3 px-5">Threat Category</th>
                <th className="py-3 px-5">Risk Score</th>
                <th className="py-3 px-5">Verdict</th>
                <th className="py-3 px-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#172338]">
              {recentScans.map((scan) => (
                <tr key={scan.id} className="hover:bg-[#0f172a]/40 transition-colors">
                  <td className="py-3.5 px-5 font-mono">
                    <div className="text-slate-200 font-semibold">{scan.id}</div>
                    <div className="text-[11px] text-slate-400">{scan.timestamp}</div>
                  </td>
                  <td className="py-3.5 px-5 max-w-xs sm:max-w-sm truncate">
                    <span className="text-slate-200 font-mono text-xs hover:text-emerald-400 cursor-pointer">
                      {scan.url}
                    </span>
                  </td>
                  <td className="py-3.5 px-5">
                    <span className="text-slate-300 font-medium">{scan.threatCategory}</span>
                  </td>
                  <td className="py-3.5 px-5 font-mono">
                    <span
                      className={`font-bold ${
                        scan.riskScore > 70
                          ? 'text-red-400'
                          : scan.riskScore > 30
                          ? 'text-amber-400'
                          : 'text-emerald-400'
                      }`}
                    >
                      {scan.riskScore}/100
                    </span>
                  </td>
                  <td className="py-3.5 px-5">
                    <Badge variant={scan.status.toLowerCase()} size="sm">
                      {scan.status}
                    </Badge>
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <Link to="/history">
                      <Button variant="ghost" size="sm" className="text-xs">
                        Details
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
