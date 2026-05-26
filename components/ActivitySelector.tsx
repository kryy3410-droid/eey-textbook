'use client'
import { useState } from 'react'
import type { Activity, ActivityType, LevelMeta } from '@/lib/types'
import InteractiveActivity from './InteractiveActivity'

const TYPE_META: Record<ActivityType, { label: string; icon: string; bg: string; text: string }> = {
  practice:  { label: 'Practice',  icon: '📝', bg: 'bg-gray-100',   text: 'text-gray-600'   },
  game:      { label: 'Game',      icon: '🎮', bg: 'bg-violet-100', text: 'text-violet-700' },
  creative:  { label: 'Creative',  icon: '🎨', bg: 'bg-orange-100', text: 'text-orange-700' },
  analysis:  { label: 'Analysis',  icon: '🔍', bg: 'bg-teal-100',   text: 'text-teal-700'   },
  authentic: { label: 'Authentic', icon: '🌍', bg: 'bg-sky-100',    text: 'text-sky-700'    },
}

interface Props {
  activities: Activity[]
  lv: LevelMeta
}

export default function ActivitySelector({ activities, lv }: Props) {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-gray-700">Choose an Activity</h2>
        <span className="text-xs text-gray-400">{activities.length} activities</span>
      </div>

      {/* カード一覧 */}
      <div className="space-y-2">
        {activities.map((act, i) => {
          const meta = TYPE_META[act.type]
          const isOpen = selected === i

          return (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden border-2 transition-all ${
                isOpen ? lv.border : 'border-gray-100'
              }`}
            >
              {/* タイトル行（常時表示） */}
              <button
                onClick={() => setSelected(isOpen ? null : i)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  isOpen ? `${lv.bg} text-white` : 'bg-white hover:bg-gray-50'
                }`}
              >
                {/* タイプバッジ */}
                <span
                  className={`flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                    isOpen
                      ? 'bg-white/20 text-white'
                      : `${meta.bg} ${meta.text}`
                  }`}
                >
                  <span>{meta.icon}</span>
                  <span>{meta.label}</span>
                </span>

                {/* タイトル */}
                <span className={`flex-1 font-semibold text-sm ${isOpen ? 'text-white' : 'text-gray-800'}`}>
                  {act.title}
                </span>

                {/* 開閉矢印 */}
                <span className={`text-sm flex-shrink-0 transition-transform ${isOpen ? 'rotate-180 text-white/70' : 'text-gray-300'}`}>
                  ▾
                </span>
              </button>

              {/* 展開コンテンツ */}
              {isOpen && (
                <InteractiveActivity activity={act} lv={lv} embedded />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
