import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LEVELS, DOMAINS, DOMAIN_ORDER, THEMES } from '@/lib/utils'
import { getThemeContent } from '@/lib/content'
import type { LevelId, DomainId } from '@/lib/types'
import ActivitySelector from '@/components/ActivitySelector'
import VocabList from '@/components/VocabList'

export function generateStaticParams() {
  return THEMES.flatMap(t =>
    LEVELS.flatMap(lv => DOMAINS.map(dm => ({ theme: t.id, level: lv.id, domain: dm.id })))
  )
}

export default async function UnitPage({
  params,
}: {
  params: Promise<{ theme: string; level: string; domain: string }>
}) {
  const { theme, level, domain } = await params
  const tm = THEMES.find(t => t.id === theme)
  const lv = LEVELS.find(l => l.id === level)
  const dm = DOMAINS.find(d => d.id === domain)
  if (!tm || !lv || !dm) notFound()

  const themeContent = getThemeContent(theme)
  const unit = themeContent?.[level as LevelId]?.[domain as DomainId]
  if (!unit) notFound()

  const domainIdx = DOMAIN_ORDER.indexOf(domain as DomainId)
  const prev = domainIdx > 0 ? DOMAINS[domainIdx - 1] : null
  const next = domainIdx < DOMAINS.length - 1 ? DOMAINS[domainIdx + 1] : null

  return (
    <main className="min-h-screen flex flex-col pb-24">
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-2 sticky top-0 z-10">
        <Link href={`/${tm.id}/${lv.id}`} className="text-gray-400 hover:text-gray-600 text-sm">‹</Link>
        <span className={`text-xs font-bold tracking-widest uppercase ${lv.color}`}>{lv.label}</span>
        <span className="text-gray-200">›</span>
        <span className="text-sm font-semibold text-gray-700">{dm.icon} {dm.label}</span>
      </header>

      <div className={`${lv.bg} text-white px-6 py-5`}>
        <div className="max-w-lg mx-auto">
          <p className="text-white/60 text-xs tracking-widest uppercase">{lv.level} · {lv.labelEn}</p>
          <h1 className="text-xl font-bold mt-1">{dm.icon} {dm.label}</h1>
          <p className="text-white/80 text-sm mt-1">
            <span className="opacity-60">目標：</span>{unit.goal}
          </p>
        </div>
      </div>

      <div className="flex-1 px-4 py-6 max-w-lg mx-auto w-full space-y-4">

        {unit.text && (
          <Section title="Reading" icon="📄">
            <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">{unit.text}</p>
          </Section>
        )}

        {unit.audioScript && (
          <Section title="Audio Script" icon="🎧">
            <p className="text-sm leading-relaxed text-gray-700">{unit.audioScript}</p>
          </Section>
        )}

        {unit.vocab && unit.vocab.length > 0 && (
          <Section title="Key Vocabulary" icon="📝">
            <VocabList vocab={unit.vocab} />
          </Section>
        )}

        {unit.grammar && unit.grammar.length > 0 && (
          <Section title="Grammar Point" icon="📐">
            {unit.grammar.map((g, i) => (
              <div key={i} className="space-y-1">
                <p className="font-semibold text-sm text-gray-800">{g.pattern}</p>
                {g.notes.map((n, j) => (
                  <p key={j} className="text-sm text-gray-600 ml-3">・{n}</p>
                ))}
                {g.example && (
                  <p className="text-sm text-gray-500 ml-3 mt-1 italic">{g.example}</p>
                )}
              </div>
            ))}
          </Section>
        )}

        {unit.pronunciationTips && unit.pronunciationTips.length > 0 && (
          <Section title="Pronunciation Tips" icon="🗣️">
            <div className="space-y-3">
              {unit.pronunciationTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className={`text-xs font-bold ${lv.color} mt-0.5 flex-shrink-0`}>{i + 1}</span>
                  <div>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="font-semibold text-sm text-gray-800">{tip.target}</span>
                      {tip.ipa && <span className="ipa text-xs text-gray-400">{tip.ipa}</span>}
                    </div>
                    <p className="text-sm text-gray-600 mt-0.5">{tip.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        <ActivitySelector activities={unit.activities} lv={lv} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3">
        <div className="max-w-lg mx-auto flex justify-between items-center">
          {prev ? (
            <Link
              href={`/${tm.id}/${lv.id}/${prev.id}`}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
              <span>‹</span>
              <span>{prev.icon} {prev.label}</span>
            </Link>
          ) : <div />}

          <div className="flex gap-1.5">
            {DOMAIN_ORDER.map(d => (
              <div
                key={d}
                className={`w-2 h-2 rounded-full transition-colors ${d === domain ? lv.bg : 'bg-gray-200'}`}
              />
            ))}
          </div>

          {next ? (
            <Link
              href={`/${tm.id}/${lv.id}/${next.id}`}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
              <span>{next.icon} {next.label}</span>
              <span>›</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </main>
  )
}

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
        <span>{icon}</span>
        <h2 className="font-semibold text-sm text-gray-700">{title}</h2>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  )
}
