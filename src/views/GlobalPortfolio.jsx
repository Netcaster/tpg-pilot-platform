import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Lock, ChevronRight, X, MapPin, Menu } from 'lucide-react'
import Sidebar from '../components/Sidebar'

const featuredPilots = [
  {
    name: 'Cóbano Preserve', country: 'Costa Rica', value: '$1.5B+ Development',
    path: '/pilot/cobano-preserve',
    bg: 'linear-gradient(165deg,#0e7490 0%,#065f46 45%,#052e16 100%)',
  },
  {
    name: 'Antigua Master Plan', country: 'Antigua & Barbuda', value: '$200M+ Development',
    path: '/pilot/antigua-master-plan',
    bg: 'linear-gradient(160deg,#1d4ed8 0%,#0e7490 45%,#134e4a 100%)',
  },
  {
    name: 'Hokkaido Resort Plan', country: 'Japan', value: '$350M+ Development',
    path: '/pilot/hokkaido-resort',
    bg: 'linear-gradient(180deg,#bae6fd 0%,#7dd3fc 25%,#1e3a5f 70%,#0f172a 100%)',
  },
  {
    name: 'Marbella Club', country: 'Spain', value: '$350M+ Development',
    path: '#',
    bg: 'linear-gradient(155deg,#d97706 0%,#92400e 40%,#1c1917 100%)',
  },
  {
    name: 'Phuket Wellness Resort', country: 'Thailand', value: '$180M+ Development',
    path: '#',
    bg: 'linear-gradient(165deg,#14532d 0%,#166534 40%,#0e7490 100%)',
  },
]

const centralAmericaPilots = [
  { name: 'Cóbano Preserve',   country: 'Costa Rica', type: 'ESG Luxury Eco-Resort', path: '/pilot/cobano-preserve', bg: 'linear-gradient(135deg,#0e7490,#065f46)' },
  { name: 'Roatán Bay Resort', country: 'Honduras',   type: 'Luxury Island Resort',  path: '#',                      bg: 'linear-gradient(135deg,#1d4ed8,#0e7490)' },
  { name: 'Ambergris Caye',    country: 'Belize',     type: 'Oceanfront Residences', path: '#',                      bg: 'linear-gradient(135deg,#0891b2,#1e40af)' },
]

const regions = [
  { name: 'NORTH AMERICA',  sub: '5 Active Pilots', x: '20%',  y: '30%' },
  { name: 'EUROPE',         sub: '3 Active Pilots', x: '46%',  y: '28%' },
  { name: 'ASIA',           sub: '4 Active Pilots', x: '74%',  y: '32%' },
  { name: 'SOUTH AMERICA',  sub: '2 Active Pilots', x: '28%',  y: '65%' },
  { name: 'AFRICA',         sub: '2 Active Pilots', x: '50%',  y: '60%' },
  { name: 'AUSTRALIA',      sub: '2 Active Pilots', x: '82%',  y: '72%' },
]

export default function GlobalPortfolio() {
  const [activeRegion, setActiveRegion] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen" style={{ background: '#0a0e1a', overflow: 'hidden' }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Content — NO horizontal padding so map goes edge-to-edge */}
      <div className="flex-1 flex flex-col overflow-hidden" style={{ minWidth: 0 }}>

        {/* ── MAP (fills most of viewport) ── */}
        <section className="relative flex-1" style={{ minHeight: '78vh', overflow: 'hidden' }}>
          {/* Night satellite image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/world-map-night.jpg')", opacity: 0.88, filter: 'contrast(1.1) brightness(1.05)' }}
          />
          {/* Edge vignette */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(8,12,26,0.55) 75%, rgba(8,12,26,0.92) 100%)' }} />
          {/* Bottom fade into featured pilots */}
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, #0a0e1a)' }} />

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 700" preserveAspectRatio="none">
            <g fill="none" stroke="#4A90FF" strokeWidth="1.2" opacity="0.6">
              <path d="M240 210 Q380 290 336 455" />
              <path d="M240 210 Q480 280 552 196" />
              <path d="M240 210 Q600 310 888 224" />
              <path d="M240 210 Q320 380 336 455" />
            </g>
          </svg>

          {/* Central America glow */}
          <motion.div
            animate={{ opacity: [0.4, 0.85, 0.4], scale: [1, 1.06, 1] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            style={{
              position: 'absolute', left: '22%', top: '52%',
              width: 180, height: 110,
              borderRadius: '50%',
              background: 'rgba(74,144,255,0.18)',
              border: '1px solid rgba(74,144,255,0.6)',
              boxShadow: '0 0 60px rgba(74,144,255,0.5)',
              filter: 'blur(1px)',
              transform: 'translate(-50%,-50%) rotate(-12deg)',
            }}
          />

          {/* Region nodes */}
          {regions.map(r => (
            <button
              key={r.name}
              onClick={() => setActiveRegion(r.name === 'SOUTH AMERICA' ? 'CENTRAL AMERICA' : r.name)}
              style={{ position: 'absolute', left: r.x, top: r.y, transform: 'translate(-50%,-50%)', textAlign: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <motion.div
                animate={{ scale: [1, 1.35, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
                style={{ width: 14, height: 14, borderRadius: '50%', background: '#4A90FF', boxShadow: '0 0 20px rgba(74,144,255,0.9)', margin: '0 auto 6px' }}
              />
              <p style={{ fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.14em', color: '#ffffff', lineHeight: 1.3 }}>{r.name}</p>
              <p style={{ fontSize: '0.5625rem', color: 'rgba(200,220,255,0.7)', marginTop: 2 }}>{r.sub}</p>
            </button>
          ))}

          {/* Overlay: title + button */}
          <div className="absolute inset-0 flex flex-col justify-start tpg-map-overlay-pad" style={{ padding: '28px 32px' }}>
            <div className="flex items-start justify-between gap-3">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                {/* Mobile hamburger */}
                <button className="tpg-ham" style={{ marginTop: 6 }} onClick={() => setSidebarOpen(true)}>
                  <Menu size={18} />
                </button>
                <div>
                  <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.25rem,2.8vw,2.4rem)', fontWeight: 400, color: '#ffffff', letterSpacing: '-0.01em', lineHeight: 1.15, marginBottom: 6 }}>
                    TPG_PILOT Global Portfolio
                  </h1>
                  <p style={{ fontSize: 'clamp(0.8rem,1.5vw,1rem)', color: '#7DB4FF', marginBottom: 4 }}>
                    Institutional Growth, Capital Strategy &amp; Web3 Commercialization—Unified
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(180,200,230,0.75)' }}>
                    Select a region to explore active pilots and unlock sustainable value worldwide.
                  </p>
                </div>
              </div>
              <button
                className="tpg-restrict-hide"
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '10px 20px', borderRadius: 8,
                  border: '1px solid rgba(74,144,255,0.45)',
                  background: 'rgba(8,12,26,0.55)',
                  color: '#7DB4FF', fontSize: '0.8125rem', fontWeight: 500,
                  cursor: 'pointer', backdropFilter: 'blur(8px)', whiteSpace: 'nowrap',
                }}
              >
                <Lock size={14} /> Restricted Access
              </button>
            </div>
          </div>

          {/* Region popup */}
          <AnimatePresence>
            {activeRegion && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute', right: '4%', top: '16%',
                  width: 320, borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.14)',
                  background: 'rgba(6,10,20,0.90)',
                  backdropFilter: 'blur(16px)',
                  padding: '20px 20px 14px',
                  zIndex: 30,
                }}
              >
                <button
                  onClick={() => setActiveRegion(null)}
                  style={{ position: 'absolute', right: 16, top: 16, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.45)' }}
                >
                  <X size={16} />
                </button>
                <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.12em', color: '#7DB4FF', marginBottom: 4 }}>{activeRegion}</p>
                <p style={{ fontSize: '0.8125rem', color: 'rgba(200,215,235,0.7)', marginBottom: 16 }}>3 Active Pilots</p>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  {centralAmericaPilots.map(p => (
                    <button
                      key={p.name}
                      onClick={() => p.path !== '#' && navigate(p.path)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 14, width: '100%',
                        padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer',
                        borderBottom: '1px solid rgba(255,255,255,0.07)', textAlign: 'left',
                      }}
                    >
                      <div style={{ width: 72, height: 52, borderRadius: 6, background: p.bg, flexShrink: 0 }} />
                      <div className="flex-1">
                        <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#ffffff', lineHeight: 1.2, marginBottom: 3 }}>{p.name}</p>
                        <p style={{ fontSize: '0.75rem', color: '#7DB4FF', marginBottom: 2 }}>{p.country}</p>
                        <p style={{ fontSize: '0.6875rem', color: 'rgba(200,215,235,0.55)' }}>{p.type}</p>
                      </div>
                      <ChevronRight size={14} style={{ color: '#7DB4FF', flexShrink: 0 }} />
                    </button>
                  ))}
                </div>

                <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', background: 'none', border: 'none', cursor: 'pointer', paddingTop: 12, color: '#7DB4FF', fontSize: '0.8125rem' }}>
                  View All Pilots in {activeRegion} <ChevronRight size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ── FEATURED PILOTS ── */}
        <section style={{ background: '#0a0e1a', padding: '0 0 0 0' }}>
          <div style={{ padding: '18px 28px 10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A90FF' }}>Featured Pilots</p>
                <div style={{ display: 'flex', gap: 5 }}>
                  {[0,1,2,3].map(i => (
                    <span key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: i === 0 ? '#4A90FF' : 'rgba(255,255,255,0.2)' }} />
                  ))}
                </div>
              </div>
              <button style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'none', border: 'none', cursor: 'pointer', color: '#7DB4FF', fontSize: '0.8125rem' }}>
                View All Pilots <ChevronRight size={14} />
              </button>
            </div>

            <div className="pilot-grid-resp">
              {featuredPilots.map(p => (
                <button
                  key={p.name}
                  onClick={() => p.path !== '#' && navigate(p.path)}
                  style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, overflow: 'hidden', textAlign: 'left', background: 'none', cursor: 'pointer', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(74,144,255,0.5)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                >
                  {/* Photo / gradient */}
                  <div style={{ height: 140, background: p.bg, position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)' }} />
                    <div style={{ position: 'absolute', bottom: 10, left: 12, right: 12 }}>
                      <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 400, color: '#ffffff', lineHeight: 1.2, marginBottom: 3 }}>{p.name}</p>
                      <p style={{ fontSize: '0.6875rem', color: '#7DB4FF', marginBottom: 5 }}>{p.country}</p>
                      <p style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.6875rem', color: 'rgba(200,215,235,0.7)' }}>
                        <MapPin size={10} style={{ flexShrink: 0 }} />{p.value}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="tpg-footer-hide" style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 28px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <p style={{ fontSize: '0.6875rem', color: 'rgba(180,200,230,0.45)' }}>© 2025 True Perspective Global. All Rights Reserved.</p>
            <div style={{ display: 'flex', gap: 20 }}>
              {['Capital Procurement', "Owner's Representation", 'ESG Execution', 'Engagement Ecosystems', 'Social Good', 'Digital Footprint'].map((t, i, arr) => (
                <React.Fragment key={t}>
                  <span style={{ fontSize: '0.6875rem', color: 'rgba(180,200,230,0.45)' }}>{t}</span>
                  {i < arr.length - 1 && <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.6875rem' }}>|</span>}
                </React.Fragment>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <span style={{ fontSize: '0.6875rem', color: 'rgba(180,200,230,0.45)', cursor: 'pointer' }}>Privacy Policy</span>
              <span style={{ fontSize: '0.6875rem', color: 'rgba(180,200,230,0.45)', cursor: 'pointer' }}>Terms of Use</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
