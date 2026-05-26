'use client'
import { useState, useEffect } from 'react'

export default function AudioPlayer({ script }: { script: string }) {
  const [playing, setPlaying] = useState(false)
  const [supported, setSupported] = useState(false)

  useEffect(() => {
    setSupported('speechSynthesis' in window)
    return () => { window.speechSynthesis?.cancel() }
  }, [])

  const handleClick = () => {
    if (!supported) return

    if (playing) {
      window.speechSynthesis.cancel()
      setPlaying(false)
      return
    }

    const utterance = new SpeechSynthesisUtterance(script)
    utterance.lang = 'en-US'
    utterance.rate = 0.82
    utterance.pitch = 1.05

    const speak = () => {
      const voices = window.speechSynthesis.getVoices()
      const en = voices.find(v => v.lang === 'en-US') ?? voices.find(v => v.lang.startsWith('en'))
      if (en) utterance.voice = en
      utterance.onend = () => setPlaying(false)
      utterance.onerror = () => setPlaying(false)
      setPlaying(true)
      window.speechSynthesis.speak(utterance)
    }

    if (window.speechSynthesis.getVoices().length > 0) {
      speak()
    } else {
      window.speechSynthesis.addEventListener('voiceschanged', speak, { once: true })
    }
  }

  if (!supported) return null

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
        playing
          ? 'bg-red-50 text-red-600 border-red-200'
          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 shadow-sm'
      }`}
    >
      <span className="text-base">{playing ? '⏸' : '▶'}</span>
      <span>{playing ? 'Stop' : 'Play Audio'}</span>
      {playing && (
        <span className="flex gap-0.5 items-end h-4">
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="w-0.5 bg-red-400 rounded-full animate-pulse"
              style={{ height: `${[60, 100, 70][i]}%`, animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </span>
      )}
    </button>
  )
}
