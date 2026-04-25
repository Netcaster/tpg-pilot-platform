import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Search, FileText, CalendarDays, ChevronRight, Filter, ShieldCheck, CheckCircle2, AlertTriangle, Clock3 } from 'lucide-react'
import Sidebar from '../components/Sidebar'

const deals = [
  {
    id: 'TPG-001', name: 'R.I.S.E. National Deployment',
    category: 'Pilot', region: 'United States',
    counterparty: 'Municipal / NGO / Private Sector',
    value: '$4.2B+', stage: 'Capital Formation', status: 'Active', priority: 'High',
    contracts: ['ESA', 'Pilot MOU', 'Funding Package', 'Surety Package'],
    dates: { initiated: '2026-04-01', updated: '2026-04-25', close: 'Q3 2026' },
    pilotPath: '#',
  },
  {
    id: 'TPG-002', name: 'Cóbano Preserve',
    category: 'Project', region: 'Costa Rica',
    counterparty: 'Cóbano Preserve Development Group',
    value: '$1.5B+', stage: 'Pre-Development / Capital Stack', status: 'Active', priority: 'High',
    contracts: ['ESA', "Owner's Rep", 'Draw Schedule', 'ESG Package'],
    dates: { initiated: '2026-04-10', updated: '2026-04-24', close: 'Q4 2026' },
    pilotPath: '/pilot/cobano-preserve',
  },
  {
    id: 'TPG-003', name: 'Antigua Master Plan / ABSEZ',
    category: 'Enterprise', region: 'Antigua & Barbuda',
    counterparty: 'ABSEZ / Development Sponsor',
    value: '$200M+', stage: 'SEZ Capital Readiness', status: 'Active', priority: 'High',
    contracts: ['ESA', 'Pilot MOU', 'SEZ Authority Docs', 'Capital Brief'],
    dates: { initiated: '2026-04-12', updated: '2026-04-24', close: 'Q3 2026' },
    pilotPath: '/pilot/antigua-master-plan',
  },
  {
    id: 'TPG-004', name: 'Hokkaido Resort / Vegas North',
    category: 'Project', region: 'Japan',
    counterparty: 'Yida International Company, Ltd.',
    value: '$1.04B', stage: 'ESA / Feasibility Review', status: 'Under Review', priority: 'Medium',
    contracts: ['ESA', 'Cover Letter', '5-in-1 Model', 'Capital Readiness Memo'],
    dates: { initiated: '2026-04-20', updated: '2026-04-25', close: 'Q1 2027' },
    pilotPath: '/pilot/hokkaido-resort',
  },
  {
    id: 'TPG-005', name: 'HTES U.S. / EU / Hong Kong',
    category: 'Enterprise', region: 'U.S. / Europe / Hong Kong',
    counterparty: 'HTES Operating Entities',
    value: '$100M Raise', stage: 'Investor Deck / Term Sheet', status: 'Active', priority: 'High',
    contracts: ['Investor Memo', 'Term Sheet', 'Operating Model', 'Raise Deck'],
    dates: { initiated: '2026-04-23', updated: '2026-04-24', close: 'Q3 2026' },
    pilotPath: '#',
  },
]

const statusMap = {
  'Active':       { icon: CheckCircle2, color: '#6ee7b7', bg: 'rgba(110,231,183,0.08)' },
  'Under Review': { icon: Clock3,       color: '#fde68a', bg: 'rgba(253,230,138,0.08)' },
  'Delayed':      { icon: AlertTriangle,color: '#fca5a5', bg: 'rgba(252,165,165,0.08)' },
}

const stats = [
  ['Total Pipeline', '$6.9B+'],
  ['Active Deals',   '21'],
  ['High Priority',  '9'],
  ['Material Updates','14'],
]

export default function DealPipeline() {
  const [selected, setSelected] = useState(deals[0])
  const [query, setQuery]       = useState('')
  const [category, setCategory] = useState('All')
  const navigate = useNavigate()

  const filtered = useMemo(() => deals.filter(d => {
    const q = query.toLowerCase()
    return (d.name.toLowerCase().includes(q) || d.region.toLowerCase().includes(q) || d.counterparty.toLowerCase().includes(q))
      && (category === 'All' || d.category === category)
  }), [query, category])

  return (
    <main className="flex min-h-screen" style={{ background: 'var(--page-bg)' }}>
      <Sidebar />

      <section className="flex-1 px-10 py-8 overflow-auto">
        {/* Header */}
        <header className="flex items-start justify-between mb-8">
          <div style={{ maxWidth: 520 }}>
            <p className="t-label mb-3">Deal Pipeline</p>
            <h1 className="t-display mb-3">TPG Deal Tracker</h1>
            <p className="t-body">
              Board-ready visibility across material contracts, capital parameters, and deal status for lenders, investors, and executive review.
            </p>
          </div>
          <button className="tpg-btn flex items-center gap-2 mt-1">
            <Lock size={13} /> Restricted Access
          </button>
        </header>

        {/* Stats */}
        <div className="grid gap-4 mb-8" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {stats.map(([label, value]) => (
            <div key={label} className="tpg-card" style={{ padding: '20px 24px' }}>
              <p className="t-micro mb-2" style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</p>
              <p className="t-stat">{value}</p>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between gap-4 mb-5 flex-wrap">
          <div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', maxWidth: 360, flex: 1 }}>
            <Search size={14} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
            <input value={query} onChange={e => setQuery(e.target.value)}
              placeholder="Search deals, regions, counterparties..."
              style={{ background: 'transparent', border: 'none', outline: 'none', width: '100%', fontSize: '0.875rem', color: 'var(--text-1)' }} />
          </div>
          <div className="flex items-center gap-2">
            <Filter size={13} style={{ color: 'var(--text-3)' }} />
            {['All','Enterprise','Pilot','Project'].map(c => (
              <button key={c} onClick={() => setCategory(c)}
                style={{
                  padding: '5px 14px',
                  borderRadius: 6,
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  border: '1px solid',
                  borderColor: category === c ? 'var(--accent)' : 'var(--border)',
                  background: category === c ? 'rgba(74,144,255,0.08)' : 'transparent',
                  color: category === c ? 'var(--accent-lt)' : 'var(--text-3)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}>{c}</button>
            ))}
          </div>
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: '1fr 380px' }}>
          {/* Table */}
          <div className="tpg-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
              <p className="t-label">Active Deal Pipeline</p>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table className="tpg-table">
                <thead>
                  <tr>
                    <th>Deal</th>
                    <th>Category</th>
                    <th>Region</th>
                    <th>Value</th>
                    <th>Status</th>
                    <th>Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(deal => {
                    const { icon: Icon, color, bg } = statusMap[deal.status] || statusMap.Active
                    const isSelected = selected.id === deal.id
                    return (
                      <tr key={deal.id} onClick={() => setSelected(deal)}
                        style={{ cursor: 'pointer', background: isSelected ? 'rgba(74,144,255,0.06)' : 'transparent' }}>
                        <td>
                          <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-1)' }}>{deal.name}</p>
                          <p className="t-micro mt-0.5">{deal.id}</p>
                        </td>
                        <td style={{ color: 'var(--accent-lt)', fontSize: '0.8125rem' }}>{deal.category}</td>
                        <td style={{ fontSize: '0.8125rem' }}>{deal.region}</td>
                        <td>
                          <span style={{ fontFamily: 'var(--serif)', fontSize: '0.9375rem', color: 'var(--text-1)' }}>{deal.value}</span>
                        </td>
                        <td>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 4, background: bg, fontSize: '0.75rem', color }}>
                            <Icon size={11} />{deal.status}
                          </span>
                        </td>
                        <td className="t-micro">{deal.dates.updated}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detail panel */}
          <div className="tpg-card">
            <p className="t-label mb-1">Selected Deal</p>
            <h2 className="t-heading mb-1" style={{ fontSize: '1.125rem' }}>{selected.name}</h2>
            <p className="t-micro mb-5">{selected.counterparty}</p>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {[['Category', selected.category], ['Region', selected.region], ['Value', selected.value], ['Priority', selected.priority], ['Stage', selected.stage], ['Status', selected.status]].map(([l, v]) => (
                <div key={l} className="rounded-md p-3" style={{ background: 'var(--card-bg2)', border: '1px solid var(--border)' }}>
                  <p className="t-micro mb-1">{l}</p>
                  <p style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-1)' }}>{v}</p>
                </div>
              ))}
            </div>

            <div className="tpg-divider" />

            <div className="mb-5">
              <p className="t-label mb-3 flex items-center gap-2"><FileText size={11} />Material Contracts</p>
              <div className="space-y-1.5">
                {selected.contracts.map(c => (
                  <div key={c} className="flex justify-between items-center py-2 px-3 rounded-md"
                    style={{ background: 'var(--card-bg2)', border: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-1)' }}>{c}</span>
                    <span className="t-micro">Vault</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tpg-divider" />

            <div className="mb-6">
              <p className="t-label mb-3 flex items-center gap-2"><CalendarDays size={11} />Critical Dates</p>
              {[['Initiated', selected.dates.initiated], ['Last Update', selected.dates.updated], ['Target Close', selected.dates.close]].map(([l, v]) => (
                <div key={l} className="flex justify-between py-2" style={{ borderBottom: '1px solid var(--border)', fontSize: '0.8125rem' }}>
                  <span className="t-micro" style={{ alignSelf: 'center' }}>{l}</span>
                  <span style={{ color: 'var(--text-1)' }}>{v}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="tpg-btn justify-center" style={{ borderColor: 'var(--accent)', color: 'var(--accent-lt)', background: 'rgba(74,144,255,0.06)' }}>
                Open Vault
              </button>
              <button className="tpg-btn justify-center" onClick={() => selected.pilotPath !== '#' && navigate(selected.pilotPath)}>
                Open Pilot
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
