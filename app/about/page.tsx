import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col pb-16">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-2 sticky top-0 z-10">
        <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm">‹</Link>
        <span className="text-sm font-semibold text-gray-700">この教材について</span>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white px-6 py-10">
        <div className="max-w-lg mx-auto">
          <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-3">
            EEY Digital English Textbook
          </p>
          <h1 className="text-2xl font-bold mb-3">はじめに</h1>
          <p className="text-white/70 text-sm leading-relaxed">
            この教材を作った理由と、設計の考え方について。
          </p>
        </div>
      </div>

      <div className="flex-1 px-4 py-8 max-w-lg mx-auto w-full space-y-6">

        {/* Section 1 */}
        <Section title="授業設計を支援する">
          <p>
            教育現場では、教師に求められる役割が増え続けている。その一方で、授業づくりは依然として教師個人の経験や感覚に依存しやすく、活動設計の負担も大きい。
          </p>
          <p className="font-semibold text-gray-800">
            本教材は、授業を統一するためのものではない。
          </p>
          <p>
            目的は、教師が毎回ゼロから活動を設計しなくても、技能ごとに整理されたアクティビティの中から選択しながら授業を組み立てられる状態を作ることにある。
          </p>
          <p>
            教師は、「何をやるか」を土台として持った上で、生徒の実態や授業方針に応じて自由に調整できる。
          </p>
          <p>
            また、本教材では各技能・各段階ごとに複数のアクティビティを配置している。活動を増やすこと自体が目的ではなく、
          </p>
          <p className="text-center font-semibold text-gray-800 py-1">
            「どの技能を、何のために扱うのか」
          </p>
          <p>
            を明確にした上で、教師が選択できる状態を重視している。
          </p>
        </Section>

        {/* Section 2 */}
        <Section title="なぜ今、こういう教材が必要か">
          <p>
            近年、教員養成や採用制度は変化し続けている。教員採用試験の早期化や受験機会の拡大などにより、教師になるまでの経路は今後さらに多様化していくと考えられる。
          </p>
          <p>
            その一方で、「授業をどう組み立てるか」を体系的に学ぶ機会は十分とは言えない。
          </p>
          <p>結果として、</p>
          <ul className="space-y-1 pl-1">
            <li>・活動が目的化する</li>
            <li>・複数技能を同時に扱いすぎる</li>
            <li>・何の力を伸ばしているのか曖昧になる</li>
          </ul>
          <p>といった状況も起こりやすい。</p>
          <p>だからこそ本教材では、</p>
          <p className="text-center font-semibold text-gray-800 py-1">
            「今、どの技能を鍛えているのか」
          </p>
          <p>
            を明確化し、技能ごとに活動を整理することを重視している。
          </p>
        </Section>

        {/* Section 3 */}
        <Section title="1アクティビティ = 1技能">
          <p>
            本教材では、各アクティビティで扱う技能を意図的に分離している。
          </p>
          <p>
            例えば「書く活動」であれば、活動の中心はあくまで「書く能力」を伸ばすことに置く。
          </p>
          <p>
            聞く・話すなど複数技能を同時に扱う活動は、実際のコミュニケーションに近い一方で、
          </p>
          <ul className="space-y-1 pl-1">
            <li>・活動の目的が曖昧になる</li>
            <li>・生徒が何を意識すべきか分かりにくくなる</li>
            <li>・不必要に難易度が上がる</li>
          </ul>
          <p>という問題も生じやすい。</p>
          <p>
            そのため本教材では、まず技能を個別に切り分け、それぞれをピンポイントで鍛える構造を採用している。
          </p>
          <p>
            ただし、実際の言語運用は複数技能を横断して行われる。
          </p>
          <p>
            そこでユニット末には、各技能を統合的に扱う最終課題を配置している。
          </p>
          <p>本教材は、</p>
          <p className="text-center text-gray-700 py-0.5">「最初からすべてを混ぜる」のではなく、</p>
          <p className="text-center font-semibold text-gray-800 py-0.5">「分離して鍛えた後に統合する」</p>
          <p>という構造を基本設計としている。</p>
        </Section>

        {/* Section 4 */}
        <Section title="基礎・応用・発展は「難易度」ではない">
          <p>本教材における「基礎・応用・発展」は、単純な難易度分けではない。</p>
          <div className="space-y-4">
            <div className="bg-white rounded-xl px-4 py-4 shadow-sm border border-gray-100 space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-gray-900 text-sm">基礎</span>
                <span className="text-xs text-gray-400">Foundation</span>
              </div>
              <p>後の活動で必要になる知識・概念・言語材料を扱う段階。</p>
              <p>ここで重視しているのは、「簡単かどうか」ではなく、「後で使うために必要かどうか」である。</p>
              <p>そのため、基礎段階でも高度な知識を扱うことがある。</p>
              <p>また、技能の偏りを防ぐため、基礎段階は全員必修としている。</p>
            </div>
            <div className="bg-white rounded-xl px-4 py-4 shadow-sm border border-gray-100 space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-gray-900 text-sm">応用</span>
                <span className="text-xs text-gray-400">Application</span>
              </div>
              <p>基礎で得た知識を、実際の活動の中で運用する段階。</p>
              <p>知識を「知っている」状態から、「使える」状態へ変換することを目的としている。</p>
              <p>また、応用段階では、生徒が自分の得意分野や興味に応じて活動を選択できるようにしている。</p>
            </div>
            <div className="bg-white rounded-xl px-4 py-4 shadow-sm border border-gray-100 space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-gray-900 text-sm">発展</span>
                <span className="text-xs text-gray-400">Extension</span>
              </div>
              <p>本文内容の外側へ視野を広げる段階。</p>
              <p>単なる高難度問題ではなく、基礎・応用で得た能力を別領域や実社会へ接続することを目的としている。</p>
              <p>また、「難しくすること」ではなく、「視野を広げること」を重視している。</p>
            </div>
          </div>
        </Section>

        {/* Section 5 */}
        <Section title="つながりを設計する">
          <p>本教材では、各活動を単発で終わらせないことを重視している。</p>
          <p>各技能は独立して存在するのではなく、最終課題に向けて横断的につながるよう設計している。</p>
          <p>途中では技能を分離し、それぞれを個別に鍛える。</p>
          <p>そして最後に、それらを統合して運用する。</p>
          <p>
            例えば、読む活動で得た知識が聞く活動の理解につながり、書く活動で整理した内容が最終課題での表現につながる。
          </p>
          <p>本教材は、</p>
          <p className="text-center text-gray-700 py-0.5">「最初からすべてを同時に扱う」のではなく、</p>
          <p className="text-center font-semibold text-gray-800 py-0.5">「必要な技能を整理して鍛えた後に統合する」</p>
          <p>という流れを基本構造としている。</p>
        </Section>

        {/* Section 6 */}
        <Section title="この教材の構造">
          {/* 全体数式 */}
          <div className="bg-slate-800 text-white rounded-xl px-4 py-4 text-center">
            <p className="text-xs text-white/50 tracking-widest uppercase mb-1">Total</p>
            <p className="text-lg font-bold">15テーマ × 5領域 × 3段階</p>
            <p className="text-3xl font-bold mt-1">= 225セクション</p>
          </div>

          {/* 5領域 */}
          <div>
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2">5領域</p>
            <div className="grid grid-cols-5 gap-1.5 text-center">
              {['読む', '聞く', '書く', '話す', '発表／対話'].map(d => (
                <div key={d} className="bg-white rounded-lg py-2 px-1 shadow-sm border border-gray-100">
                  <p className="text-xs font-semibold text-gray-700 leading-snug">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3段階テーブル */}
          <div>
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2">3段階・履修ルール</p>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left px-4 py-2 font-semibold text-gray-600">段階</th>
                    <th className="text-left px-4 py-2 font-semibold text-gray-600">履修</th>
                    <th className="text-left px-4 py-2 font-semibold text-gray-600">条件</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-800">基礎</td>
                    <td className="px-4 py-3"><span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-full">全員必修</span></td>
                    <td className="px-4 py-3 text-gray-500 text-xs">全5領域・全活動</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-800">応用</td>
                    <td className="px-4 py-3"><span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-0.5 rounded-full">選択（3領域）</span></td>
                    <td className="px-4 py-3 text-gray-500 text-xs">得意分野・興味に応じて選択</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-800">発展</td>
                    <td className="px-4 py-3"><span className="bg-amber-50 text-amber-600 text-xs font-bold px-2 py-0.5 rounded-full">選択（2領域）</span></td>
                    <td className="px-4 py-3 text-gray-500 text-xs">視野を広げる活動</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 週単位 */}
          <p className="text-center text-gray-500 text-xs bg-gray-50 rounded-lg py-3">
            1テーマ ≈ 2週間 ／ 高校1年分の授業進行に対応
          </p>

          {/* 評価観点 */}
          <div>
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-2">評価観点バッジ</p>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm divide-y divide-gray-50">
              {[
                { badge: '①', label: '知識・技能', note: '語彙・文法・表現の正確な習得' },
                { badge: '②', label: '思考・判断・表現', note: '情報の分析・整理・自分の考えの表現' },
                { badge: '③', label: '学びに向かう力・人間性', note: '協働・主体性・粘り強く取り組む態度' },
              ].map(({ badge, label, note }) => (
                <div key={badge} className="flex items-start gap-3 px-4 py-3">
                  <span className="text-sm font-bold text-gray-700 flex-shrink-0 w-5">{badge}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <p className="text-xs text-gray-400 text-center pt-4">
          EEY — English Education of Yuho
        </p>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="font-bold text-gray-900 text-base border-l-4 border-slate-700 pl-3">{title}</h2>
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        {children}
      </div>
    </div>
  )
}
