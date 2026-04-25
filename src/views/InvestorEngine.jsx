import React, { useState } from 'react'
import { Lock } from 'lucide-react'
import Sidebar from '../components/Sidebar'

export default function InvestorEngine() {
  const [tab, setTab] = useState('pipeline')

  const tabs = ['pipeline', 'investors', 'intake', 'termsheet']

  return (
    <main className="min-h-screen bg-[#020712] text-white">
      <div className="grid min-h-screen" style={{ gridTemplateColumns: '280px 1fr' }}>
        <Sidebar />

        <section className="px-8 py-7">
          <header className="mb-6 flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-[#c8a96a]">Investor Engine</h1>
              <p className="mt-2 text-white/55 max-w-xl">Capital pipeline management, investor profiles, deal intake, and term sheet builder.</p>
            </div>
            <button className="flex items-center gap-2 rounded-lg border border-white/20 bg-black/25 px-5 py-3 text-sm text-[#7DB4FF]">
              <Lock size={16} /> Restricted Access
            </button>
          </header>

          {/* NAV TABS */}
          <div className="flex gap-3 mb-6">
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-lg text-sm font-medium uppercase tracking-wide transition ${tab === t ? 'bg-[#c8a96a] text-black' : 'bg-white/10 text-white/70 hover:bg-white/15'}`}>
                {t}
              </button>
            ))}
          </div>

          {tab === 'pipeline' && (
            <Section title="Capital Pipeline">
              <div className="overflow-hidden rounded-xl border border-white/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/[0.05] text-xs uppercase tracking-wide text-white/45">
                    <tr>{['Investor','Project','Stage','Amount'].map(h => <th key={h} className="px-5 py-3">{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {[
                      ['Fund A','Hokkaido','Soft Commit','$25MM'],
                      ['Family Office B','Antigua','Prospect','$50MM'],
                      ['PE Group C','Dual','Under Review','$100MM'],
                    ].map((r, i) => (
                      <tr key={i} className="border-t border-white/10 hover:bg-white/[0.03]">
                        {r.map((c, j) => <td key={j} className="px-5 py-4 text-white/70">{c}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>
          )}

          {tab === 'investors' && (
            <Section title="Investor Profiles">
              <div className="grid md:grid-cols-2 gap-4">
                {[['Type','Family Office'],['Ticket Size','$10MM – $100MM'],['Geography','US / UAE / Asia'],['Focus','Hospitality / Infrastructure']].map(([k,v]) => (
                  <div key={k} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-xs text-white/45 uppercase tracking-wide mb-1">{k}</p>
                    <p className="text-[#c8a96a] font-medium">{v}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {tab === 'intake' && (
            <Section title="Deal Intake Form">
              <form className="space-y-4 max-w-lg" onSubmit={e => e.preventDefault()}>
                <input placeholder="Project Name" className="input" />
                <input placeholder="Capital Needed" className="input" />
                <input placeholder="Asset Type" className="input" />
                <textarea placeholder="Project Summary" className="input" style={{ minHeight: 100 }} />
                <button type="submit" className="bg-[#c8a96a] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90">Submit</button>
              </form>
            </Section>
          )}

          {tab === 'termsheet' && (
            <Section title="Term Sheet Builder">
              <form className="max-w-lg space-y-4" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="Deal Type (Debt/Equity)" className="input" />
                  <input placeholder="Amount" className="input" />
                  <input placeholder="Rate / IRR" className="input" />
                  <input placeholder="Tenor" className="input" />
                  <input placeholder="Collateral" className="input col-span-2" />
                </div>
                <button type="submit" className="mt-2 bg-[#c8a96a] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90">Generate Term Sheet</button>
              </form>
            </Section>
          )}
        </section>
      </div>
    </main>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-5 text-white">{title}</h3>
      {children}
    </div>
  )
}
