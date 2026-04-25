import React, { useMemo, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const GOLD = '#c8a96a'

const stats = [
  { label: 'Pilot Asset Base',       value: '550 Acres' },
  { label: 'Golf Phase Investment',  value: '$109MM' },
  { label: 'Future Development Cost',value: '$1.04B' },
  { label: 'Primary Control Layer',  value: 'Lockbox + Draws' },
]

const modules = ['Data Vault','Capital Procurement',"Owner's Representation",'Construction Oversight','Draw Schedule','Lockbox Controls','Surety Bond Room','5-in-1 Event Revenue']

const backendTabs = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'vault',     label: 'Data Vault' },
  { id: 'capital',   label: 'Capital Stack' },
  { id: 'draws',     label: 'Draw Schedule' },
  { id: 'lockbox',   label: 'Lockbox' },
  { id: 'surety',    label: 'Surety Room' },
  { id: 'events',    label: '5-in-1 Model' },
]

export default function HokkaidoPilot() {
  const [portalOpen, setPortalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isAntigua = pathname.includes('antigua')

  const title = isAntigua ? 'Antigua Master Plan' : 'Hokkaido Resort'

  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em]" style={{ color: GOLD }}>True Perspective Global</p>
            <h1 className="text-lg font-semibold">{title} — Limited Pilot Platform</h1>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/')} className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10">← Portfolio</button>
            <button onClick={() => setPortalOpen(true)} className="rounded-full px-5 py-2 text-sm font-semibold text-black" style={{ background: GOLD }}>Restricted Access</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top right,rgba(200,169,106,0.22),transparent 35%),linear-gradient(135deg,#070707,#111827 45%,#000)' }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em]" style={{ color: GOLD }}>Capital Procurement • Owner's Rep • Lockbox Controls</p>
            <h2 className="text-5xl font-bold leading-tight md:text-6xl">A controlled-access pilot for institutional project execution.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              TPG's Limited Pilot demonstrates how large-scale development projects can be organized into a capital-ready environment with lender visibility, construction oversight, draw schedule controls, surety support, and restricted data-room governance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => setPortalOpen(true)} className="rounded-full px-7 py-3 font-semibold text-black" style={{ background: GOLD }}>Enter Restricted Portal</button>
              <a href="#overview" className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white hover:bg-white/10">View Pilot Overview</a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
            <div className="rounded-2xl bg-black/60 p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm text-white/60">Pilot Control Room</span>
                <span className="rounded-full bg-green-400/15 px-3 py-1 text-xs text-green-300">Demo Active</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map(s => (
                  <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-xs uppercase tracking-widest text-white/45">{s.label}</p>
                    <p className="mt-2 text-2xl font-bold" style={{ color: '#fde68a' }}>{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border p-5" style={{ borderColor: 'rgba(200,169,106,0.2)', background: 'rgba(200,169,106,0.1)' }}>
                <p className="text-sm leading-7 text-white/80">
                  Pilot focus: {title} platform integration, capital procurement, owner's representation, construction program oversight, lockbox controls, and surety-ready risk mitigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm uppercase tracking-[0.3em]" style={{ color: GOLD }}>Public Information Page</p>
            <h3 className="mt-3 text-4xl font-bold">What the pilot proves</h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {modules.map(m => (
              <div key={m} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h4 className="text-xl font-semibold">{m}</h4>
                <p className="mt-3 text-sm leading-7 text-white/65">Demonstrates institutional governance, visibility, reporting, controls, and project-readiness around this functional layer.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE STACK */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em]" style={{ color: GOLD }}>Platform Integration Benefits</p>
            <h3 className="mt-3 text-4xl font-bold">TPG converts a static project file into a controlled capital-ready operating environment.</h3>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ['For Sponsors','Institutional packaging, investor readiness, and milestone discipline.'],
              ['For Lenders','Visibility into approvals, budgets, draws, collateral, and risk.'],
              ['For Sureties','Controls for performance, completion, advance payment, and guarantee bonds.'],
              ['For Investors','Restricted data-room access, dashboards, KPIs, and reporting clarity.'],
            ].map(([t, b]) => (
              <div key={t} className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <h4 className="text-xl font-semibold" style={{ color: '#fde68a' }}>{t}</h4>
                <p className="mt-4 text-sm leading-7 text-white/70">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTAL MODAL */}
      {portalOpen && (
        <section className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 p-4 backdrop-blur">
          <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-[#0B0B0B] shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-5">
              <div>
                <p className="text-xs uppercase tracking-[0.3em]" style={{ color: GOLD }}>Restricted Portal Demo</p>
                <h3 className="text-2xl font-bold">TPG {title} Backend</h3>
              </div>
              <button onClick={() => setPortalOpen(false)} className="rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white/10">Close Portal</button>
            </div>

            <div className="grid lg:grid-cols-[260px_1fr]">
              <aside className="border-r border-white/10 p-4">
                {backendTabs.map(t => (
                  <button key={t.id} onClick={() => setActiveTab(t.id)}
                    className={`mb-2 w-full rounded-xl px-4 py-3 text-left text-sm ${activeTab === t.id ? 'font-semibold text-black' : 'bg-white/[0.04] text-white/75 hover:bg-white/[0.08]'}`}
                    style={activeTab === t.id ? { background: GOLD } : {}}>
                    {t.label}
                  </button>
                ))}
              </aside>

              <div className="p-6">
                {activeTab === 'dashboard' && <PortalPanel title="Executive Dashboard">
                  <div className="grid gap-4 md:grid-cols-3">
                    {[['Total Program Cost','$1.04B'],['Capital Target','$150MM+'],['Draws Pending','$0 Demo'],['Surety Status','Packaging'],['Permit Library','Loaded'],['Risk Rating','Under Review']].map(([l,v]) => (
                      <div key={l} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                        <p className="text-xs uppercase tracking-widest text-white/45">{l}</p>
                        <p className="mt-2 text-2xl font-bold" style={{ color: '#fde68a' }}>{v}</p>
                      </div>
                    ))}
                  </div>
                </PortalPanel>}

                {activeTab === 'vault' && <PortalPanel title="Data Vault">
                  <div className="grid gap-4 md:grid-cols-3">
                    {['Corporate Documents','Land / Title / Ownership','Permits & Approvals','Environmental Documents','Construction Documents','Financial Models','Capital Use Tables','Income Projections','ESA / Advisory Documents','Surety & Guarantee Bond Package','Investor Presentations','5-in-1 Event Model'].map(f => (
                      <div key={f} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                        <p className="font-semibold text-sm">{f}</p>
                        <p className="mt-2 text-xs text-white/45">Access: Permissioned</p>
                      </div>
                    ))}
                  </div>
                </PortalPanel>}

                {activeTab === 'capital' && <PortalPanel title="Capital Procurement Dashboard">
                  <PTable headers={['Instrument','Type','Amount','Status']} rows={[['Senior Debt','Target','$TBD','Open'],['Credit Facility Revolver','Target','$TBD','Structuring'],['Preferred Equity','Target','$150MM','Prospect'],['Surety-Backed Support','Enhancement','$TBD','Packaging'],['JV Equity','Strategic','$TBD','Pipeline']]} />
                </PortalPanel>}

                {activeTab === 'draws' && <PortalPanel title="Draw Schedule Tracker">
                  <PTable headers={['Draw','Category','Amount','Status']} rows={[['Draw 01','Structural Engineering','$51.78MM','Pending'],['Draw 02','Fine Decoration','$76.52MM','Pending'],['Draw 03','Electromechanical','$20.73MM','Pending'],['Draw 04','Auxiliary Facilities','$35.85MM','Pending'],['Draw 05','Road / Greening','$45.87MM','Pending'],['Draw 06','Contingency','$45.20MM','Reserve']]} />
                </PortalPanel>}

                {activeTab === 'lockbox' && <PortalPanel title="Lockbox / Funds-Control Module">
                  <PTable headers={['Control Layer','Protocol','Status']} rows={[['Controlled Account','Bank TBD','Not Activated'],['Use of Proceeds','Approved Categories','Mapped'],['Draw Approval','TPG + Lender + Surety','Configured'],['Payment Release','Milestone Verified','Workflow Ready'],['Variance Reporting','Monthly','Configured']]} />
                </PortalPanel>}

                {activeTab === 'surety' && <PortalPanel title="Surety / Guarantee Bond Package Room">
                  <div className="grid gap-4 md:grid-cols-2">
                    {['Performance Bond','Completion Bond','Advance Payment Guarantee','Payment Bond','Maintenance Bond','Revolver Risk Mitigation Package'].map(b => (
                      <div key={b} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                        <h4 className="font-semibold" style={{ color: '#fde68a' }}>{b}</h4>
                        <p className="mt-2 text-sm text-white/60">Placeholder for underwriting support, collateral analysis, revenue coverage, construction controls, and risk mitigation evidence.</p>
                      </div>
                    ))}
                  </div>
                </PortalPanel>}

                {activeTab === 'events' && <PortalPanel title="5-in-1 Event Revenue Module">
                  <PTable headers={['Vertical','Primary Audience','Revenue Driver']} rows={[['Convention','Corporate / Institutional','Room blocks + sponsorship'],['Tradeshow','Product / Brand Showcase','Booths + activations'],['Expo','Destination / Innovation','Ticketing + media'],['World Fair','Cultural / Tourism','Pavilions + concessions'],['Symposium','Policy / Academic','Sponsorship + publishing']]} />
                </PortalPanel>}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

function PortalPanel({ title, children }) {
  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em]" style={{ color: GOLD }}>Backend Module</p>
          <h3 className="mt-2 text-3xl font-bold">{title}</h3>
        </div>
        <span className="rounded-full border px-4 py-2 text-xs" style={{ borderColor: 'rgba(200,169,106,0.3)', color: '#fde68a' }}>Restricted Demo</span>
      </div>
      {children}
    </section>
  )
}

function PTable({ headers, rows }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-white/[0.06] text-white/60">
          <tr>{headers.map(h => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-white/10">
              {row.map((cell, j) => <td key={j} className="px-4 py-4 text-white/70">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
