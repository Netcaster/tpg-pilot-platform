import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Lock, ChevronRight, X, MapPin,
  Globe2, Flag, Landmark, Leaf,
} from 'lucide-react'
import Sidebar from '../components/Sidebar'

const BLUE = '#4A90FF'

const featuredPilots = [
  { name: "Cóbano Preserve",      country: "Costa Rica",         value: "$1.5B+ Development",  path: '/pilot/cobano-preserve' },
  { name: "Antigua Master Plan",  country: "Antigua & Barbuda",  value: "$200M+ Development",  path: '/pilot/antigua-master-plan' },
  { name: "Hokkaido Resort Plan", country: "Japan",              value: "$350M+ Development",  path: '/pilot/hokkaido-resort' },
  { name: "Marbella Club",        country: "Spain",              value: "$350M+ Development",  path: '#' },
  { name: "Phuket Wellness",      country: "Thailand",           value: "$180M+ Development",  path: '#' },
]

const centralAmericaPilots = [
  { name: "Cóbano Preserve",  country: "Costa Rica",  type: "ESG Luxury Eco-Resort",    path: '/pilot/cobano-preserve' },
  { name: "Roatán Bay Resort", country: "Honduras",   type: "Luxury Island Resort",      path: '#' },
  { name: "Ambergris Caye",   country: "Belize",      type: "Oceanfront Residences",     path: '#' },
]

const regions = [
  { name: 'North America',  sub: '5 Active Pilots', x: '22%', y: '31%' },
  { name: 'Europe',         sub: '3 Active Pilots', x: '46%', y: '31%' },
  { name: 'Asia',           sub: '4 Active Pilots', x: '88%', y: '40%' },
  { name: 'Africa',         sub: '2 Active Pilots', x: '51%', y: '69%' },
  { name: 'South America',  sub: '2 Active Pilots', x: '33%', y: '70%' },
  { name: 'Australia',      sub: '2 Active Pilots', x: '87%', y: '78%' },
]

export default function GlobalPortfolio() {
  const [activeRegion, setActiveRegion] = useState(null)
  const navigate = useNavigate()

  return (
    <main className="min-h-screen overflow-hidden bg-[#020712] text-white">
      <div className="relative min-h-screen" style={{ background: 'radial-gradient(circle at center, rgba(74,144,255,0.10) 0%, transparent 42%), linear-gradient(180deg,#020712,#030509)' }}>
        <div className="grid min-h-screen" style={{ gridTemplateColumns: '280px 1fr' }}>
          <Sidebar />

          <section className="relative px-8 py-6 flex flex-col">
            {/* HEADER */}
            <header className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight">TPG_PILOT Global Portfolio</h1>
                <p className="mt-2 text-xl" style={{ color: '#7DB4FF' }}>
                  Institutional Growth, Capital Strategy & Web3 Commercialization—Unified
                </p>
                <p className="mt-2 max-w-3xl text-white/65">
                  Select a region to explore active pilots and unlock sustainable value worldwide.
                </p>
              </div>
              <button className="flex items-center gap-3 rounded-lg border border-white/20 bg-black/25 px-5 py-3 text-sm backdrop-blur hover:border-[#4A90FF]/70 hover:bg-[#4A90FF]/10" style={{ color: '#7DB4FF' }}>
                <Lock size={16} /> Restricted Access
              </button>
            </header>

            {/* MAP */}
            <section className="relative h-[480px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0a0a0a] to-black mb-4">
              {/* Map background */}
              <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('/images/world-map-night.jpg')" }} />
              <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 46% 45%, transparent, rgba(2,7,18,0.45) 55%, rgba(2,7,18,0.92) 100%)' }} />

              {/* SVG geography fallback */}
              <svg viewBox="0 0 1200 620" className="absolute inset-0 h-full w-full opacity-30">
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

              {/* Flow lines */}
              <svg viewBox="0 0 1200 620" className="absolute inset-0 h-full w-full">
                <g fill="none" stroke="#4A90FF" strokeWidth="1.2" opacity="0.6">
                  <path d="M335 330 Q520 245 670 250" />
                  <path d="M335 330 Q585 285 865 315" />
                  <path d="M335 330 Q575 355 720 420" />
                  <path d="M335 330 Q420 415 425 470" />
                </g>
              </svg>

              {/* Central America glow */}
              <motion.div
                animate={{ opacity: [0.35, 0.75, 0.35] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
                className="absolute z-10 rounded-[50%] border"
                style={{ left: '27%', top: '47%', width: 170, height: 105, rotate: '-10deg', borderColor: 'rgba(74,144,255,0.7)', background: 'rgba(74,144,255,0.15)', filter: 'blur(1px)', boxShadow: '0 0 50px rgba(74,144,255,0.45)' }}
              />

              {/* Region nodes */}
              {regions.map((r) => (
                <button
                  key={r.name}
                  onClick={() => setActiveRegion(r.name === 'South America' ? 'Central America' : r.name)}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-left"
                  style={{ left: r.x, top: r.y }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ repeat: Infinity, duration: 2.2 }}
                    className="mb-1 block h-4 w-4 rounded-full border-2 border-white/70"
                    style={{ background: BLUE, boxShadow: '0 0 22px rgba(74,144,255,0.9)' }}
                  />
                  <span className="block text-xs font-semibold uppercase text-white">{r.name}</span>
                  <span className="block text-xs text-white/60">{r.sub}</span>
                </button>
              ))}

              {/* Region popup */}
              <AnimatePresence>
                {activeRegion && (
                  <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 16, scale: 0.96 }}
                    className="absolute left-[56%] top-[18%] z-30 w-[340px] rounded-xl border border-white/20 p-5 shadow-2xl backdrop-blur-md"
                    style={{ background: 'rgba(6,17,31,0.92)' }}
                  >
                    <button onClick={() => setActiveRegion(null)} className="absolute right-4 top-4 text-white/60 hover:text-white"><X size={18} /></button>
                    <h3 className="text-xl font-medium uppercase" style={{ color: '#7DB4FF' }}>{activeRegion}</h3>
                    <p className="mt-1 text-white/70 text-sm">3 Active Pilots</p>
                    <div className="mt-3 border-t border-white/10">
                      {centralAmericaPilots.map((p) => (
                        <button
                          key={p.name}
                          onClick={() => p.path !== '#' && navigate(p.path)}
                          className="flex w-full items-center gap-3 border-b border-white/10 py-3 text-left hover:bg-white/[0.03]"
                        >
                          <div className="h-12 w-16 rounded bg-white/10 flex items-center justify-center text-xs text-white/40 flex-shrink-0">IMG</div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold">{p.name}</p>
                            <p className="text-xs" style={{ color: '#7DB4FF' }}>{p.country}</p>
                            <p className="text-xs text-white/55">{p.type}</p>
                          </div>
                          <ChevronRight size={16} style={{ color: '#7DB4FF' }} />
                        </button>
                      ))}
                    </div>
                    <button className="mt-3 flex w-full items-center justify-between text-sm hover:text-white" style={{ color: '#7DB4FF' }}>
                      View All Pilots in {activeRegion} <ChevronRight size={16} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute left-5 top-5 z-20">
                <p className="text-xs uppercase tracking-[0.3em]" style={{ color: BLUE }}>Global Pilot Network</p>
                <h3 className="mt-1 text-xl font-semibold">Capital Command Layer</h3>
              </div>
            </section>

            {/* FEATURED PILOTS */}
            <section className="rounded-xl border border-white/10 bg-black/35 p-5 backdrop-blur-md">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: '#7DB4FF' }}>Featured Pilots</h2>
                <button className="flex items-center gap-2 text-sm hover:text-white" style={{ color: '#7DB4FF' }}>
                  View All Pilots <ChevronRight size={16} />
                </button>
              </div>
              <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
                {featuredPilots.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => p.path !== '#' && navigate(p.path)}
                    className="group overflow-hidden rounded-lg border border-white/15 bg-black/40 text-left transition hover:border-[#4A90FF]/70"
                  >
                    <div className="relative h-32 bg-white/5 flex items-center justify-center">
                      <span className="text-white/20 text-xs">Photo</span>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-sm font-semibold leading-tight">{p.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: '#7DB4FF' }}>{p.country}</p>
                        <p className="text-xs text-white/55 mt-1 flex items-center gap-1">
                          <MapPin size={11} />{p.value}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <footer className="mt-4 flex items-center justify-between text-xs text-white/40">
              <div className="flex gap-4">
                {['Capital Procurement', "Owner's Representation", 'ESG Execution', 'Engagement Ecosystems', 'Social Good', 'Digital Footprint'].map((t, i, arr) => (
                  <React.Fragment key={t}><span>{t}</span>{i < arr.length - 1 && <span>|</span>}</React.Fragment>
                ))}
              </div>
              <div className="flex gap-4"><span>Privacy Policy</span><span>|</span><span>Terms of Use</span></div>
            </footer>
          </section>
        </div>
      </div>
    </main>
  )
}
