import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Globe2, Flag, Landmark, User, FileText,
  Puzzle, HeartHandshake, BarChart3, Settings,
  Sun, Moon, Leaf,
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

export default function Sidebar() {
  const navigate      = useNavigate()
  const { pathname }  = useLocation()
  const { isDark, toggle } = useTheme()

  return (
    <aside style={{
      width: 272,
      minHeight: '100vh',
      background: 'rgba(6,9,20,0.96)',
      borderRight: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
    }}>
      {/* Logo */}
      <div style={{ padding: '24px 20px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
          <Globe2 size={28} strokeWidth={1.2} style={{ color: '#4A90FF', flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: '0.6875rem', fontWeight: 400, fontStyle: 'italic', color: 'rgba(200,215,235,0.7)', lineHeight: 1.3, fontFamily: 'var(--serif)' }}>
              true<br />perspective<br />global
            </p>
          </div>
        </div>
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
  )
}
