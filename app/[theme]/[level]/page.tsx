import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LEVELS, DOMAINS, THEMES } from '@/lib/utils'
import type { LevelId } from '@/lib/types'

export function generateStaticParams() {
  return THEMES.flatMap(t => LEVELS.map(lv => ({ theme: t.id, level: lv.id })))
}

export default async function LevelPage({
  params,
}: {
  params: Promise<{ theme: string; level: string }>
}) {
  const { theme, level } = await params
  const tm = THEMES.find(t => t.id === theme)
  const lv = LEVELS.find(l => l.id === level)
  if (!tm || !lv) notFound()

  return (
    <main className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-2">
        <Link href={`/${tm.id}`} className="text-gray-400 hover:text-gray-600 text-sm">‹</Link>
        <span className="text-xs text-gray-400 tracking-widest uppercase">THEME {tm.number}</span>
        <span className="text-gray-200">›</span>
        <span className={`text-xs font-bold tracking-widest uppercase ${lv.color}`}>{lv.level}</span>
        <span className="font-semibold text-gray-800 text-sm">{lv.label}</span>
      </header>

      <div className={`${lv.bg} text-white px-6 py-8`}>
        <div className="max-w-lg mx-auto">
          <p className="text-white/70 text-xs tracking-widest uppercase mb-1">{lv.level} · {lv.labelEn}</p>
          <h1 className="text-2xl font-bold">{lv.label}</h1>
          <p className="text-white/80 text-sm mt-2">{lv.description}</p>
          <div className="inline-block mt-3 bg-white/20 text-white text-xs px-3 py-1 rounded-full">
            {lv.rule}
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 py-6 max-w-lg mx-auto w-full">
        <p className="text-xs text-gray-400 mb-4 font-medium tracking-wide">領域を選んでください</p>
        <div className="flex flex-col gap-3">
          {DOMAINS.map((dm, i) => (
            <Link
              key={dm.id}
              href={`/${tm.id}/${lv.id}/${dm.id}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 flex items-center gap-4 hover:shadow-md transition-all active:scale-[0.98]"
            >
              <div className={`w-12 h-12 rounded-xl ${lv.lightBg} flex items-center justify-center text-2xl flex-shrink-0`}>
                {dm.icon}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">{dm.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {i + 1}-{i + 1}　{lv.label}
                </div>
              </div>
              <span className="text-gray-300 text-xl">›</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
