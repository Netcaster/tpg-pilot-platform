import React, { useState } from 'react'
import { Lock } from 'lucide-react'
import Sidebar from '../components/Sidebar'

const tabs = [
  { id: 'pipeline',  label: 'Capital Pipeline' },
  { id: 'investors', label: 'Investor Profiles' },
  { id: 'intake',    label: 'Deal Intake' },
  { id: 'termsheet', label: 'Term Sheet' },
]

export default function InvestorEngine() {
  const [tab, setTab] = useState('pipeline')

  return (
    <main className="flex min-h-screen" style={{ background: 'var(--page-bg)' }}>
      <Sidebar />

      <section className="flex-1 px-10 py-8 overflow-auto">
        {/* Header */}
        <header className="flex items-start justify-between mb-8">
          <div style={{ maxWidth: 520 }}>
            <p className="t-label mb-3">Investor Room</p>
            <h1 className="t-display mb-3">Investor Engine</h1>
            <p className="t-body">
              Capital pipeline management, investor profiling, deal intake, and term sheet generation for institutional engagements.
            </p>
          </div>
          <button className="tpg-btn flex items-center gap-2 mt-1">
            <Lock size={13} /> Restricted Access
          </button>
        </header>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 p-1 rounded-lg" style={{ background: 'var(--card-bg2)', border: '1px solid var(--border)', width: 'fit-content' }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{
                padding: '7px 18px',
                borderRadius: 8,
                fontSize: '0.8125rem',
                fontWeight: tab === t.id ? 500 : 400,
                background: tab === t.id ? 'var(--card-bg)' : 'transparent',
                color: tab === t.id ? 'var(--text-1)' : 'var(--text-3)',
                border: tab === t.id ? '1px solid var(--border2)' : '1px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'pipeline' && (
          <Section title="Capital Pipeline" subtitle="Active capital commitments and prospects across the pilot portfolio.">
            <div className="tpg-card" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="tpg-table">
                <thead>
                  <tr>
                    <th>Investor</th><th>Project</th><th>Stage</th><th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Fund A', 'Hokkaido', 'Soft Commit', '$25MM'],
                    ['Family Office B', 'Antigua', 'Prospect', '$50MM'],
                    ['PE Group C', 'Dual', 'Under Review', '$100MM'],
                  ].map((r, i) => (
                    <tr key={i}>
                      {r.map((c, j) => <td key={j} style={j === 3 ? { fontFamily: 'var(--serif)', color: 'var(--text-1)' } : {}}>{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        )}

        {tab === 'investors' && (
          <Section title="Investor Profiles" subtitle="Primary investor type and engagement parameters for the current pipeline.">
            <div className="grid grid-cols-2 gap-4" style={{ maxWidth: 560 }}>
              {[['Type', 'Family Office'], ['Ticket Size', '$10M – $100M'], ['Geography', 'US / UAE / Asia'], ['Focus', 'Hospitality / Infrastructure']].map(([k, v]) => (
                <div key={k} className="tpg-card" style={{ padding: '18px 20px' }}>
                  <p className="t-micro mb-2">{k}</p>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '1.0625rem', color: 'var(--gold)', fontWeight: 400 }}>{v}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {tab === 'intake' && (
          <Section title="Deal Intake" subtitle="Submit a new project for capital structuring review.">
            <form className="space-y-4" style={{ maxWidth: 480 }} onSubmit={e => e.preventDefault()}>
              {[
                ['Project Name', 'text', 'e.g. Coastal Resort, Phase II'],
                ['Capital Needed', 'text', 'e.g. $50M'],
                ['Asset Type', 'text', 'e.g. Hospitality, Mixed-Use'],
              ].map(([label, type, ph]) => (
                <div key={label}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 6 }}>{label}</label>
                  <input type={type} placeholder={ph} className="tpg-input" />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 6 }}>Project Summary</label>
                <textarea placeholder="Describe the project, location, and development program..." className="tpg-input" />
              </div>
              <button type="submit" className="tpg-btn tpg-btn-primary">Submit for Review</button>
            </form>
          </Section>
        )}

        {tab === 'termsheet' && (
          <Section title="Term Sheet Builder" subtitle="Generate a preliminary term sheet for lender or investor review.">
            <form style={{ maxWidth: 480 }} onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  ['Deal Type', 'Debt / Equity / Mezzanine'],
                  ['Amount', 'e.g. $50,000,000'],
                  ['Rate / IRR', 'e.g. 8.5% / 18% IRR'],
                  ['Tenor', 'e.g. 36 months'],
                ].map(([label, ph]) => (
                  <div key={label}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 6 }}>{label}</label>
                    <input placeholder={ph} className="tpg-input" />
                  </div>
                ))}
              </div>
              <div className="mb-6">
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 6 }}>Collateral</label>
                <input placeholder="e.g. First lien on subject property" className="tpg-input" />
              </div>
              <button type="submit" className="tpg-btn tpg-btn-primary">Generate Term Sheet</button>
            </form>
          </Section>
        )}
      </section>
    </main>
  )
}

function Section({ title, subtitle, children }) {
  return (
    <div>
      <div className="mb-5">
        <h2 className="t-heading mb-1">{title}</h2>
        <p className="t-small">{subtitle}</p>
      </div>
      {children}
    </div>
  )
}
