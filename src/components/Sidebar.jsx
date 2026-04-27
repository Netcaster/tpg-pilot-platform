import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Globe2, Flag, Landmark, User, FileText,
  Puzzle, HeartHandshake, BarChart3, Settings,
  Sun, Moon, Leaf, X,
} from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const nav = [
  ['GLOBAL EXECUTION',      Globe2,        '/'],
  ['PILOT PORTFOLIO',       Flag,           '/'],
  ['CAPITAL PIPELINE',      Landmark,       '/deals'],
  ['INVESTOR ROOM',         User,           '/investors'],
  ['DOCUMENT VAULT',        FileText,       '#'],
  ['ENGAGEMENT ECOSYSTEMS', Puzzle,         '#'],
  ['SOCIAL GOOD IMPACT',    HeartHandshake, '#'],
  ['REPORTS & ANALYTICS',   BarChart3,      '#'],
  ['SETTINGS',              Settings,       '#'],
]

const metrics = [
  [Globe2,    'ACTIVE REGIONS',    '12', 'Across 4 Continents'],
  [Flag,      'ACTIVE PILOTS',     '18', 'Institutional Grade'],
  [Landmark,  'TOTAL DEVELOPMENT', '$4.2B+', 'Pipeline Value'],
  [Leaf,      'ESG FOCUS',         '100%', 'Sustainability Driven'],
]

export default function Sidebar({ isOpen = false, onClose }) {
  const navigate      = useNavigate()
  const { pathname }  = useLocation()
  const { isDark, toggle } = useTheme()

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`tpg-sidebar-backdrop${isOpen ? ' is-open' : ''}`}
        onClick={onClose}
      />
      <aside
        className={`tpg-sidebar-drawer${isOpen ? ' is-open' : ''}`}
        style={{
          width: 272,
          minHeight: '100vh',
          background: 'rgba(6,9,20,0.96)',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          position: 'relative',
        }}
      >
      {/* Mobile close button */}
      <button className="tpg-sidebar-close-btn" onClick={onClose}>
        <X size={16} />
      </button>
      {/* Logo */}
      <div style={{ padding: '20px 20px 16px' }}>
        <img
          src="/tpg-logo.png"
          alt="TPG"
          style={{ width: 100, display: 'block', opacity: 0.95 }}
        />
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '0 10px' }}>
        {nav.map(([label, Icon, path]) => {
          const active = path !== '#' && (
            path === '/' ? pathname === '/' : pathname.startsWith(path)
          )
          return (
            <button
              key={label}
              onClick={() => path !== '#' && navigate(path)}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                width: '100%', padding: '12px 12px',
                borderRadius: 4, textAlign: 'left',
                background: active ? 'rgba(74,144,255,0.10)' : 'transparent',
                borderLeft: `3px solid ${active ? '#4A90FF' : 'transparent'}`,
                color: active ? '#7DB4FF' : 'rgba(200,215,235,0.60)',
                fontSize: '0.6875rem', fontWeight: 500,
                letterSpacing: '0.10em',
                cursor: path !== '#' ? 'pointer' : 'default',
                border: 'none',
                borderLeft: `3px solid ${active ? '#4A90FF' : 'transparent'}`,
                marginBottom: 2,
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => { if (!active && path !== '#') { e.currentTarget.style.color = '#7DB4FF'; e.currentTarget.style.background = 'rgba(74,144,255,0.05)' } }}
              onMouseLeave={e => { if (!active) { e.currentTarget.style.color = 'rgba(200,215,235,0.60)'; e.currentTarget.style.background = 'transparent' } }}
            >
              <Icon size={18} strokeWidth={1.4} style={{ flexShrink: 0 }} />
              {label}
            </button>
          )
        })}
      </nav>

      {/* Metrics */}
      <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        {metrics.map(([Icon, label, value, sub]) => (
          <div key={label} style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
            <Icon size={26} strokeWidth={1.3} style={{ color: '#4A90FF', flexShrink: 0, marginTop: 2 }} />
            <div>
              <p style={{ fontSize: '0.5625rem', fontWeight: 600, letterSpacing: '0.12em', color: 'rgba(180,200,230,0.55)', marginBottom: 2 }}>{label}</p>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '1.375rem', fontWeight: 400, color: '#ffffff', lineHeight: 1, marginBottom: 2 }}>{value}</p>
              <p style={{ fontSize: '0.6875rem', color: 'rgba(180,200,230,0.50)' }}>{sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Theme toggle */}
      <div style={{ padding: '12px 20px 20px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <button
          onClick={toggle}
          style={{
            display: 'flex', alignItems: 'center', gap: 8, width: '100%',
            padding: '9px 14px', borderRadius: 6, justifyContent: 'center',
            border: '1px solid rgba(200,169,106,0.30)',
            background: 'rgba(200,169,106,0.07)',
            color: '#c8a96a', fontSize: '0.75rem', fontWeight: 500,
            cursor: 'pointer', letterSpacing: '0.04em',
          }}
        >
          {isDark ? <Sun size={13} /> : <Moon size={13} />}
          {isDark ? 'Day Mode' : 'Night Mode'}
        </button>
      </div>
      </aside>
    </>
  )
}
