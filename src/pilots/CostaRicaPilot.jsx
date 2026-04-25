import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EMERALD = '#6ee7b7'

const tabs = ['dashboard','vault','capital','draws','lockbox','ownersrep','surety','macroLots','esg']

const tabLabels = {
  dashboard:'Executive Dashboard', vault:'Data Vault', capital:'Capital Stack',
  draws:'Draw Schedule', lockbox:'Lockbox', ownersrep:"Owner's Rep",
  surety:'Surety Room', macroLots:'Macro-Lots', esg:'ESG Room',
}

export default function CostaRicaPilot() {
  const [portalOpen, setPortalOpen] = useState(false)
  const [tab, setTab] = useState('dashboard')
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-[#06110c] text-white">
      <header className="flex items-center justify-between border-b border-white/10 px-6 py-5 bg-black/40">
        <div>
          <p className="text-xs uppercase tracking-[0.35em]" style={{ color: EMERALD }}>TPG Limited Pilot</p>
          <h1 className="text-xl font-bold">Cóbano Preserve | Costa Rica</h1>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/')} className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10">← Portfolio</button>
          <button onClick={() => setPortalOpen(true)} className="rounded-full px-5 py-2 font-semibold text-black" style={{ background: EMERALD }}>Restricted Access</button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.35em]" style={{ color: EMERALD }}>ESG Resort Capital Platform</p>
        <h2 className="mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
          A controlled-access execution platform for Costa Rica's next ultra-luxury eco-resort master plan.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          TPG organizes Cóbano Preserve into an institutional capital-ready environment with lender visibility, investor reporting, owner's representation, lockbox controls, draw schedule administration, construction oversight, ESG documentation, and surety-backed risk mitigation.
        </p>
        <div className="mt-8 flex gap-4">
          <button onClick={() => setPortalOpen(true)} className="rounded-full px-7 py-3 font-bold text-black" style={{ background: EMERALD }}>Enter Pilot Backend</button>
          <a href="#overview" className="rounded-full border border-white/20 px-7 py-3 font-bold">View Overview</a>
        </div>
      </section>

      <section id="overview" className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 md:grid-cols-4">
        {[['Property Size','889 Acres'],['Coastline','4.5 km'],['Development Footprint','17%'],['Total Development Cost','$1.5B']].map(([t,v]) => (
          <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-widest text-white/45">{t}</p>
            <p className="mt-3 text-2xl font-bold" style={{ color: EMERALD }}>{v}</p>
          </div>
        ))}
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-3xl font-bold">TPG Control Layer</h3>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {['Capital Procurement',"Owner's Representation",'Lockbox Controls','Draw Schedule','Construction Oversight','Investor Reporting','Surety Bond Packaging','ESG Compliance Room'].map(item => (
              <div key={item} className="rounded-2xl border border-white/10 p-5">
                <p className="font-semibold" style={{ color: EMERALD }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTAL */}
      {portalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black/95 p-6">
          <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-[#07150f]">
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em]" style={{ color: EMERALD }}>Restricted Backend</p>
                <h2 className="text-2xl font-bold">Cóbano Preserve Pilot Portal</h2>
              </div>
              <button onClick={() => setPortalOpen(false)} className="rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white/10">Close</button>
            </div>

            <div className="grid lg:grid-cols-[260px_1fr]">
              <aside className="border-r border-white/10 p-4">
                {tabs.map(t => (
                  <button key={t} onClick={() => setTab(t)}
                    className={`mb-2 w-full rounded-xl px-4 py-3 text-left text-sm ${tab === t ? 'font-bold text-black' : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.08]'}`}
                    style={tab === t ? { background: EMERALD } : {}}>
                    {tabLabels[t]}
                  </button>
                ))}
              </aside>

              <section className="p-6">
                {tab === 'dashboard' && <Panel title="Executive Dashboard" emerald={EMERALD}>
                  <Grid items={[['Project','Cóbano Preserve'],['Location','Punta Piedra Amarilla'],['Master Plan','8 Macro-Lots'],['Phase Horizon','12 Years'],['Phase I','$470MM'],['Pre-Development Ask','$60MM']]} emerald={EMERALD} />
                </Panel>}

                {tab === 'vault' && <Panel title="Data Vault" emerald={EMERALD}>
                  <Grid items={[['Corporate Docs','Restricted'],['Land Trust / Title','Restricted'],['Environmental Studies','Restricted'],['Marina / MOPT Docs','Restricted'],['Hotel Brand Docs','Restricted'],['Financial Models','Restricted'],['Construction Docs','Restricted'],['Investor Materials','Restricted']]} emerald={EMERALD} />
                </Panel>}

                {tab === 'capital' && <Panel title="Capital Procurement Dashboard" emerald={EMERALD}>
                  <PTable headers={['Component','Amount','Status']} rows={[['Pre-Development Capital','$60MM','Structuring'],['Land Development Partnership','$45MM','Target'],['Shareholder Loan','$15MM','Target'],['Phase I Total Investment','$470MM','Future Tranche'],['Total Development Cost','$1.5B','Full Buildout']]} />
                </Panel>}

                {tab === 'draws' && <Panel title="Draw Schedule Tracker" emerald={EMERALD}>
                  <PTable headers={['Draw','Use','Status']} rows={[['Draw 01','Land partner buyout / debt settlement','Pending'],['Draw 02','Soft costs and transaction costs','Pending'],['Draw 03','Infrastructure blueprints / approvals','Pending'],['Draw 04','Marina access route / permits','Pending'],['Draw 05','Construction mobilization','Pending']]} />
                </Panel>}

                {tab === 'lockbox' && <Panel title="Lockbox / Funds-Control Module" emerald={EMERALD}>
                  <ul className="space-y-3 text-white/70">
                    {['Controlled project account','Use-of-proceeds categories','Lender and investor approval workflow','Contractor payment release log','Milestone and variance reporting'].map(i => <li key={i}>• {i}</li>)}
                  </ul>
                </Panel>}

                {tab === 'ownersrep' && <Panel title="Owner's Representation" emerald={EMERALD}>
                  <ul className="space-y-3 text-white/70">
                    {['Sponsor-side construction oversight','Development team coordination','Budget and schedule reporting','Change-order review','Investor and lender reporting'].map(i => <li key={i}>• {i}</li>)}
                  </ul>
                </Panel>}

                {tab === 'surety' && <Panel title="Surety / Guarantee Bond Room" emerald={EMERALD}>
                  <Grid items={[['Performance Bond','Packaging'],['Completion Bond','Packaging'],['Advance Payment Guarantee','Under Review'],['Payment Bond','Optional'],['Maintenance Bond','Optional'],['Revolver Risk Mitigation','Structuring']]} emerald={EMERALD} />
                </Panel>}

                {tab === 'macroLots' && <Panel title="Macro-Lot Revenue Dashboard" emerald={EMERALD}>
                  <PTable headers={['Zone / Asset','Program','Revenue Driver']} rows={[['Six Senses','78 keys + 50 residences','Hotel + branded residence sales'],['Tambor Marina','300 slips','Marina fees + retail + yacht tourism'],['Garden Condos','100 units','Pre-sales + condo sales'],['Estate Homes','300 homes','Residential sales'],['Additional Hotels','Two luxury hotel sites','Hospitality + branded residences']]} />
                </Panel>}

                {tab === 'esg' && <Panel title="ESG / Sustainability Room" emerald={EMERALD}>
                  <ul className="space-y-3 text-white/70">
                    {['Environmental impact study tracking','Forest cover study archive','LEED / sustainability documentation','Conservation footprint reporting','Blue Zone / wellness positioning materials'].map(i => <li key={i}>• {i}</li>)}
                  </ul>
                </Panel>}
              </section>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

function Panel({ title, children, emerald }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em]" style={{ color: emerald }}>Backend Module</p>
      <h3 className="mt-2 mb-6 text-3xl font-bold">{title}</h3>
      {children}
    </div>
  )
}

function Grid({ items, emerald }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map(([k,v]) => (
        <div key={k} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-xs uppercase tracking-widest text-white/45">{k}</p>
          <p className="mt-2 text-xl font-bold" style={{ color: emerald }}>{v}</p>
        </div>
      ))}
    </div>
  )
}

function PTable({ headers, rows }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full text-left text-sm">
        <thead className="bg-white/[0.06] text-white/60">
          <tr>{headers.map(h => <th key={h} className="px-4 py-3">{h}</th>)}</tr>
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
