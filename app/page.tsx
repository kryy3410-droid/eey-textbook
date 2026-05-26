import Link from 'next/link'
import { THEMES } from '@/lib/utils'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <p className="text-xs text-gray-400 font-medium tracking-widest uppercase">
          EEY Digital English Textbook
        </p>
        <Link href="/about" className="text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors">
          この教材について
        </Link>
      </header>

      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white px-6 py-10">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-1">テーマ一覧</h1>
          <p className="text-white/60 text-sm">学習するテーマを選んでください</p>
        </div>
      </div>

      <div className="flex-1 px-4 -mt-4 max-w-lg mx-auto w-full pb-12 space-y-3">
        {THEMES.map((theme) => (
          theme.available ? (
            <Link
              key={theme.id}
              href={`/${theme.id}`}
              className="block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all active:scale-[0.98]"
            >
              <ThemeCard theme={theme} />
            </Link>
          ) : (
            <div
              key={theme.id}
              className="block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden opacity-50"
            >
              <ThemeCard theme={theme} comingSoon />
            </div>
          )
        ))}

        <p className="text-center text-xs text-gray-400 mt-8">EEY — English Education of Yuho</p>
      </div>
    </main>
  )
}

function ThemeCard({ theme, comingSoon = false }: { theme: (typeof THEMES)[0]; comingSoon?: boolean }) {
  return (
    <div className="p-5">
      <div className="flex items-start justify-between mb-2">
        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
          THEME {theme.number}
        </span>
        {comingSoon && (
          <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full font-medium">
            準備中
          </span>
        )}
      </div>
      <h2 className="text-xl font-bold text-gray-900">
        {theme.label}
        <span className="text-sm font-normal text-gray-400 ml-2">{theme.labelEn}</span>
      </h2>
      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{theme.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {theme.keywords.map(kw => (
          <span key={kw} className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded-md">
            {kw}
          </span>
        ))}
      </div>
    </div>
  )
}
