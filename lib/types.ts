export type LevelId = 'kiso' | 'oyo' | 'hatten'
export type DomainId = 'yomu' | 'kiku' | 'kaku' | 'speech' | 'kaiwa'
export type ActivityType = 'practice' | 'game' | 'creative' | 'analysis' | 'authentic'

export interface VocabItem {
  word: string
  ipa: string
  meaning: string
}

export interface GrammarItem {
  pattern: string
  notes: string[]
  example?: string
}

export interface QuizItem {
  text: string
  answer: boolean
}

export interface MCItem {
  question: string
  options: string[]
  answer: number   // 0-based index of correct option
}

export interface FillItem {
  japanese: string
  text: string
  answer: string
}

export interface PronunciationTip {
  target: string
  ipa?: string
  note: string
}

export interface Activity {
  type: ActivityType
  title: string
  description: string
  connection?: string
  point?: string
  quizItems?: QuizItem[]
  mcItems?: MCItem[]
  fillItems?: FillItem[]
  steps?: string[]
  conditions?: string[]
  modelText?: string[]
  rubric?: { label: string; points: number; note: string }[]
  teacherNote?: string
  answerNote?: string
  sampleWords?: { word: string; ipa: string; meaning: string }[]
}

export interface Unit {
  goal: string
  text?: string
  audioScript?: string
  vocab?: VocabItem[]
  grammar?: GrammarItem[]
  pronunciationTips?: PronunciationTip[]
  activities: Activity[]   // 複数アクティビティ
}

export interface LevelMeta {
  id: LevelId
  label: string
  labelEn: string
  level: string
  description: string
  rule: string
  color: string
  bg: string
  border: string
  lightBg: string
  badge: string
}

export interface DomainMeta {
  id: DomainId
  label: string
  icon: string
  color: string
}
