import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Lock, ChevronRight, X, MapPin } from 'lucide-react'
import Sidebar from '../components/Sidebar'

const featuredPilots = [
  { name: 'Cóbano Preserve',      country: 'Costa Rica',        value: '$1.5B+',  path: '/pilot/cobano-preserve' },
  { name: 'Antigua Master Plan',  country: 'Antigua & Barbuda', value: '$200M+',  path: '/pilot/antigua-master-plan' },
  { name: 'Hokkaido Resort',      country: 'Japan',             value: '$350M+',  path: '/pilot/hokkaido-resort' },
  { name: 'Marbella Club',        country: 'Spain',             value: '$350M+',  path: '#' },
  { name: 'Phuket Wellness',      country: 'Thailand',          value: '$180M+',  path: '#' },
]

const centralAmericaPilots = [
  { name: 'Cóbano Preserve',   country: 'Costa Rica', type: 'ESG Luxury Eco-Resort',  path: '/pilot/cobano-preserve' },
  { name: 'Roatán Bay Resort', country: 'Honduras',   type: 'Luxury Island Resort',    path: '#' },
  { name: 'Ambergris Caye',    country: 'Belize',     type: 'Oceanfront Residences',   path: '#' },
]

const regions = [
  { name: 'North America',  sub: '5 pilots', x: '22%', y: '31%' },
  { name: 'Europe',         sub: '3 pilots', x: '46%', y: '31%' },
  { name: 'Asia',           sub: '4 pilots', x: '88%', y: '40%' },
  { name: 'Africa',         sub: '2 pilots', x: '51%', y: '69%' },
  { name: 'South America',  sub: '2 pilots', x: '33%', y: '70%' },
  { name: 'Australia',      sub: '2 pilots', x: '87%', y: '78%' },
]

export default function GlobalPortfolio() {
  const [activeRegion, setActiveRegion] = useState(null)
  const navigate = useNavigate()

  return (
    <main className="flex min-h-screen" style={{ background: 'var(--page-bg)' }}>
      <Sidebar />

      <section className="flex-1 flex flex-col px-10 py-8 overflow-auto">
        {/* Header */}
        <header className="flex items-start justify-between mb-8">
          <div style={{ maxWidth: 560 }}>
            <p className="t-label mb-3">Global Pilot Portfolio</p>
            <h1 className="t-display mb-3">TPG_PILOT Command Center</h1>
            <p className="t-body">
              Institutional capital strategy, owner's representation, and ESG execution — unified across 18 active pilots in 12 regions.
            </p>
          </div>
          <button className="tpg-btn flex items-center gap-2 mt-1">
            <Lock size={13} /> Restricted Access
          </button>
        </header>

        {/* Map */}
        <section className="relative rounded-xl overflow-hidden mb-6" style={{ height: 420, border: '1px solid var(--border)', background: 'var(--card-bg2)' }}>
          <div className="absolute inset-0 bg-cover bg-center opacity-75" style={{ backgroundImage: "url('/images/world-map-night.jpg')" }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 46% 45%, transparent, rgba(2,7,18,0.5) 60%, rgba(2,7,18,0.95) 100%)' }} />

          {/* SVG geography */}
          <svg viewBox="0 0 1200 620" className="absolute inset-0 h-full w-full opacity-25">
            <defs>
              <linearGradient id="land" x1="0" x2="1">
                <stop offset="0" stopColor="#31445b" />
                <stop offset="1" stopColor="#162331" />
              </linearGradient>
            </defs>
            <path d="M80 190 C170 100 315 120 410 205 C345 260 210 290 85 250 Z" fill="url(#land)" />
            <path d="M250 275 C350 285 440 360 415 480 C330 500 255 445 240 355 Z" fill="url(#land)" />
            <path d="M540 160 C640 100 760 130 820 210 C730 270 610 260 535 225 Z" fill="url(#land)" />
            <path d="M640 250 C760 245 830 345 775 480 C690 460 625 380 620 295 Z" fill="url(#land)" />
            <path d="M780 150 C930 85 1110 120 1160 230 C1035 310 890 280 770 245 Z" fill="url(#land)" />
            <path d="M965 420 C1035 370 1135 420 1125 500 C1040 535 980 500 965 450 Z" fill="url(#land)" />
          </svg>
          <svg viewBox="0 0 1200 620" className="absolute inset-0 h-full w-full">
            <g fill="none" stroke="#4A90FF" strokeWidth="1" opacity="0.45">
              <path d="M335 330 Q520 245 670 250" />
              <path d="M335 330 Q585 285 865 315" />
              <path d="M335 330 Q575 355 720 420" />
            </g>
          </svg>

          {/* Central America glow */}
          <motion.div
            animate={{ opacity: [0.25, 0.6, 0.25] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute z-10 rounded-[50%]"
            style={{ left: '27%', top: '47%', width: 150, height: 90, rotate: '-10deg', border: '1px solid rgba(74,144,255,0.5)', background: 'rgba(74,144,255,0.10)', filter: 'blur(2px)' }}
          />

          {/* Region nodes */}
          {regions.map(r => (
            <button
              key={r.name}
              onClick={() => setActiveRegion(r.name === 'South America' ? 'Central America' : r.name)}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-left group"
              style={{ left: r.x, top: r.y }}
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="block mb-1 h-3 w-3 rounded-full"
                style={{ background: '#4A90FF', boxShadow: '0 0 16px rgba(74,144,255,0.8)' }}
              />
              <span className="block t-micro" style={{ fontSize: '0.625rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-1)' }}>{r.name}</span>
              <span className="block t-micro" style={{ fontSize: '0.5625rem', color: 'var(--text-3)' }}>{r.sub}</span>
            </button>
          ))}

          {/* Region popup */}
          <AnimatePresence>
            {activeRegion && (
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}
                className="absolute left-[55%] top-[14%] z-30 w-72 rounded-xl p-5 shadow-2xl"
                style={{ background: 'rgba(4, 10, 20, 0.94)', border: '1px solid var(--border2)', backdropFilter: 'blur(12px)' }}
              >
                <button onClick={() => setActiveRegion(null)} className="absolute right-4 top-4" style={{ color: 'var(--text-3)' }}>
                  <X size={14} />
                </button>
                <p className="t-label mb-1">{activeRegion}</p>
                <p className="t-micro mb-4">3 active pilots</p>
                <div style={{ borderTop: '1px solid var(--border)' }}>
                  {centralAmericaPilots.map(p => (
                    <button key={p.name} onClick={() => p.path !== '#' && navigate(p.path)}
                      className="flex w-full items-center gap-3 py-3 text-left"
                      style={{ borderBottom: '1px solid var(--border)' }}>
                      <div className="flex-1">
                        <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-1)' }}>{p.name}</p>
                        <p className="t-micro mt-0.5">{p.country} · {p.type}</p>
                      </div>
                      <ChevronRight size={14} style={{ color: 'var(--accent-lt)' }} />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute left-5 top-5 z-10">
            <p className="t-label">Global Pilot Network</p>
          </div>
        </section>

        {/* Featured pilots */}
        <section className="tpg-card">
          <div className="flex items-center justify-between mb-5">
            <p className="t-label">Featured Pilots</p>
            <button className="t-micro flex items-center gap-1" style={{ color: 'var(--accent-lt)' }}>
              View all pilots <ChevronRight size={12} />
            </button>
          </div>
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {featuredPilots.map(p => (
              <button key={p.name} onClick={() => p.path !== '#' && navigate(p.path)}
                className="rounded-lg overflow-hidden text-left transition-all"
                style={{ border: '1px solid var(--border)', background: 'var(--card-bg2)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div className="flex items-center justify-center" style={{ height: 80, background: 'rgba(74,144,255,0.04)' }}>
                  <MapPin size={18} style={{ color: 'var(--text-3)' }} />
                </div>
                <div className="p-3">
                  <p style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-1)', lineHeight: 1.3 }}>{p.name}</p>
                  <p className="t-micro mt-0.5">{p.country}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--gold)', marginTop: 6, fontFamily: 'var(--serif)' }}>{p.value}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-6 flex items-center justify-between t-micro">
          <div className="flex gap-5">
            {['Capital Procurement', "Owner's Representation", 'ESG Execution', 'Engagement Ecosystems'].map((t, i, arr) => (
              <React.Fragment key={t}><span>{t}</span>{i < arr.length - 1 && <span style={{ color: 'var(--border2)' }}>·</span>}</React.Fragment>
            ))}
          </div>
          <div className="flex gap-4"><span>Privacy</span><span>Terms</span></div>
        </footer>
      </section>
    </main>
  )
}
