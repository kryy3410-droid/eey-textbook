import type { LevelId, DomainId, LevelMeta, DomainMeta } from './types'

export interface ThemeMeta {
  id: string
  number: string
  label: string
  labelEn: string
  description: string
  keywords: string[]
  available: boolean
}

export const LEVELS: LevelMeta[] = [
  {
    id: 'kiso',
    label: '基礎',
    labelEn: 'Foundation',
    level: 'LEVEL 1',
    description: '英単語・文法と本文を理解する',
    rule: '全員必修',
    color: 'text-blue-600',
    bg: 'bg-blue-600',
    border: 'border-blue-600',
    lightBg: 'bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'oyo',
    label: '応用',
    labelEn: 'Applied',
    level: 'LEVEL 2',
    description: '本文の内容を深く理解し活用する',
    rule: '選択（3領域）',
    color: 'text-amber-600',
    bg: 'bg-amber-500',
    border: 'border-amber-500',
    lightBg: 'bg-amber-50',
    badge: 'bg-amber-100 text-amber-700',
  },
  {
    id: 'hatten',
    label: '発展',
    labelEn: 'Advanced',
    level: 'LEVEL 3',
    description: 'より高度な英語運用力を鍛える',
    rule: '選択（2領域）',
    color: 'text-rose-600',
    bg: 'bg-rose-600',
    border: 'border-rose-600',
    lightBg: 'bg-rose-50',
    badge: 'bg-rose-100 text-rose-700',
  },
]

export const DOMAINS: DomainMeta[] = [
  { id: 'yomu',   label: '読む',            icon: '📖', color: 'text-violet-600' },
  { id: 'kiku',   label: '聞く',            icon: '🎧', color: 'text-teal-600'   },
  { id: 'kaku',   label: '書く',            icon: '✏️', color: 'text-orange-600' },
  { id: 'speech', label: '話す（スピーチ）', icon: '🎤', color: 'text-pink-600'   },
  { id: 'kaiwa',  label: '話す（会話）',     icon: '💬', color: 'text-sky-600'    },
]

export const DOMAIN_ORDER: DomainId[] = ['yomu', 'kiku', 'kaku', 'speech', 'kaiwa']
export const LEVEL_ORDER: LevelId[] = ['kiso', 'oyo', 'hatten']

export const THEMES: ThemeMeta[] = [
  {
    id: 'sns',
    number: '01',
    label: 'SNSの使い方',
    labelEn: 'Social Media Usage',
    description: 'SNSが私たちの生活・コミュニケーション・社会に与える影響について英語で学ぶ。',
    keywords: ['social media', 'platform', 'connect', 'algorithm', 'privacy'],
    available: true,
  },
  {
    id: 'washoku',
    number: '02',
    label: '世界の日本食',
    labelEn: 'Japanese Cuisine Worldwide',
    description: '日本食が世界にどのように広まったか、その背景と文化的影響を英語で学ぶ。',
    keywords: ['cuisine', 'authentic', 'global', 'tradition', 'culture'],
    available: false,
  },
]

export function getLevel(id: LevelId): LevelMeta {
  return LEVELS.find(l => l.id === id)!
}

export function getDomain(id: DomainId): DomainMeta {
  return DOMAINS.find(d => d.id === id)!
}

export function nextDomain(current: DomainId): DomainId | null {
  const idx = DOMAIN_ORDER.indexOf(current)
  return idx < DOMAIN_ORDER.length - 1 ? DOMAIN_ORDER[idx + 1] : null
}

export function prevDomain(current: DomainId): DomainId | null {
  const idx = DOMAIN_ORDER.indexOf(current)
  return idx > 0 ? DOMAIN_ORDER[idx - 1] : null
}
