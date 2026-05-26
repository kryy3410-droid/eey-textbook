import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LEVELS, DOMAINS, THEMES } from '@/lib/utils'

export function generateStaticParams() {
  return THEMES.map(t => ({ theme: t.id }))
}

export default async function ThemePage({ params }: { params: Promise<{ theme: string }> }) {
  const { theme } = await params
  const tm = THEMES.find(t => t.id === theme)
  if (!tm) notFound()

  return (
    <main className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-2">
        <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm">‹</Link>
        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">THEME {tm.number}</span>
      </header>

      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white px-6 pt-10 pb-16">
        <div className="max-w-lg mx-auto">
          <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wider">
            THEME {tm.number}
          </span>
          <h1 className="text-3xl font-bold mb-1">{tm.label}</h1>
          <p className="text-white/60 text-sm mb-5">{tm.labelEn}</p>
          <p className="text-white/80 text-sm leading-relaxed">{tm.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tm.keywords.map(kw => (
              <span key={kw} className="bg-white/10 text-white/70 text-xs px-2 py-1 rounded-md">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 -mt-5 max-w-lg mx-auto w-full pb-12">
        <div className="flex flex-col gap-4">
          {LEVELS.map((lv) => (
            <Link
              key={lv.id}
              href={`/${tm.id}/${lv.id}`}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all active:scale-[0.98]"
            >
              <div className={`h-1.5 ${lv.bg}`} />
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold tracking-widest uppercase ${lv.color}`}>
                      {lv.level}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${lv.badge}`}>
                      {lv.rule}
                    </span>
                  </div>
                  <span className="text-gray-300 text-xl">›</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {lv.label}
                  <span className="text-sm font-normal text-gray-400 ml-2">{lv.labelEn}</span>
                </h2>
                <p className="text-sm text-gray-500 mt-1">{lv.description}</p>
                <div className="mt-4 flex gap-2">
                  {DOMAINS.map((dm) => (
                    <span key={dm.id} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${lv.lightBg}`}>
                      {dm.icon}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">宮田優歩 — 2026.05.27</p>
      </div>
    </main>
  )
}
