'use client'
import { useState } from 'react'
import type { VocabItem } from '@/lib/types'

export default function VocabList({ vocab }: { vocab: VocabItem[] }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set())

  const toggle = (i: number) =>
    setRevealed(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })

  const allRevealed = revealed.size === vocab.length

  return (
    <div className="space-y-2">
      {vocab.map((v, i) => (
        <button
          key={v.word}
          onClick={() => toggle(i)}
          className="w-full flex items-baseline gap-2 flex-wrap text-left group"
        >
          <span className="font-semibold text-gray-900 text-sm">{v.word}</span>
          <span className="ipa text-xs text-gray-400">{v.ipa}</span>
          <span className="text-gray-200 text-xs">──</span>
          <span
            className={`text-sm rounded px-1 transition-all duration-150 ${
              revealed.has(i)
                ? 'text-gray-600 bg-transparent'
                : 'text-transparent bg-gray-100 group-hover:bg-gray-200 select-none'
            }`}
          >
            {v.meaning}
          </span>
        </button>
      ))}
      <div className="pt-1">
        <button
          onClick={() =>
            setRevealed(
              allRevealed
                ? new Set()
                : new Set(Array.from({ length: vocab.length }, (_, i) => i))
            )
          }
          className="text-xs text-gray-400 hover:text-gray-600 underline underline-offset-2 transition-colors"
        >
          {allRevealed ? 'Hide all' : 'Show all'}
        </button>
      </div>
    </div>
  )
}
