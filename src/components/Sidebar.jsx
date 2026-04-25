import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Globe2, Flag, Landmark, User, FileText,
  Puzzle, HeartHandshake, BarChart3, Settings,
  Sun, Moon,
} from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const nav = [
  ['Global Execution',      Globe2,        '/'],
  ['Pilot Portfolio',       Flag,           '/'],
  ['Capital Pipeline',      Landmark,       '/deals'],
  ['Investor Room',         User,           '/investors'],
  ['Document Vault',        FileText,       '#'],
  ['Engagement Ecosystems', Puzzle,         '#'],
  ['Social Good Impact',    HeartHandshake, '#'],
  ['Reports & Analytics',   BarChart3,      '#'],
  ['Settings',              Settings,       '#'],
]

const metrics = [
  ['Active Regions',    '12'],
  ['Active Pilots',     '18'],
  ['Total Development', '$4.2B+'],
  ['ESG Focus',         '100%'],
]

export default function Sidebar() {
  const navigate  = useNavigate()
  const { pathname } = useLocation()
  const { isDark, toggle } = useTheme()

  return (
    <aside className="tpg-sidebar flex flex-col justify-between py-8 px-6" style={{ width: 272 }}>
      <div>
        {/* Logo / brand */}
        <div className="mb-10">
          <p className="t-label-gold mb-1">True Perspective Global</p>
          <p className="t-display" style={{ fontSize: '1.75rem' }}>TPG</p>
          <p className="t-small mt-3" style={{ maxWidth: 196, fontSize: '0.8125rem' }}>
            Driving business growth through engagement ecosystems that benefit all stakeholders.
          </p>
        </div>

        {/* Nav */}
        <nav className="space-y-0.5">
          {nav.map(([label, Icon, path]) => {
            const active = path !== '#' && (
              path === '/' ? pathname === '/' : pathname.startsWith(path)
            )
            return (
              <button
                key={label}
                onClick={() => path !== '#' && navigate(path)}
                className="flex w-full items-center gap-3 rounded px-3 py-2.5 text-left transition-all"
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: active ? 500 : 400,
                  color: active ? 'var(--accent-lt)' : 'var(--text-2)',
                  background: active ? 'rgba(74,144,255,0.08)' : 'transparent',
                  borderLeft: active ? '2px solid var(--accent)' : '2px solid transparent',
                  letterSpacing: '0.01em',
                }}
              >
                <Icon size={15} strokeWidth={1.5} />
                {label}
              </button>
            )
          })}
        </nav>

        {/* Portfolio metrics */}
        <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="t-label mb-4">Portfolio Overview</p>
          <div className="space-y-3">
            {metrics.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between">
                <span className="t-small" style={{ fontSize: '0.8125rem' }}>{label}</span>
                <span style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1rem',
                  fontWeight: 400,
                  color: 'var(--gold)',
                }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="space-y-3">
        {/* Status */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
          <p className="t-label mb-2">Platform Status</p>
          <p className="t-small flex items-center gap-2" style={{ fontSize: '0.8125rem', color: '#6ee7b7' }}>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Operational — All systems active
          </p>
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          className="tpg-btn w-full justify-center"
          style={{ fontSize: '0.75rem', gap: 6 }}
        >
          {isDark ? <Sun size={13} /> : <Moon size={13} />}
          {isDark ? 'Day Mode' : 'Night Mode'}
        </button>

        <p className="t-micro text-center">© True Perspective Global</p>
      </div>
    </aside>
  )
}
