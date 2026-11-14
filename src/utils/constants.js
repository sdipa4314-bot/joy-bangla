// QR Shield - Application Constants and Demonstration Telemetry Data

export const APP_NAME = 'QR Shield';
export const APP_TAGLINE = 'QR Code Scam Detection & Threat Prevention';
export const APP_VERSION = 'v0.1.0-alpha';

// Navigation links for internal dashboard layout
export const NAV_ITEMS = [
  { name: 'Overview', path: '/dashboard', icon: 'LayoutDashboard' },
  { name: 'QR Scanner', path: '/scanner', icon: 'QrCode' },
  { name: 'URL Checker', path: '/url-checker', icon: 'Link2' },
  { name: 'Scan History', path: '/history', icon: 'History' },
  { name: 'Threat Intelligence', path: '/threat-intelligence', icon: 'ShieldAlert' },
  { name: 'Security Guide', path: '/security-guide', icon: 'BookOpen' },
];

// Landing Page navigation links
export const LANDING_NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Why QR Security', href: '#why-qr-security' },
  { name: 'Security Guide', href: '/security-guide', isRoute: true },
];

// Threat Severity Levels
export const SEVERITY_LEVELS = {
  SAFE: {
    label: 'Safe',
    color: 'emerald',
    badgeClass: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60',
    dotClass: 'bg-emerald-500',
    description: 'No known threat indicators detected in initial verification.',
  },
  SUSPICIOUS: {
    label: 'Suspicious',
    color: 'amber',
    badgeClass: 'bg-amber-950/60 text-amber-400 border-amber-800/60',
    dotClass: 'bg-amber-500',
    description: 'Multiple evasion techniques, newly registered domain or high redirection hop count.',
  },
  DANGEROUS: {
    label: 'Dangerous',
    color: 'red',
    badgeClass: 'bg-red-950/60 text-red-400 border-red-800/60',
    dotClass: 'bg-red-500',
    description: 'Confirmed credential harvesting, malware payload or flagged threat domain.',
  },
};

// Demonstration Dashboard Metrics (Explicitly labeled as Sample Data)
export const DEMO_DASHBOARD_METRICS = {
  totalScans: 1248,
  totalScansChange: '+14.2%',
  safeScans: 1082,
  safeScansRate: '86.7%',
  suspiciousScans: 114,
  suspiciousScansRate: '9.1%',
  dangerousScans: 52,
  dangerousScansRate: '4.2%',
};

// Demonstration Scan Activity Trend (Weekly)
export const DEMO_WEEKLY_ACTIVITY = [
  { day: 'Mon', safe: 142, suspicious: 14, dangerous: 6 },
  { day: 'Tue', safe: 156, suspicious: 18, dangerous: 9 },
  { day: 'Wed', safe: 138, suspicious: 12, dangerous: 5 },
  { day: 'Thu', safe: 172, suspicious: 22, dangerous: 11 },
  { day: 'Fri', safe: 185, suspicious: 24, dangerous: 8 },
  { day: 'Sat', safe: 140, suspicious: 11, dangerous: 7 },
  { day: 'Sun', safe: 149, suspicious: 13, dangerous: 6 },
];

// Threat Type Distribution (Demonstration)
export const DEMO_THREAT_DISTRIBUTION = [
  { name: 'Credential Harvesting', value: 42, color: '#ef4444' },
  { name: 'Malicious Redirection', value: 28, color: '#f97316' },
  { name: 'Fake Payment Gateways', value: 18, color: '#f59e0b' },
  { name: 'Malware Dropper Links', value: 12, color: '#dc2626' },
];

// Demonstration Scan History Records
export const DEMO_SCAN_HISTORY = [
  {
    id: 'SCN-8902',
    timestamp: '2026-11-14 21:42:10',
    url: 'https://verify-account-portal.suspicious-login.net/auth/id=9812',
    rawQrPayload: 'https://verify-account-portal.suspicious-login.net/auth/id=9812',
    riskScore: 94,
    status: 'DANGEROUS',
    threatCategory: 'Quishing / Phishing',
    destinationIp: '198.51.100.44',
    redirections: 3,
    sslValid: true,
  },
  {
    id: 'SCN-8901',
    timestamp: '2026-11-14 20:15:33',
    url: 'https://parking-pay-meter-city.info/checkout?spot=4492',
    rawQrPayload: 'https://parking-pay-meter-city.info/checkout?spot=4492',
    riskScore: 78,
    status: 'SUSPICIOUS',
    threatCategory: 'Fake Payment QR',
    destinationIp: '203.0.113.88',
    redirections: 2,
    sslValid: false,
  },
  {
    id: 'SCN-8900',
    timestamp: '2026-11-14 18:50:02',
    url: 'https://github.com/security/advisories',
    rawQrPayload: 'https://github.com/security/advisories',
    riskScore: 4,
    status: 'SAFE',
    threatCategory: 'Legitimate Domain',
    destinationIp: '140.82.114.4',
    redirections: 0,
    sslValid: true,
  },
  {
    id: 'SCN-8899',
    timestamp: '2026-11-14 17:34:21',
    url: 'https://menu-digital.bistro-authentique.com/lunch-menu',
    rawQrPayload: 'https://menu-digital.bistro-authentique.com/lunch-menu',
    riskScore: 12,
    status: 'SAFE',
    threatCategory: 'Restaurant Digital Menu',
    destinationIp: '192.0.2.14',
    redirections: 0,
    sslValid: true,
  },
  {
    id: 'SCN-8898',
    timestamp: '2026-11-14 16:11:09',
    url: 'http://free-wifi-connect-airport-auth.cc/portal/login',
    rawQrPayload: 'http://free-wifi-connect-airport-auth.cc/portal/login',
    riskScore: 89,
    status: 'DANGEROUS',
    threatCategory: 'Rogue Captive Portal',
    destinationIp: '198.51.100.19',
    redirections: 4,
    sslValid: false,
  },
  {
    id: 'SCN-8897',
    timestamp: '2026-11-14 14:02:45',
    url: 'https://docs.anthropic.com/en/docs/welcome',
    rawQrPayload: 'https://docs.anthropic.com/en/docs/welcome',
    riskScore: 2,
    status: 'SAFE',
    threatCategory: 'Official Documentation',
    destinationIp: '104.18.2.1',
    redirections: 0,
    sslValid: true,
  },
  {
    id: 'SCN-8896',
    timestamp: '2026-11-14 12:20:18',
    url: 'https://bit.ly/3xYqz71 -> https://crypto-giveaway-bonus.xyz',
    rawQrPayload: 'https://bit.ly/3xYqz71',
    riskScore: 86,
    status: 'DANGEROUS',
    threatCategory: 'Obfuscated Shortener / Scam',
    destinationIp: '198.51.100.99',
    redirections: 3,
    sslValid: true,
  },
];

// Demonstration Threat Intelligence Feed
export const DEMO_ACTIVE_CAMPAIGNS = [
  {
    id: 'CAMP-2026-04',
    title: 'Municipal Parking Meter Sticker Overlays',
    targetedSector: 'Public Infrastructure / Transit',
    vector: 'Physical QR Sticker Tampering',
    riskRating: 'High',
    activeSince: '3 days ago',
    indicators: ['parking-pay-meter-city.info', 'meter-quickpay-fast.com'],
  },
  {
    id: 'CAMP-2026-03',
    title: 'Corporate SSO Quishing via Invoice PDF',
    targetedSector: 'Enterprise / Finance',
    vector: 'Email PDF Embedded QR Code',
    riskRating: 'Critical',
    activeSince: '6 days ago',
    indicators: ['verify-account-portal.suspicious-login.net', 'auth-mfa-sync.top'],
  },
  {
    id: 'CAMP-2026-02',
    title: 'Counterfeit Restaurant Payment QR Stickers',
    targetedSector: 'Hospitality / F&B',
    vector: 'Table Sticker Replacement',
    riskRating: 'Medium',
    activeSince: '12 days ago',
    indicators: ['quick-settle-tab.biz', 'table-pay-now.cc'],
  },
];
