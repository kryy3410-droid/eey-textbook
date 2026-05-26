'use client'
import { useState } from 'react'
import type { Activity, LevelMeta } from '@/lib/types'

interface Props {
  activity: Activity
  lv: LevelMeta
  embedded?: boolean  // ActivitySelector内に埋め込む場合はヘッダー非表示
}

export default function InteractiveActivity({ activity, lv, embedded = false }: Props) {
  const totalItems =
    (activity.quizItems?.length ?? 0) + (activity.fillItems?.length ?? 0)
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const [mcAnswers, setMCAnswers] = useState<Map<number, number>>(new Map())
  const [showConnection, setShowConnection] = useState(false)
  const [showPoint, setShowPoint] = useState(false)

  const toggle = (i: number) =>
    setRevealed(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })

  const revealAll = () =>
    setRevealed(new Set(Array.from({ length: totalItems }, (_, i) => i)))

  const resetAll = () => setRevealed(new Set())

  const selectMC = (qIdx: number, optIdx: number) =>
    setMCAnswers(prev => {
      if (prev.has(qIdx)) return prev
      return new Map(prev).set(qIdx, optIdx)
    })

  return (
    <div className={`rounded-2xl overflow-hidden border-2 ${lv.border}`}>
      {/* Activity header（embeddedのときはActivitySelectorが表示するので非表示）*/}
      {!embedded && (
        <div className={`${lv.bg} px-5 py-3`}>
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-white/70 text-xs font-medium tracking-wider uppercase">Activity</p>
              <h3 className="text-white font-bold text-base">【{activity.title}】</h3>
            </div>
            {activity.aspects && (
              <div className="flex gap-1 mt-1 flex-shrink-0">
                {activity.aspects.map(a => (
                  <span key={a} className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                    a === 1 ? 'bg-white/20 text-white' :
                    a === 2 ? 'bg-white/20 text-white' :
                    'bg-white/20 text-white'
                  }`}>
                    {a === 1 ? '①' : a === 2 ? '②' : '③'}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className={`${lv.lightBg} px-5 py-4 space-y-4`}>
        <p className="text-sm text-gray-700 leading-relaxed">{activity.description}</p>

        {activity.connection && (
          <div className="bg-white/80 rounded-xl border-l-4 border-blue-200 overflow-hidden">
            <button
              onClick={() => setShowConnection(v => !v)}
              className="w-full flex items-center justify-between px-4 py-2.5 text-left"
            >
              <p className="text-xs font-bold text-blue-300 tracking-widest uppercase">Connection</p>
              <span className={`text-blue-300 text-xs transition-transform duration-200 ${showConnection ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {showConnection && (
              <p className="text-sm text-gray-600 leading-relaxed px-4 pb-3">{activity.connection}</p>
            )}
          </div>
        )}

        {activity.point && (
          <div className="bg-white/80 rounded-xl border-l-4 border-gray-300 overflow-hidden">
            <button
              onClick={() => setShowPoint(v => !v)}
              className="w-full flex items-center justify-between px-4 py-2.5 text-left"
            >
              <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">Point</p>
              <span className={`text-gray-400 text-xs transition-transform duration-200 ${showPoint ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {showPoint && (
              <p className="text-sm text-gray-600 leading-relaxed px-4 pb-3">{activity.point}</p>
            )}
          </div>
        )}

        {/* ── Multiple Choice ── */}
        {activity.mcItems && (
          <div className="space-y-4">
            {activity.mcItems.map((q, i) => {
              const selected = mcAnswers.get(i)
              const isAnswered = selected !== undefined
              return (
                <div key={i} className="bg-white rounded-xl px-4 py-3 shadow-sm space-y-2">
                  <p className="text-sm font-semibold text-gray-800">{i + 1}. {q.question}</p>
                  <div className="space-y-1.5">
                    {q.options.map((opt, j) => {
                      const isCorrect = q.answer === j
                      const isSelected = selected === j
                      const base = 'w-full text-left text-sm px-3 py-2 rounded-lg transition-colors flex items-start gap-2'
                      const color = !isAnswered
                        ? 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        : isCorrect
                          ? 'bg-green-50 text-green-800 font-semibold border border-green-200'
                          : isSelected
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : 'bg-gray-50 text-gray-400'
                      return (
                        <button
                          key={j}
                          onClick={() => selectMC(i, j)}
                          disabled={isAnswered}
                          className={`${base} ${color}`}
                        >
                          <span className="font-mono text-xs flex-shrink-0 mt-0.5 w-4">
                            {String.fromCharCode(65 + j)}.
                          </span>
                          <span>{opt}</span>
                          {isAnswered && isCorrect && <span className="ml-auto flex-shrink-0">✓</span>}
                          {isAnswered && isSelected && !isCorrect && <span className="ml-auto flex-shrink-0">✗</span>}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* ── Quiz items (click to reveal) ── */}
        {activity.quizItems && (
          <div className="space-y-2">
            {activity.quizItems.map((q, i) => (
              <button
                key={i}
                onClick={() => toggle(i)}
                className="w-full flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm text-left hover:bg-gray-50 transition-colors group"
              >
                <span className="text-gray-400 text-sm font-mono flex-shrink-0 mt-0.5">
                  {i + 1}.
                </span>
                <span className="text-sm text-gray-700 flex-1 italic">{q.text}</span>
                <span
                  className={`text-xl flex-shrink-0 transition-all duration-200 ${
                    revealed.has(i) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                >
                  {q.answer ? '⭕' : '❌'}
                </span>
                {!revealed.has(i) && (
                  <span className="text-xs text-gray-300 flex-shrink-0 self-center group-hover:text-gray-400">
                    tap
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* ── Fill-in-the-blank (click to reveal) ── */}
        {activity.fillItems && (
          <div className="space-y-2">
            {activity.fillItems.map((f, i) => {
              const parts = f.text.split('___')
              return (
                <button
                  key={i}
                  onClick={() => toggle(i)}
                  className="w-full flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm text-left hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-gray-400 text-sm font-mono flex-shrink-0 mt-0.5">
                    {i + 1}.
                  </span>
                  <span className="flex-1 space-y-0.5">
                    {f.japanese && (
                      <span className="block text-xs text-gray-400">{f.japanese}</span>
                    )}
                  <span className="text-sm text-gray-700 italic">
                    {parts[0]}
                    <span
                      className={`inline-block min-w-16 px-2 rounded transition-all duration-200 ${
                        revealed.has(i)
                          ? `${lv.badge} font-semibold not-italic`
                          : 'bg-gray-100 text-gray-100'
                      }`}
                    >
                      {revealed.has(i) ? f.answer : '　　　'}
                    </span>
                    {parts[1]}
                  </span>
                  </span>
                  {!revealed.has(i) && (
                    <span className="text-xs text-gray-300 flex-shrink-0 self-center group-hover:text-gray-400">
                      tap
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        )}

        {/* Reveal / Reset toggle */}
        {totalItems > 0 && (
          <div className="flex gap-3 pt-1">
            {revealed.size < totalItems ? (
              <button
                onClick={revealAll}
                className="text-xs text-gray-400 hover:text-gray-600 underline underline-offset-2 transition-colors"
              >
                Show all answers
              </button>
            ) : (
              <button
                onClick={resetAll}
                className="text-xs text-gray-400 hover:text-gray-600 underline underline-offset-2 transition-colors"
              >
                Hide answers
              </button>
            )}
          </div>
        )}

        {/* ── Steps / 手順 ── */}
        {activity.steps && (
          <div className="space-y-1">
            {activity.steps.map((s, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className={`text-xs font-bold ${lv.color} mt-0.5 flex-shrink-0`}>›</span>
                <p className="text-sm text-gray-700">{s}</p>
              </div>
            ))}
          </div>
        )}

        {/* ── 条件 ── */}
        {activity.conditions && (
          <div className="space-y-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Conditions</p>
            {activity.conditions.map((c, i) => (
              <p key={i} className="text-sm text-gray-700 ml-2">・{c}</p>
            ))}
          </div>
        )}

        {/* ── モデル文 ── */}
        {activity.modelText && (
          <div className="bg-white rounded-xl px-4 py-3 shadow-sm space-y-1">
            <p className="text-xs font-semibold text-gray-400 mb-2 tracking-wide uppercase">Example</p>
            {activity.modelText.map((m, i) => (
              <p key={i} className="text-sm text-gray-700">{m}</p>
            ))}
          </div>
        )}

        {/* ── くじ引き単語 ── */}
        {activity.sampleWords && (
          <div className="grid grid-cols-2 gap-2">
            {activity.sampleWords.map(w => (
              <div key={w.word} className="bg-white rounded-xl px-3 py-2 shadow-sm">
                <p className="font-semibold text-sm text-gray-800">{w.word}</p>
                <p className="ipa text-xs text-gray-400">{w.ipa}</p>
                <p className="text-xs text-gray-500 mt-0.5">{w.meaning}</p>
              </div>
            ))}
          </div>
        )}

        {/* ── ルーブリック ── */}
        {activity.rubric && (
          <div className="bg-white rounded-xl px-4 py-3 shadow-sm">
            <p className="text-xs font-semibold text-gray-400 mb-2 tracking-wide uppercase">
              Rubric
            </p>
            <div className="space-y-1">
              {activity.rubric.map((r, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className={`font-bold ${lv.color} flex-shrink-0`}>{r.label}</span>
                  {r.points > 0 && (
                    <span className="text-gray-400 text-xs w-8 flex-shrink-0">{r.points}点</span>
                  )}
                  <span className="text-gray-600 flex-1 min-w-0">{r.note}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── 解答メモ ── */}
        {activity.answerNote && (
          <p className="text-xs text-gray-500 italic border-l-2 border-gray-200 pl-3">
            {activity.answerNote}
          </p>
        )}

      </div>
    </div>
  )
}
