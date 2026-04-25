import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Globe2, Flag, Landmark, User, FileText,
  Puzzle, HeartHandshake, BarChart3, Settings, Leaf,
} from 'lucide-react'

const BLUE = '#4A90FF'

const nav = [
  ['Global Execution',       Globe2,        '/'],
  ['Pilot Portfolio',        Flag,           '/'],
  ['Capital Pipeline',       Landmark,       '/deals'],
  ['Investor Room',          User,           '/investors'],
  ['Document Vault',         FileText,       '#'],
  ['Engagement Ecosystems',  Puzzle,         '#'],
  ['Social Good Impact',     HeartHandshake, '#'],
  ['Reports & Analytics',    BarChart3,      '#'],
  ['Settings',               Settings,       '#'],
]

const metrics = [
  [Globe2,    'Active Regions',     '12', 'Across 4 Continents'],
  [Flag,      'Active Pilots',      '18', 'Institutional Grade'],
  [Landmark,  'Total Development',  '$4.2B+', 'Pipeline Value'],
  [Leaf,      'ESG Focus',          '100%', 'Sustainability Driven'],
]

export default function Sidebar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <aside className="relative z-30 border-r border-white/10 bg-black/20 px-5 py-6 backdrop-blur flex flex-col justify-between" style={{ width: 280 }}>
      <div>
        <div className="mb-8 px-1">
          <p className="text-2xl font-bold tracking-widest" style={{ color: BLUE }}>TPG</p>
          <p className="text-xs uppercase tracking-[0.28em] mt-1" style={{ color: BLUE }}>True Perspective Global</p>
          <p className="mt-4 text-sm leading-6 text-white/55 max-w-[200px]">
            Driving business growth through engagement ecosystems that benefit all stakeholders.
          </p>
        </div>

        <nav className="space-y-1">
          {nav.map(([label, Icon, path]) => {
            const isActive = path !== '#' && pathname === path && (
              (path === '/' && pathname === '/') ||
              (path !== '/' && pathname.startsWith(path))
            )
            return (
              <button
                key={label}
                onClick={() => path !== '#' && navigate(path)}
                className={`flex w-full items-center gap-4 rounded-sm px-4 py-3 text-left text-sm uppercase tracking-wide transition ${
                  isActive
                    ? 'border-l-4 bg-[#4A90FF]/10 text-[#7DB4FF]'
                    : 'text-white/65 hover:bg-white/[0.04] hover:text-[#7DB4FF]'
                }`}
                style={isActive ? { borderLeftColor: BLUE } : {}}
              >
                <Icon size={20} strokeWidth={1.5} />
                {label}
              </button>
            )
          })}
        </nav>

        <div className="mt-6 rounded-lg border border-white/10 bg-black/35 p-5 space-y-5">
          {metrics.map(([Icon, label, value, sub]) => (
            <div key={label} className="flex gap-4">
              <Icon size={28} strokeWidth={1.5} style={{ color: BLUE }} />
              <div>
                <p className="text-xs uppercase tracking-wide text-white/60">{label}</p>
                <p className="text-xl font-light">{value}</p>
                <p className="text-xs text-white/45">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="rounded-lg border border-white/10 bg-black/35 p-4">
          <p className="text-xs uppercase tracking-wide text-white/45">Platform Status</p>
          <p className="mt-2 flex items-center gap-2 text-sm text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Operational
          </p>
          <p className="mt-1 text-xs text-white/35">All systems active</p>
        </div>
        <p className="text-xs text-white/30 px-1">© True Perspective Global</p>
      </div>
    </aside>
  )
}
