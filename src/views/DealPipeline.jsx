import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Lock, Search, FileText, CalendarDays, Building2, Landmark,
  Globe2, Briefcase, CheckCircle2, AlertTriangle, Clock3,
  ChevronRight, Filter, ShieldCheck,
} from 'lucide-react'
import Sidebar from '../components/Sidebar'

const deals = [
  {
    id: 'TPG-RISE-001',
    name: 'R.I.S.E. National Deployment',
    category: 'Pilot',
    region: 'United States',
    counterparty: 'Municipal / NGO / Private Sector',
    value: '$4.2B+',
    stage: 'Capital Formation',
    status: 'Active',
    priority: 'High',
    materialContracts: ['ESA', 'Pilot MOU', 'Funding Package', 'Surety Package'],
    dates: { initiated: '2026-04-01', lastUpdate: '2026-04-25', targetClose: 'Q3 2026' },
    linkedVault: '#', linkedPilot: '#',
  },
  {
    id: 'TPG-COBANO-002',
    name: 'Cóbano Preserve',
    category: 'Project',
    region: 'Costa Rica',
    counterparty: 'Cóbano Preserve Development Group',
    value: '$1.5B+',
    stage: 'Pre-Development / Capital Stack',
    status: 'Active',
    priority: 'High',
    materialContracts: ['ESA', "Owner's Rep", 'Draw Schedule', 'ESG Package'],
    dates: { initiated: '2026-04-10', lastUpdate: '2026-04-24', targetClose: 'Q4 2026' },
    linkedVault: '#', linkedPilot: '/pilot/cobano-preserve',
  },
  {
    id: 'TPG-ANTIGUA-003',
    name: 'Antigua Master Plan / ABSEZ',
    category: 'Enterprise',
    region: 'Antigua & Barbuda',
    counterparty: 'ABSEZ / Development Sponsor',
    value: '$200M+',
    stage: 'SEZ Capital Readiness',
    status: 'Active',
    priority: 'High',
    materialContracts: ['ESA', 'Pilot MOU', 'SEZ Authority Docs', 'Capital Brief'],
    dates: { initiated: '2026-04-12', lastUpdate: '2026-04-24', targetClose: 'Q3 2026' },
    linkedVault: '#', linkedPilot: '/pilot/antigua-master-plan',
  },
  {
    id: 'TPG-HOKKAIDO-004',
    name: 'Hokkaido Resort / Vegas North',
    category: 'Project',
    region: 'Japan',
    counterparty: 'Yida International Company, Ltd.',
    value: '$1.04B',
    stage: 'ESA / Feasibility Review',
    status: 'Under Review',
    priority: 'Medium',
    materialContracts: ['ESA', 'Cover Letter', '5-in-1 Model', 'Capital Readiness Memo'],
    dates: { initiated: '2026-04-20', lastUpdate: '2026-04-25', targetClose: 'Q1 2027' },
    linkedVault: '#', linkedPilot: '/pilot/hokkaido-resort',
  },
  {
    id: 'TPG-HTES-005',
    name: 'HTES U.S. / EU / Hong Kong',
    category: 'Enterprise',
    region: 'U.S. / Europe / Hong Kong',
    counterparty: 'HTES Operating Entities',
    value: '$100M Raise',
    stage: 'Investor Deck / Term Sheet',
    status: 'Active',
    priority: 'High',
    materialContracts: ['Investor Memo', 'Term Sheet', 'Operating Model', 'Raise Deck'],
    dates: { initiated: '2026-04-23', lastUpdate: '2026-04-24', targetClose: 'Q3 2026' },
    linkedVault: '#', linkedPilot: '#',
  },
]

const statusConfig = {
  Active:        [CheckCircle2, 'text-emerald-300', 'bg-emerald-400/10'],
  'Under Review':[Clock3,       'text-yellow-300',  'bg-yellow-400/10'],
  Delayed:       [AlertTriangle,'text-red-300',      'bg-red-400/10'],
}

export default function DealPipeline() {
  const [selected, setSelected] = useState(deals[0])
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const navigate = useNavigate()

  const filtered = useMemo(() => deals.filter(d => {
    const q = query.toLowerCase()
    return (d.name.toLowerCase().includes(q) || d.region.toLowerCase().includes(q) || d.counterparty.toLowerCase().includes(q))
      && (category === 'All' || d.category === category)
  }), [query, category])

  const stats = [['Total Pipeline','$6.9B+'],['Active Deals','21'],['High Priority','9'],['Material Updates','14']]

  return (
    <main className="min-h-screen bg-[#020712] text-white">
      <div className="grid min-h-screen" style={{ gridTemplateColumns: '280px 1fr' }}>
        <Sidebar />

        <section className="px-8 py-7">
          <header className="mb-6 flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight">TPG Deal Pipeline Dashboard</h1>
              <p className="mt-2 text-xl text-[#7DB4FF]">Enterprise, Pilot, Project & Engagement Tracking</p>
              <p className="mt-2 max-w-3xl text-sm text-white/60 leading-6">
                Restricted executive dashboard for board, investor, bank, and government-ready deal visibility across material contracts, dates, status, capital parameters, and vault updates.
              </p>
            </div>
            <button className="flex items-center gap-3 rounded-lg border border-white/20 bg-black/25 px-5 py-3 text-sm text-[#7DB4FF]">
              <Lock size={16} /> Restricted Access
            </button>
          </header>

          {/* STATS */}
          <div className="mb-6 grid gap-4" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
            {stats.map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-black/35 p-5">
                <p className="text-xs uppercase tracking-wide text-white/45">{label}</p>
                <p className="mt-2 text-3xl font-light">{value}</p>
              </div>
            ))}
          </div>

          {/* CONTROLS */}
          <div className="mb-5 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex flex-1 max-w-md items-center gap-3 rounded-lg border border-white/10 bg-black/35 px-4 py-3">
              <Search size={16} className="text-white/40" />
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search deals, regions, counterparties..." className="w-full bg-transparent text-sm outline-none placeholder:text-white/30" />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={16} className="text-white/40" />
              {['All','Enterprise','Pilot','Project','Engagement'].map(c => (
                <button key={c} onClick={() => setCategory(c)}
                  className={`rounded-full border px-4 py-1.5 text-sm ${category === c ? 'border-[#4A90FF] bg-[#4A90FF]/10 text-[#7DB4FF]' : 'border-white/10 text-white/50'}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: '1fr 400px' }}>
            {/* TABLE */}
            <section className="rounded-xl border border-white/10 bg-black/30 overflow-hidden">
              <div className="border-b border-white/10 px-5 py-4">
                <h2 className="text-base font-semibold text-[#7DB4FF]">Active Deal Pipeline</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="text-xs uppercase tracking-wide text-white/40">
                    <tr>{['Deal','Category','Region','Value','Stage','Status','Updated'].map(h => <th key={h} className="px-5 py-3">{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {filtered.map(deal => {
                      const [Icon, color, bg] = statusConfig[deal.status] || statusConfig.Active
                      return (
                        <tr key={deal.id} onClick={() => setSelected(deal)}
                          className={`cursor-pointer border-t border-white/10 transition hover:bg-white/[0.03] ${selected.id === deal.id ? 'bg-[#4A90FF]/10' : ''}`}>
                          <td className="px-5 py-4">
                            <p className="font-medium">{deal.name}</p>
                            <p className="text-xs text-white/35">{deal.id}</p>
                          </td>
                          <td className="px-5 py-4 text-[#7DB4FF]">{deal.category}</td>
                          <td className="px-5 py-4 text-white/60">{deal.region}</td>
                          <td className="px-5 py-4">{deal.value}</td>
                          <td className="px-5 py-4 text-white/60">{deal.stage}</td>
                          <td className="px-5 py-4">
                            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs ${color} ${bg}`}>
                              <Icon size={12} />{deal.status}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-white/40 text-xs">{deal.dates.lastUpdate}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            {/* DETAIL */}
            <aside className="rounded-xl border border-white/10 bg-black/35 p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#7DB4FF]">Selected Deal</p>
                  <h3 className="mt-1 text-xl font-semibold">{selected.name}</h3>
                  <p className="text-sm text-white/50 mt-0.5">{selected.counterparty}</p>
                </div>
                <ChevronRight size={18} className="text-[#7DB4FF]" />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {[['Category',selected.category],['Region',selected.region],['Value',selected.value],['Priority',selected.priority],['Stage',selected.stage],['Status',selected.status]].map(([l,v]) => (
                  <div key={l} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                    <p className="text-xs uppercase tracking-wide text-white/35">{l}</p>
                    <p className="mt-1 text-sm">{v}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 mb-4">
                <h4 className="mb-3 flex items-center gap-2 text-sm text-[#7DB4FF]"><FileText size={16} />Material Contracts</h4>
                <div className="space-y-2">
                  {selected.materialContracts.map(c => (
                    <div key={c} className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
                      <span className="text-sm">{c}</span>
                      <span className="text-xs text-white/35">Vault</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 mb-5">
                <h4 className="mb-3 flex items-center gap-2 text-sm text-[#7DB4FF]"><CalendarDays size={16} />Critical Dates</h4>
                {[['Initiated',selected.dates.initiated],['Last Update',selected.dates.lastUpdate],['Target Close',selected.dates.targetClose]].map(([l,v]) => (
                  <div key={l} className="flex justify-between border-b border-white/10 py-2 text-sm">
                    <span className="text-white/45">{l}</span><span>{v}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="rounded-lg border border-[#4A90FF]/40 bg-[#4A90FF]/10 px-4 py-3 text-sm text-[#7DB4FF]">Open Deal Vault</button>
                <button onClick={() => selected.linkedPilot !== '#' && navigate(selected.linkedPilot)}
                  className="rounded-lg border border-white/15 px-4 py-3 text-sm text-white/60 hover:text-white">
                  Open Pilot Site
                </button>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  )
}
