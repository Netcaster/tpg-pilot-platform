import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import {
  Globe2, Flag, Landmark, User, FileText, Puzzle, HeartHandshake, BarChart3, Settings, Leaf, Lock,
  ChevronRight, X, MapPin, Search, FileText as FileText2, CalendarDays, CheckCircle2, Clock3, Sun, Moon,
} from 'lucide-react';
import './styles.css';

// ── Theme ──────────────────────────────────────────────────────────────────
function useTheme() {
  const [isDark, setIsDark] = React.useState(() => localStorage.getItem('tpg-theme') !== 'day');
  React.useEffect(() => { document.documentElement.classList.toggle('day', !isDark); }, [isDark]);
  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem('tpg-theme', next ? 'dark' : 'day');
  };
  return { isDark, toggle };
}

// ── Data ───────────────────────────────────────────────────────────────────
const pilots = [
  { name: 'Cóbano Preserve',       country: 'Costa Rica',        value: '$1.5B+ Development',  image: '/images/pilots/cobano-preserve.jpg',    path: '/pilot/cobano-preserve' },
  { name: 'Antigua Master Plan',   country: 'Antigua & Barbuda', value: '$200M+ Development',  image: '/images/pilots/antigua-master-plan.jpg', path: '/pilot/antigua-master-plan' },
  { name: 'Hokkaido Resort Plan',  country: 'Japan',             value: '$350M+ Development',  image: '/images/pilots/hokkaido-resort.jpg',     path: '/pilot/hokkaido-resort' },
  { name: 'Marbella Club',         country: 'Spain',             value: '$350M+ Development',  image: '/images/pilots/marbella-club.jpg',       path: '/pilot/marbella-club' },
  { name: 'Phuket Wellness Resort',country: 'Thailand',          value: '$180M+ Development',  image: '/images/pilots/phuket-wellness.jpg',     path: '/pilot/phuket-wellness' },
];

const regionData = {
  'North America': {
    label: 'North America', count: 5, side: 'right',
    pilots: [
      { name: 'R.I.S.E. National Deployment', country: 'United States',      type: 'Social Infrastructure Platform', image: '/images/pilots/cobano-preserve.jpg',    path: '/deals' },
      { name: 'HTES U.S. Expansion',          country: 'United States / EU', type: 'Enterprise & Technology',        image: '/images/pilots/antigua-master-plan.jpg', path: '/deals' },
    ],
  },
  'Europe': {
    label: 'Europe', count: 3, side: 'right',
    pilots: [
      { name: 'Marbella Club',      country: 'Spain',          type: 'Luxury Coastal Resort',       image: '/images/pilots/marbella-club.jpg',       path: '/deals' },
      { name: 'HTES EU Hub',        country: 'Europe',         type: 'Enterprise Technology Hub',   image: '/images/pilots/hokkaido-resort.jpg',     path: '/deals' },
    ],
  },
  'Asia': {
    label: 'Asia Pacific', count: 4, side: 'left',
    pilots: [
      { name: 'Hokkaido Resort Plan',   country: 'Japan',    type: 'Mountain Resort & Convention', image: '/images/pilots/hokkaido-resort.jpg',  path: '/pilot/hokkaido-resort' },
      { name: 'Phuket Wellness Resort', country: 'Thailand', type: 'Luxury Wellness Resort',       image: '/images/pilots/phuket-wellness.jpg',  path: '/deals' },
    ],
  },
  'South America': {
    label: 'Central America', count: 3, side: 'right',
    pilots: [
      { name: 'Cóbano Preserve',     country: 'Costa Rica',        type: 'ESG Luxury Eco-Resort', image: '/images/pilots/cobano-preserve-thumb.jpg',  path: '/pilot/cobano-preserve' },
      { name: 'Antigua Master Plan', country: 'Antigua & Barbuda', type: 'SEZ Capital Platform',  image: '/images/pilots/antigua-master-plan.jpg',    path: '/pilot/antigua-master-plan' },
      { name: 'Roatán Bay Resort',   country: 'Honduras',          type: 'Luxury Island Resort',  image: '/images/pilots/roatan-bay-thumb.jpg',        path: '/deals' },
    ],
  },
  'Africa': {
    label: 'Africa', count: 2, side: 'right',
    pilots: [
      { name: 'West Africa Gateway',  country: 'Ghana / Nigeria', type: 'Infrastructure & ESG Development', image: '/images/pilots/cobano-preserve.jpg',    path: '/deals' },
    ],
  },
  'Australia': {
    label: 'Australia / Pacific', count: 2, side: 'left',
    pilots: [
      { name: 'Pacific Rim Pilot', country: 'Australia', type: 'Luxury Resort Development', image: '/images/pilots/phuket-wellness.jpg', path: '/deals' },
    ],
  },
};

const navItems = [
  ['Global Execution',      Globe2,        '/'],
  ['Pilot Portfolio',       Flag,           '/'],
  ['Capital Pipeline',      Landmark,       '/deals'],
  ['Investor Room',         User,           '/investors'],
  ['Document Vault',        FileText,       '/deals'],
  ['Engagement Ecosystems', Puzzle,         '/'],
  ['Social Good Impact',    HeartHandshake, '/'],
  ['Reports & Analytics',   BarChart3,      '/deals'],
  ['Settings',              Settings,       '/'],
];

const deals = [
  ['TPG-RISE-001',    'R.I.S.E. National Deployment',     'Pilot',      'United States',      '$4.2B+',      'Capital Formation',              'Active',       '2026-04-25'],
  ['TPG-COBANO-002',  'Cóbano Preserve',                  'Project',    'Costa Rica',         '$1.5B+',      'Pre-Development / Capital Stack', 'Active',       '2026-04-24'],
  ['TPG-ANTIGUA-003', 'Antigua Master Plan / ABSEZ',      'Enterprise', 'Antigua & Barbuda',  '$200M+',      'SEZ Capital Readiness',          'Active',       '2026-04-24'],
  ['TPG-HOKKAIDO-004','Hokkaido Resort / Vegas North',    'Project',    'Japan',              '$1.04B',      'ESA / Feasibility Review',       'Under Review', '2026-04-25'],
  ['TPG-HTES-005',    'HTES U.S. / EU / Hong Kong',      'Enterprise', 'Global',             '$100M Raise', 'Investor Deck / Term Sheet',     'Active',       '2026-04-24'],
];

// ── Sidebar ────────────────────────────────────────────────────────────────
function Sidebar({ active = 'global' }) {
  const navigate = useNavigate();
  const { isDark, toggle } = useTheme();

  return (
    <aside className="tpg-sidebar">
      <div>
        <img className="tpg-logo" src="/tpg-logo.png" alt="TPG" />
        <nav className="tpg-nav">
          {navItems.map(([label, Icon, path], index) => {
            const isActive =
              (active === 'global'    && (index === 0 || index === 1)) ||
              (active === 'deals'     && (label === 'Capital Pipeline' || label === 'Reports & Analytics' || label === 'Document Vault')) ||
              (active === 'investors' && label === 'Investor Room');
            return (
              <button key={label} onClick={() => navigate(path)} className={isActive ? 'active' : ''}>
                <Icon size={22} strokeWidth={1.5} /><span>{label}</span>
              </button>
            );
          })}
        </nav>

        <div className="tpg-metrics">
          <Metric icon={Globe2}    label="Active Regions"    value="12"     sub="Across 4 Continents" />
          <Metric icon={Flag}      label="Active Pilots"     value="18"     sub="Institutional Grade" />
          <Metric icon={Landmark}  label="Total Development" value="$4.2B+" sub="Pipeline Value" />
          <Metric icon={Leaf}      label="ESG Focus"         value="100%"   sub="Sustainability Driven" />
        </div>
      </div>

      <div>
        <button className="theme-toggle" onClick={toggle}>
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
          {isDark ? 'Day Mode' : 'Night Mode'}
        </button>
        <p className="tpg-copyright">© 2025 True Perspective Global. All Rights Reserved.</p>
      </div>
    </aside>
  );
}

function Metric({ icon: Icon, label, value, sub }) {
  return (
    <div className="metric">
      <Icon size={30} />
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
        <small>{sub}</small>
      </div>
    </div>
  );
}

// ── Global Portfolio ───────────────────────────────────────────────────────
function GlobalPortfolio() {
  const navigate = useNavigate();
  const [activeRegion, setActiveRegion] = React.useState(null);

  return (
    <main className="tpg-page">
      <Sidebar active="global" />
      <section className="tpg-main">
        <header className="tpg-header">
          <div>
            <h1>TPG_PILOT Global Portfolio</h1>
            <h2>Institutional Growth, Capital Strategy &amp; Web3 Commercialization—Unified</h2>
            <p>Hover a region to explore active pilots and unlock sustainable value worldwide.</p>
          </div>
          <button className="restricted" onClick={() => navigate('/investors')}>
            <Lock size={18} /> Restricted Access
          </button>
        </header>

        <section className="map-stage">
          <img src="/images/world-map-night.jpg" alt="World map" className="world-map" />
          <div className="map-vignette" />
          <FlowLines />
          <RegionNode name="North America" sub="5 Active Pilots" x="9.5%"  y="24%"   active={activeRegion} onHover={setActiveRegion} />
          <RegionNode name="Europe"        sub="3 Active Pilots" x="42%"   y="24.5%" active={activeRegion} onHover={setActiveRegion} />
          <RegionNode name="Asia"          sub="4 Active Pilots" x="76%"   y="26%"   active={activeRegion} onHover={setActiveRegion} />
          <RegionNode name="South America" sub="2 Active Pilots" x="27.2%" y="69%"   active={activeRegion} onHover={setActiveRegion} />
          <RegionNode name="Africa"        sub="2 Active Pilots" x="46.5%" y="69.5%" active={activeRegion} onHover={setActiveRegion} />
          <RegionNode name="Australia"     sub="2 Active Pilots" x="80%"   y="72%"   active={activeRegion} onHover={setActiveRegion} />
          <div className="central-highlight" />
          {activeRegion && (
            <RegionPanel
              key={activeRegion}
              region={regionData[activeRegion]}
              onClose={() => setActiveRegion(null)}
            />
          )}
        </section>

        <section className="featured-wrap">
          <div className="featured-head">
            <h3>Featured Pilots</h3>
            <div className="dots">
              <span className="active" /><span /><span /><span />
            </div>
            <button onClick={() => navigate('/deals')}>
              View All Pilots <ChevronRight size={18} />
            </button>
          </div>
          <div className="pilot-grid">
            {pilots.map(p => <PilotCard key={p.name} pilot={p} />)}
          </div>
        </section>

        <footer className="tpg-footer">
          <div>
            {['Capital Procurement', "Owner's Representation", 'ESG Execution', 'Engagement Ecosystems', 'Social Good', 'Digital Footprint'].map((t, i, arr) => (
              <React.Fragment key={t}><span>{t}</span>{i < arr.length - 1 && <span>|</span>}</React.Fragment>
            ))}
          </div>
          <div><span>Privacy Policy</span><span>|</span><span>Terms of Use</span></div>
        </footer>
      </section>
    </main>
  );
}

function FlowLines() {
  return (
    <svg className="flow-lines" viewBox="0 0 1200 620" preserveAspectRatio="none">
      <path d="M310 330 Q510 250 590 230" />
      <path d="M310 330 Q520 315 870 350" />
      <path d="M310 330 Q470 365 680 465" />
      <path d="M310 330 Q360 420 380 485" />
    </svg>
  );
}

function RegionNode({ name, sub, x, y, active, onHover }) {
  const isActive = active === name;
  return (
    <button
      className={`region-node${isActive ? ' region-node--active' : ''}`}
      style={{ left: x, top: y }}
      onMouseEnter={() => onHover(name)}
      onClick={() => onHover(name)}
    >
      <span className="dot" />
      <span className="region-label">
        <strong>{name}</strong>
        <small>{sub}</small>
      </span>
    </button>
  );
}

function RegionPanel({ region, onClose }) {
  const navigate = useNavigate();
  if (!region) return null;
  const posStyle = region.side === 'left'
    ? { left: '2%', right: 'auto' }
    : { right: '2%', left: 'auto' };
  return (
    <div className="region-panel" style={posStyle}>
      <button className="close" onClick={onClose}><X size={20} /></button>
      <h3>{region.label}</h3>
      <p>{region.count} Active Pilots</p>
      <div className="panel-list">
        {region.pilots.map(p => (
          <button key={p.name} className="panel-item" onClick={() => navigate(p.path)}>
            <img src={p.image} alt={p.name} />
            <div>
              <strong>{p.name}</strong>
              <span>{p.country}</span>
              <small>{p.type}</small>
            </div>
            <ChevronRight size={20} />
          </button>
        ))}
      </div>
      <button className="panel-link" onClick={() => navigate('/deals')}>
        View All Pilots in {region.label} <ChevronRight size={18} />
      </button>
    </div>
  );
}

function PilotCard({ pilot }) {
  const navigate = useNavigate();
  return (
    <article className="pilot-card" onClick={() => navigate(pilot.path)}>
      <img src={pilot.image} alt={pilot.name} />
      <div className="pilot-overlay" />
      <div className="pilot-content">
        <h4>{pilot.name}</h4>
        <p>{pilot.country}</p>
        <small><MapPin size={15} />{pilot.value}</small>
      </div>
    </article>
  );
}

// ── Deal Pipeline ──────────────────────────────────────────────────────────
function DealPipeline() {
  const [selected, setSelected] = React.useState(deals[0]);
  const [q, setQ] = React.useState('');
  const filtered = deals.filter(d => d.join(' ').toLowerCase().includes(q.toLowerCase()));

  return (
    <main className="tpg-page">
      <Sidebar active="deals" />
      <section className="deals-main">
        <header className="tpg-header">
          <div>
            <h1>TPG Deal Pipeline Dashboard</h1>
            <h2>Enterprise, Pilot, Project &amp; Engagement Tracking</h2>
            <p>Restricted executive dashboard for board, investor, bank and government-ready deal visibility.</p>
          </div>
          <button className="restricted"><Lock size={18} /> Restricted Access</button>
        </header>

        <div className="deal-stats">
          <Stat label="Total Pipeline" value="$6.9B+" />
          <Stat label="Active Deals"   value="21" />
          <Stat label="High Priority"  value="9" />
          <Stat label="Material Updates" value="14" />
        </div>

        <div className="searchbar">
          <Search size={18} />
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search deals, regions, counterparties..." />
        </div>

        <div className="deals-layout">
          <section className="deal-table">
            <h3>Active Deal Pipeline</h3>
            <div className="deal-table-wrap"><table>
              <thead>
                <tr><th>Deal</th><th>Category</th><th>Region</th><th>Value</th><th>Stage</th><th>Status</th><th>Updated</th></tr>
              </thead>
              <tbody>
                {filtered.map(d => (
                  <tr key={d[0]} onClick={() => setSelected(d)} className={selected[0] === d[0] ? 'selected' : ''}>
                    <td><b>{d[1]}</b><small>{d[0]}</small></td>
                    <td>{d[2]}</td><td>{d[3]}</td><td>{d[4]}</td><td>{d[5]}</td>
                    <td><StatusBadge s={d[6]} /></td>
                    <td>{d[7]}</td>
                  </tr>
                ))}
              </tbody>
            </table></div>
          </section>

          <aside className="deal-detail">
            <p className="eyebrow">Selected Deal</p>
            <h3>{selected[1]}</h3>
            <div className="detail-grid">
              <Detail l="Category"       v={selected[2]} />
              <Detail l="Region"         v={selected[3]} />
              <Detail l="Pipeline Value" v={selected[4]} />
              <Detail l="Status"         v={selected[6]} />
            </div>
            <h4><FileText2 size={18} /> Material Contracts</h4>
            {['ESA', 'Pilot MOU', 'Funding Package', 'Surety Package'].map(c => (
              <div className="contract" key={c}>{c}<span>Vault</span></div>
            ))}
            <h4><CalendarDays size={18} /> Critical Dates</h4>
            <p className="muted">Initiated: 2026-04-01<br />Last Update: {selected[7]}<br />Target Close: Q3 2026</p>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }) {
  return <div className="stat"><p>{label}</p><b>{value}</b></div>;
}

function StatusBadge({ s }) {
  return (
    <span className={'badge ' + (s === 'Active' ? 'active' : 'review')}>
      {s === 'Active' ? <CheckCircle2 size={13} /> : <Clock3 size={13} />} {s}
    </span>
  );
}

function Detail({ l, v }) {
  return <div className="detail"><p>{l}</p><b>{v}</b></div>;
}

// ── Investor Engine ────────────────────────────────────────────────────────
function InvestorEngine() {
  return (
    <main className="tpg-page">
      <Sidebar active="investors" />
      <section className="deals-main">
        <header className="tpg-header">
          <div>
            <h1>TPG Investor Engine</h1>
            <h2>Restricted Capital Intake, Onboarding &amp; Allocation</h2>
            <p>Investor-facing pipeline access with KYC-lite profile routing, deal access controls and executive reporting.</p>
          </div>
          <button className="restricted"><Lock size={18} /> Restricted Access</button>
        </header>

        <div className="deal-stats">
          <Stat label="Investor Pipeline"  value="42" />
          <Stat label="Soft Commitments"   value="$275M" />
          <Stat label="Active Rooms"        value="8" />
          <Stat label="Review Queue"        value="16" />
        </div>

        <section className="deal-table">
          <h3>Investor Access Queue</h3>
          <table>
            <thead>
              <tr><th>Investor</th><th>Type</th><th>Ticket Size</th><th>Interest</th><th>Status</th></tr>
            </thead>
            <tbody>
              {[
                ['Family Office A', 'Family Office', '$25M–$100M',   'Costa Rica / RISE',      'Active'],
                ['Infra Fund B',    'Fund',          '$100M+',        'Antigua / Hokkaido',     'Active'],
                ['Bank Group C',    'Lender',        '$50M–$250M',    'Credit Facility',        'Under Review'],
              ].map(r => (
                <tr key={r[0]}>
                  <td><b>{r[0]}</b></td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td>
                  <td><StatusBadge s={r[4]} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
}

// ── Pilot Page ─────────────────────────────────────────────────────────────
function PilotPage({ title, sub }) {
  const navigate = useNavigate();
  const value = title.includes('Cóbano') ? '$1.5B+' : title.includes('Antigua') ? '$200M+' : '$1.04B';
  return (
    <main className="tpg-page">
      <Sidebar />
      <section className="deals-main">
        <header className="tpg-header">
          <div>
            <h1>{title}</h1>
            <h2>{sub}</h2>
            <p>Restricted pilot micro-site connected to the TPG Global Portfolio, Deal Pipeline Dashboard, document vault and executive reporting layer.</p>
          </div>
          <button className="restricted" onClick={() => navigate('/')}><Lock size={18} /> Return to Portfolio</button>
        </header>
        <div className="deal-stats">
          <Stat label="Pipeline Value" value={value} />
          <Stat label="Status"         value="Active" />
          <Stat label="Vault"          value="Live" />
          <Stat label="Board View"     value="Ready" />
        </div>
        <section className="deal-table">
          <h3>Pilot Control Layer</h3>
          <table>
            <tbody>
              {["Capital Procurement", "Owner's Representation", "Lockbox Controls", "Draw Schedule", "Deal Vault", "Material Contract Log"].map(x => (
                <tr key={x}>
                  <td><b>{x}</b></td>
                  <td>Configured</td>
                  <td><StatusBadge s="Active" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
}

// ── App ────────────────────────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                        element={<GlobalPortfolio />} />
        <Route path="/deals"                   element={<DealPipeline />} />
        <Route path="/investors"               element={<InvestorEngine />} />
        <Route path="/pilot/hokkaido-resort"   element={<PilotPage title="Hokkaido Resort Plan"  sub="Japan Pilot Micro-Site" />} />
        <Route path="/pilot/antigua-master-plan" element={<PilotPage title="Antigua Master Plan" sub="Antigua & Barbuda Pilot Micro-Site" />} />
        <Route path="/pilot/cobano-preserve"   element={<PilotPage title="Cóbano Preserve"       sub="Costa Rica Pilot Micro-Site" />} />
        <Route path="*"                        element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
