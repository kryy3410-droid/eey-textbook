import type { LevelId, DomainId, Unit } from './types'

const MAIN_TEXT = `Social media has become an essential part of modern life, with billions of people around the world using different platforms for different purposes. Each platform has its own unique features, strengths, and potential risks.

YouTube is the world's largest video-sharing platform, where creators upload content on almost any topic imaginable — from educational tutorials and cooking lessons to music videos and gaming. Users spend an average of over 40 minutes per day watching videos, and many young people now turn to YouTube as their primary source of learning and entertainment.

Instagram, owned by Meta, is built around photo and short video sharing. Its highly visual format has made it especially popular among younger generations, who use it to express their identity, follow influencers, and discover new trends. However, research suggests that constantly comparing oneself to the "perfect lives" shown on Instagram can negatively affect mental health and self-esteem.

X, formerly known as Twitter, is a platform centered on short text posts. It serves as a powerful tool for real-time news, public debate, and social movements. Politicians, journalists, and celebrities use X to communicate directly with millions of followers, making it one of the most influential platforms for shaping public opinion.

LINE is the dominant messaging app in Japan, used by over 95 million people. Unlike other social media platforms, LINE focuses primarily on private communication through chat, voice calls, and group messages. For many Japanese people, LINE functions less like a social network and more like an essential daily communication tool.

Facebook, one of the oldest major platforms, connects over three billion users worldwide. While it has lost popularity among teenagers in recent years, it remains widely used by adults and businesses for community building, event planning, and marketing. Facebook groups allow people with shared interests to connect across borders.

TikTok, developed by the Chinese company ByteDance, specializes in short videos ranging from 15 seconds to 10 minutes. Its powerful recommendation algorithm quickly learns each user's preferences and delivers a highly personalized stream of content, which many users find extremely addictive. TikTok has also faced controversy in several countries due to concerns about data privacy and its influence on young users.

Each platform serves a different purpose and attracts a different type of user. Understanding the unique characteristics of each helps us make smarter choices about how we use social media in our daily lives.`

const VOCAB_BASIC = [
  { word: 'essential',      ipa: '/ɪˈsenʃl/',          meaning: '不可欠な・必須の' },
  { word: 'billions',       ipa: '/ˈbɪljənz/',          meaning: '何十億もの' },
  { word: 'platform',       ipa: '/ˈplætfɔːrm/',        meaning: 'サービスやシステムの基盤・場' },
  { word: 'content',        ipa: '/ˈkɒntent/',          meaning: '動画・記事・投稿などのコンテンツ' },
  { word: 'influencer',     ipa: '/ˈɪnfluənsər/',       meaning: 'SNS上で多くのフォロワーを持ち影響を与える人' },
  { word: 'express',        ipa: '/ɪkˈspres/',          meaning: '表現する' },
  { word: 'owned by',       ipa: '/oʊnd baɪ/',          meaning: '〜が所有する・〜に所有されている' },
  { word: 'formerly',       ipa: '/ˈfɔːrmərli/',        meaning: '以前は・かつては' },
  { word: 'dominant',       ipa: '/ˈdɒmɪnənt/',         meaning: '圧倒的な・支配的な' },
  { word: 'specialize',     ipa: '/ˈspeʃəlaɪz/',        meaning: '専門とする・特化する' },
  { word: 'algorithm',      ipa: '/ˈælɡərɪðəm/',        meaning: 'コンピューターがコンテンツを推薦するための仕組み' },
  { word: 'privacy',        ipa: '/ˈpraɪvəsi/',          meaning: '個人情報が守られている状態・プライバシー' },
  { word: 'addictive',      ipa: '/əˈdɪktɪv/',          meaning: 'やめられなくなるほど引きつける・依存させる' },
  { word: 'controversy',    ipa: '/ˈkɒntrəvɜːrsi/',    meaning: '公の議論・論争・物議' },
  { word: 'characteristics',ipa: '/ˌkærɪktəˈrɪstɪks/', meaning: '特徴・特性' },
]

type Content = Record<LevelId, Record<DomainId, Unit>>

export const SNS_CONTENT: Content = {

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // LEVEL 1  基礎
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  kiso: {

    // ── 読む（基礎）──────────────────────────
    yomu: {
      goal: '英単語・文法と本文を理解する',
      text: MAIN_TEXT,
      vocab: VOCAB_BASIC,
      grammar: [
        {
          pattern: '① 現在完了形　"have / has + 過去分詞"',
          notes: [
            '「〜した（結果、今もそうだ）」「〜してきた」「〜したことがある」などを表す。',
            '主語が三人称単数のときは has を使う。',
            '完了（just / already）・継続（for / since）・経験（ever / never）の3用法がある。',
          ],
          example: 'Social media has become an essential part of modern life.（SNSは現代生活に欠かせない一部となった。）　／　TikTok has also faced controversy in several countries.',
        },
        {
          pattern: '② 関係副詞 where　"先行詞（場所）+ where + S + V"',
          notes: [
            '場所を表す先行詞の後に置き、「そこで〜」「〜という場所で」という意味を加える。',
            'where = in / at / on which と言い換えられる。',
          ],
          example: 'YouTube is the world\'s largest video-sharing platform, where creators upload content on almost any topic imaginable.（そこではクリエイターがほぼあらゆるトピックのコンテンツを投稿している。）',
        },
        {
          pattern: '③ 非制限用法の関係代名詞　"～, which ..."',
          notes: [
            '先行詞の後にコンマ + which を置き、補足情報を加える。「そしてそれは〜」という意味。',
            '制限用法（コンマなし）と異なり、先行詞全体に情報を付け加える。',
          ],
          example: 'Its algorithm delivers a personalized stream of content, which many users find extremely addictive.（アルゴリズムが個人に合ったコンテンツを届け、それを多くのユーザーがやめられないと感じる。）',
        },
        {
          pattern: '④ 過去分詞による後置修飾　"名詞 + 過去分詞 + ..."',
          notes: [
            '過去分詞（〜された）が名詞の直後に置かれ、その名詞を修飾する。',
            '「〜されている〔名詞〕」という受動の意味になる。',
          ],
          example: 'Instagram, owned by Meta, is built around photo and short video sharing.（Metaが所有するInstagramは、写真・動画共有を中心に構築されている。）　／　TikTok, developed by the Chinese company ByteDance, ...',
        },
        {
          pattern: '⑤ be known as ／ formerly known as',
          notes: [
            'be known as ～ ＝「〜として知られている」。',
            'formerly known as ～ ＝「以前は〜として知られていた（＝〜という名前だった）」。',
            'formerly は副詞で「以前は・かつては」という意味。',
          ],
          example: 'X, formerly known as Twitter, is a platform centered on short text posts.（以前Twitterとして知られていたXは、短いテキスト投稿を中心としたプラットフォームだ。）',
        },
        {
          pattern: '⑥ while（対比・逆接）　"While S + V, S + V"',
          notes: [
            'while は接続詞として「〜である一方で」「〜だけれども」という対比・逆接の意味で使われる。',
            '文頭に while 節を置き、コンマで主節と区切る形が一般的。',
          ],
          example: 'While it has lost popularity among teenagers in recent years, it remains widely used by adults and businesses.（近年10代の間での人気は落ちている一方で、大人やビジネスの間では広く使われ続けている。）',
        },
        {
          pattern: '⑦ unlike ～（対比）',
          notes: [
            'unlike ＝「〜とは違って・〜と異なり」。前置詞として名詞・名詞句の前に置く。',
            '対象との違いを際立たせるときに使う。',
          ],
          example: 'Unlike other social media platforms, LINE focuses primarily on private communication.（他のSNSプラットフォームとは異なり、LINEは主に私的なコミュニケーションに重点を置いている。）',
        },
        {
          pattern: '⑧ allow + O + to do　"allow 人 to do"',
          notes: [
            '「人が〜することを可能にする・許す」という意味。',
            'enable / permit + O + to do もほぼ同じ意味で使われる。',
          ],
          example: 'Facebook groups allow people with shared interests to connect across borders.（Facebookグループは、共通の関心を持つ人々が国境を越えてつながることを可能にする。）',
        },
        {
          pattern: '⑨ range from A to B　"ranging from A to B"',
          notes: [
            'range from A to B ＝「AからBまでの範囲に及ぶ」。',
            'ranging from A to B は現在分詞の後置修飾として直前の名詞を説明する。',
          ],
          example: 'TikTok specializes in short videos ranging from 15 seconds to 10 minutes.（TikTokは15秒から10分までの短い動画を専門としている。）',
        },
        {
          pattern: '⑩ SVOC: find + O + C　"find O + 形容詞"',
          notes: [
            '「OがCであると気づく・感じる」という意味のSVOC構文。',
            'C（補語）には形容詞が置かれ、O の状態を表す。',
          ],
          example: 'Many users find the content extremely addictive.（多くのユーザーはそのコンテンツをやめられないと感じる。）',
        },
        {
          pattern: '⑪ less like A, more like B',
          notes: [
            '「AというよりむしろBに近い」という対比表現。',
            'less like A で「Aとはあまり言えない」、more like B で「むしろBだ」という意味になる。',
          ],
          example: 'LINE functions less like a social network and more like an essential daily communication tool.（LINEはSNSというよりも、日常的なコミュニケーションツールとして機能している。）',
        },
        {
          pattern: '⑫ due to　"due to + 名詞句"',
          notes: [
            'due to ＝「〜が原因で・〜のために」。前置詞として名詞・名詞句の前に置く。',
            'because of とほぼ同じ意味だが、やや書き言葉的・フォーマルな表現。',
          ],
          example: 'TikTok has faced controversy due to concerns about data privacy.（TikTokはデータプライバシーへの懸念から物議を醸している。）',
        },
        {
          pattern: '⑬ 動名詞（Ving）を主語として使う',
          notes: [
            '動詞の ing 形（動名詞）が文の主語になる。「〜することは」という意味。',
            '動名詞主語は単数扱い（動詞は三人称単数形）。',
          ],
          example: 'Comparing oneself to the "perfect lives" shown on Instagram can negatively affect mental health.（Instagramに映る「完璧な生活」と自分を比べることは、メンタルヘルスに悪影響を及ぼしうる。）',
        },
        {
          pattern: '⑭ help + O + 動詞原形　"help 人 do"',
          notes: [
            '「人が〜するのを助ける」「〜できるようにする」という意味。',
            'help の後は to を省略して動詞原形を置くのが一般的。',
          ],
          example: 'Understanding the unique characteristics of each helps us make smarter choices.（各プラットフォームの特徴を理解することで、より賢い選択ができるようになる。）',
        },
        {
          pattern: '⑮ 形式主語構文　"It is ～ to ..."',
          notes: [
            'it が仮の主語、to 以下が本当の主語。「…することが〜だ」という意味。',
            'it のままでは何が〜なのかわからないため、to 以下で内容を補足する。',
          ],
          example: 'It is important to understand the unique characteristics of each platform.（各プラットフォームの特徴を理解することが大切だ。）',
        },
      ],
      activities: [
        {
          type: 'practice',
          title: 'True / False Quiz',
          description: '本文の内容に関する文を読んで、正しければ True、間違っていれば False を選ぶ。タップして即座に答えを確認できる。',
          connection: '本文の事実関係を正確に確認するこの力が、応用の Platform Multiple Choice Quiz と Text Structure Analysis の土台になる。まず「書かれていることを正しく読み取る」ところから始まる。',
          point: '「なんとなく正解」じゃなく、本文のどの部分が根拠になったかを確認することが大事。答え合わせのとき、テキストに戻って確認する習慣をつけよう。',
          quizItems: [
            { text: 'YouTube is the world\'s largest video-sharing platform.',                       answer: true  },
            { text: 'Instagram is owned by ByteDance.',                                             answer: false },
            { text: 'X was formerly known as Twitter.',                                             answer: true  },
            { text: 'LINE is mainly used for public social networking.',                            answer: false },
            { text: 'Facebook connects over three billion users worldwide.',                        answer: true  },
            { text: 'TikTok was developed by a Japanese company.',                                  answer: false },
            { text: 'TikTok videos can range from 15 seconds to 10 minutes.',                      answer: true  },
            { text: 'Instagram can negatively affect mental health and self-esteem.',               answer: true  },
            { text: 'LINE is used by over 95 million people in Japan.',                             answer: true  },
            { text: 'All six platforms described in the text serve the same purpose.',              answer: false },
          ],
        },
        {
          type: 'game',
          title: 'Vocabulary Bingo',
          description: '15語の重要単語から9つを選んで3×3のビンゴカードを作り、読み上げられた日本語の意味に対応する英単語をチェックしていくゲーム。\n対象語：essential / billions / platform / content / influencer / express / owned by / formerly / dominant / specialize / algorithm / privacy / addictive / controversy / characteristics',
          connection: 'ここで身につける語彙が、応用の Text Structure Analysis での本文分析・聞く応用の Word Harvest & Retell・書く応用の Summary Writing で実際に使う言葉になる。',
          point: '単語を「丸暗記」しようとしなくていい。ビンゴをねらいながら何度も音と意味を結びつけているうちに、自然と頭に残っていく。',
          teacherNote: '3×3のビンゴカードを事前配布。読み上げ順はランダムに。終わったら本文に戻り実際の使われ方を確認させると定着する。',
        },
        {
          type: 'creative',
          title: 'Mind Map',
          description: '「Social Media」を中心に、6つのプラットフォームを枝として広げ、それぞれに本文から拾ったキーワードを英語で書き込むマップを作る。',
          connection: '本文をマップで整理する力が、応用の Text Structure Analysis で「著者がどう書いたか」を分析するときの骨格になる。また書く応用の Summary Writing での情報整理力にも直結する。',
          point: '上手に描こうとしなくていい。「どのキーワードをどの枝につけるか」を考える時間が、情報を整理する力そのもの。ペアと比べたとき、自分と相手の選択の違いに注目してみよう。',
          teacherNote: 'A4白紙を配布。5分で描かせてペアで比較させると効果的。情報の取捨選択力・要約力の基礎になる。',
        },
      ],
    },

    // ── 聞く（基礎）──────────────────────────
    kiku: {
      goal: '本文の音声を聞いて内容を把握する',
      text: MAIN_TEXT,
      activities: [
        {
          type: 'practice',
          title: 'Platform ID Listening',
          description: '教師が本文の一節を読み上げ、それがどのプラットフォームについての説明かを当てる活動。正解後は該当段落を自分でも音読する。',
          connection: 'プラットフォームの特徴を音声で聞き分けるこの力が、応用の Selective Listening と Dictation の土台になる。「聞いて理解できる」状態が先にある。',
          point: 'プラットフォーム名を「知っている」のと、英語でその特徴を聞き取れるのは別のこと。聴いて「あ、これあのSNSだ」とピンとくる感覚を大切にしよう。',
          steps: [
            'Step 1：教師が段落の一部（2〜3文）を読み上げる',
            'Step 2：YouTube・Instagram・X・LINE・Facebook・TikTok の中から答える',
            'Step 3：正解後、その段落を自分で声に出して確認する',
          ],
          teacherNote: '固有名詞（プラットフォーム名）を省いて読み上げると難易度が上がる。基礎レベルでは名前入りで始めてもOK。本文の音と内容を結びつける活動として最初に行うと効果的。',
        },
        {
          type: 'game',
          title: 'Sentence Ordering',
          description: '本文から抜き出した5文をバラバラに並べたカードを、音声を聞きながら正しい順番に並べ替えるペア活動。',
          connection: '音声と文の流れを結びつける力が、応用の Dictation で「一語単位で正確に書き取る」力に変換される。文の流れを耳で感じる感覚を大切にしよう。',
          point: '音声が流れたとき、全部の単語を聞き取ろうとしなくていい。「この文の前後に来そうな文はどれか」という感覚で、文の流れをつかむことを意識しよう。',
          teacherNote: '文を印刷して切り分けておく（または番号で指示）。音声は2回流す。正解後は音声に合わせて音読させると定着が高まる。',
          steps: [
            'Step 1：バラバラになった5文のカードを受け取る',
            'Step 2：音声を1回聞いて、正しい順番に並べ替える',
            'Step 3：もう1回聞いて確認する',
            'Step 4：正しい順番に声に出して読む',
          ],
        },
      ],
    },

    // ── 書く（基礎）──────────────────────────
    kaku: {
      goal: '英単語・文法を使って文を作る',
      activities: [
        {
          type: 'practice',
          title: 'Fill in the Blank',
          description: '日本語のヒントをもとに、英文の空欄に入る単語を答える穴埋め問題。タップして答えを確認できる。',
          connection: 'ここで正しく使える語彙・表現を積み上げることが、応用の Chain Writing と Summary Writing での素材になる。「文の中で使える」が次のステップのスタートライン。',
          point: '正解した単語は「見て分かった」段階。答え合わせのあと、必ず1回は口に出してみよう。それが「使える語彙」に近づく一歩になる。',
          fillItems: [
            { japanese: 'SNSは現代生活に欠かせない一部となっている。',                           text: 'Social media has become an essential part of modern ___.', answer: 'life'        },
            { japanese: 'クリエイターはほぼあらゆるトピックのコンテンツを投稿する。',             text: 'Creators upload ___ on almost any topic imaginable.',    answer: 'content'     },
            { japanese: 'InstagramはMetaが所有し、写真や動画の共有を中心としている。',          text: 'Instagram, ___ by Meta, is built around photo and short video sharing.', answer: 'owned' },
            { japanese: 'LINEは日本で9500万人以上に使われている。',                            text: 'LINE is used by over 95 ___ people in Japan.',            answer: 'million'     },
            { japanese: 'Facebookは世界中で30億人以上のユーザーをつなげている。',               text: 'Facebook connects over three ___ users worldwide.',       answer: 'billion'     },
            { japanese: 'TikTokのアルゴリズムは各ユーザーの好みをすぐに学習する。',             text: "TikTok's algorithm quickly learns each user's ___.",      answer: 'preferences' },
            { japanese: 'それぞれのプラットフォームは異なる目的を持ち、異なるタイプのユーザーを引きつける。', text: 'Each platform serves a different ___ and attracts a different type of user.', answer: 'purpose' },
          ],
        },
        {
          type: 'practice',
          title: 'Word Order Challenge',
          description: 'バラバラに並んだ単語を正しい語順に並べ替えて英文を作る練習。英語の文構造の感覚を体で覚えることが目的。',
          connection: '語順の感覚を体に入れることが、応用の Chain Writing と Perspective Writing で「自分の文を作る」力の基盤になる。',
          point: '日本語の語順と英語の語順は全然違う。「どの単語が先に来るか」を迷ったとき、それが英語の語順を体に染み込ませているサイン。間違えた文こそ、もう一度並べ直す価値がある。',
          teacherNote: '単語カードに印刷して配布。難易度の異なる3〜5文を用意すると良い。',
          steps: [
            "例①：[ world's / YouTube / platform / the / video-sharing / is / largest ]",
            "→ YouTube is the world's largest video-sharing platform.",
            '例②：[ over / Facebook / billion / users / connects / three / worldwide ]',
            '→ Facebook connects over three billion users worldwide.',
            '例③：[ each / characteristics / unique / of / helps / Understanding / us / the / make / choices / smarter ]',
            '→ Understanding the unique characteristics of each helps us make smarter choices.',
          ],
        },
        {
          type: 'practice',
          title: 'Sentence Reconstruction',
          description: '日本語訳を見て、対応する英文を自力で書き起こす活動。タップして模範解答と比較できる。',
          connection: '文全体を再現する力が、応用の Summary Writing で「自分の言葉でまとめる」ときの土台になる。モデル文を使いこなすところから始まる。',
          point: '完璧に一致しなくてもいい。自分の答えと模範解答を見比べたとき、「なぜ自分はこう書いたか」「模範はなぜこの語順か」を考えることが、文法力の本当の伸びどころ。',
          fillItems: [
            { japanese: 'SNSは現代生活に欠かせない一部となっている。',                              text: '___',  answer: 'Social media has become an essential part of modern life.' },
            { japanese: 'YouTubeは世界最大の動画共有プラットフォームだ。',                          text: '___',  answer: 'YouTube is the world\'s largest video-sharing platform.' },
            { japanese: 'InstagramはMetaが所有し、写真と動画の共有を中心としている。',             text: '___',  answer: 'Instagram, owned by Meta, is built around photo and short video sharing.' },
            { japanese: 'TikTokのアルゴリズムは各ユーザーの好みをすぐに学習する。',               text: '___',  answer: 'TikTok\'s algorithm quickly learns each user\'s preferences.' },
            { japanese: 'LINEは他のプラットフォームよりもメッセージングアプリに近い。',            text: '___',  answer: 'LINE feels less like a social media platform and more like a messaging app.' },
          ],
        },
        {
          type: 'game',
          title: 'Sentence Builder Race',
          description: 'グループで協力して、バラバラの単語カードを並べ替えて英文を完成させよう。',
          connection: 'グループで英文を組み立てるこの活動を通じて語順の感覚を体に入れることが、応用の Chain Writing と Summary Writing での「速く・正確に書く」力につながる。',
          point: '英語が苦手でも「この単語ここじゃない？」と声に出すことがチームへの貢献になる。正確さよりも、参加することと協力することを意識しよう。',
          steps: [
            'Step 1：グループ（3〜4人）に単語カードを配る',
            'Step 2：カードを並べ替えて正しい英文を完成させる',
            'Step 3：完成したら挙手し、クラス全体で答え合わせ',
            'Step 4：余裕があれば、自分たちで別の文を作ってみる',
          ],
        },
      ],
    },

    // ── 話す（スピーチ）（基礎）──────────────
    speech: {
      goal: '英文を正確に音読・暗唱する',
      text: 'Social media helps us connect with friends and share information. However, using it too much can cause stress. It is important to set time limits and take breaks to enjoy social media in a healthy way.',
      pronunciationTips: [
        { target: 'social',    ipa: '/ˈsoʊʃl/',      note: '「ソウシャル」。so- を「ソウ」と伸ばし、-cial は「シャル」。「ソーシャル」と伸ばしすぎない。' },
        { target: 'media',     ipa: '/ˈmiːdiə/',      note: '「ミーディア」。最初の「ミー」を長く。「メディア」にならないよう注意。' },
        { target: 'connect',   ipa: '/kəˈnekt/',      note: '「クネクト」。2音節目 -NECT に強勢。語頭は弱く「ク」と発音する。' },
        { target: 'important', ipa: '/ɪmˈpɔːrtənt/', note: '「インポータント」。2音節目 -PORT- に強勢。最後の -ant は弱く短く。' },
        { target: 'However',   ipa: '/haʊˈevər/',     note: '文頭では少し間を置く。「でも・しかし」と前後を対比させる意識で読む。' },
        { target: 'リズムのコツ', note: '英語は強勢拍リズム。重要な内容語（名詞・動詞・形容詞）を強く、機能語（is / to / and）は弱く速く流す。' },
      ],
      activities: [
        {
          type: 'practice',
          title: 'Memorization Challenge',
          description: '発音のポイントを意識しながら英文を繰り返し声に出し、テキストを見ずに言えるようにする練習。',
          connection: '英文を体に入れる過程で身につく語感・語彙が、応用の One-Slide Presentation で「自分の言葉で話す」ための土台になる。',
          point: '「暗記」は目的じゃなく手段。英文を体に入れる過程で、語の繋がりや強弱のリズムが自然に身につく。詰まったところが、自分の発音・語順の弱点を教えてくれる場所。',
          steps: [
            'Step 1：発音のポイントを確認しながら3回音読する',
            'Step 2：音声に合わせてシャドーイングする（普通より少し速め）',
            'Step 3：テキストを閉じて、暗記で言えるかチャレンジ',
          ],
          rubric: [
            { label: '◎', points: 3, note: '見ずに正確に言える' },
            { label: '○', points: 2, note: '多少つかえても最後まで言える' },
            { label: '△', points: 1, note: 'スクリプトを見ながら言える' },
          ],
        },
        {
          type: 'game',
          title: 'Memorization Relay',
          description: '個人で練習した英文を、グループで1文ずつ交代に言っていくゲーム。ミスが出たら最初からやり直す。',
          connection: '「正確に言える」状態を積み上げることが、応用の Peer Review Presentation での「構成して話す」力の基礎になる。チームで鍛えた発表への意識も次につながる。',
          point: '自分の番が来たときの緊張感が、暗記の質を上げる。「ミスしたくない」その気持ちをうまく使おう。自分がつまずいた箇所は、グループで一番練習が必要な部分。',
          teacherNote: '3〜4人グループが最適。クリア回数や速さで競わせると盛り上がる。',
          steps: [
            '3〜4人グループを作る',
            '1人目：1文目を言う',
            '2人目：2文目を言う',
            '3人目：3文目を言う',
            'ミスが出たら1人目に戻って最初から！',
            'ノーミスでクリア 🎉',
          ],
        },
        {
          type: 'creative',
          title: 'Emotion Reading Challenge',
          description: '正確に言えるようになった英文を、感情カードで引いた「感情キャラクター」で読み直す活動。同じ文でも抑揚・ペース・間を変えて読み比べる。',
          connection: '「どう聞こえるか」を意識する力が、応用の 30-Second Ad Speech での「相手に伝わる話し方」に変換される。正確さに「伝える意識」が加わるのがこの活動から。',
          point: '英語は「何を言うか」だけじゃなく「どう言うか」で伝わり方が大きく変わる。笑いながらやっていい。大げさなほど、言語の「音の力」を体で実感できる。',
          steps: [
            'Step 1：普通の声で1回読む',
            'Step 2：感情カードを引く',
            'Step 3：その感情で英文を読む',
            'Step 4：クラスで聞き合って感情を当ててみよう',
          ],
          teacherNote: '感情カード例：excited / sad / angry / calm / like a news anchor / like a robot / whispering。メモ切り分けで準備OK。',
        },
      ],
    },

    // ── 話す（会話）（基礎）──────────────────
    kaiwa: {
      goal: '会話の基本パターンを身につける',
      text: [
        'A:  Hi! How\'s it going?',
        'B:  Good, thanks! And you?',
        'A:  Not bad! Actually, I have a homework assignment about social media.',
        '    Can I ask you a few questions?',
        'B:  Sure, go ahead!',
        'A:  Do you use social media a lot?',
        'B:  Yeah, I use Instagram every day.',
        'A:  What do you like about it?',
        'B:  I like seeing what my friends are up to. It keeps me connected.',
        'A:  That makes sense. Do you think it has any downsides, though?',
        'B:  Hmm... sometimes I feel stressed when I compare myself to others.',
        'A:  I know what you mean. How do you deal with that?',
        'B:  I try to take breaks from my phone. It really helps.',
        'A:  That\'s a good idea. Thanks for your time!',
        'B:  No problem. Good luck with your assignment!',
      ].join('\n'),
      pronunciationTips: [
        { target: 'How\'s it going?', note: '\"How\'s it\" はつなげて「ハウズィット」と発音する。語尾は上げ調子 ↗。' },
        { target: 'Actually',  ipa: '/ˈæktʃuəli/', note: '「アクチュアリ」。1音節目を強く。文頭で使うと「実は…」と話題を切り出す合図になる。' },
        { target: 'Sure',      ipa: '/ʃʊr/', note: '「シュア」。"Yes" より柔らかく快諾する表現。語尾は上げずフラットに。' },
        { target: 'Yeah',      ipa: '/jɛ/', note: '「イェ」。"Yes" のカジュアル版。会話では "Yes" より自然に聞こえる。' },
        { target: 'That makes sense.', note: '「なるほど・確かに」。相手の発言を受け入れる定番フレーズ。"I see." より具体的に納得を伝える。' },
        { target: 'I know what you mean.', note: '「わかるわかる」。共感を示す表現。"Me too." と違い、同じ経験がなくても使える。' },
        { target: 'No problem.', note: '感謝への返し方。"You\'re welcome." より会話的でカジュアル。日常会話では圧倒的にこちらが多い。' },
      ],
      activities: [
        {
          type: 'practice',
          title: 'Dialogue Practice',
          description: 'SNSをテーマにした会話ダイアログを使い、まず一人でAパートとBパートを練習し、慣れたらペアでテキストなしで通す活動。',
          connection: 'ダイアログの表現を体に入れることが、応用の Information Gap と SNS Advice Conversation での自然なやりとりの素材になる。「借り物の表現」が少しずつ「自分の表現」になる段階。',
          point: '最初はスクリプトを見ながらでいい。「見ないで言える」になったとき初めて、表現が自分の口の中に入ってくる。どこで詰まるかが、自分がまだ「借り物の言葉」で使っている部分のサイン。',
          steps: [
            'Step 1：全体をゆっくり声に出して読む（2回）',
            'Step 2：Aパートだけ見ないで言えるように練習する',
            'Step 3：Bパートだけ見ないで言えるように練習する',
            'Step 4：ペアでテキストなしで通して会話する',
          ],
        },
        {
          type: 'practice',
          title: 'Reaction Drill',
          description: 'SNSに関する発言に対して、"That\'s interesting." や "I know what you mean." などのリアクション表現を即座に返す練習。ペアを変えながら繰り返す。',
          connection: '反射的に返せるリアクション表現が、応用の SNS Advice Conversation と Keep-Going Challenge で「会話を続ける」力の核心になる。',
          point: '会話が続かないのは、英語力より「返し方のストック」が少ないから。ここで練習するリアクション表現は、どんな話題でも使える万能ツール。体が反射的に返せるようになるまで繰り返そう。',
          steps: [
            'Step 1：ペアの一人がSNSについての発言をする（例："I use Instagram every day."）',
            'Step 2：もう一人が反応表現を使ってすぐに返す',
            'Step 3：ペアを変えながら繰り返す',
          ],
          modelText: [
            'Really? → Why do you think so?',
            'That\'s interesting. → Tell me more.',
            'Me too. / Me neither.',
            'I see. → So you mean...?',
            'Oh, I didn\'t know that.',
          ],
        },
        {
          type: 'game',
          title: 'Expression Bingo',
          description: 'ダイアログに登場する9つの表現が書かれたビンゴカードを使う。ペアでダイアログを読み合いながら、聞こえた表現をマークしていこう。先にタテ・ヨコ・ナナメのどれか1列を揃えたら "Bingo!" と言う。',
          connection: 'ゲームを通してダイアログの表現を耳と頭に入れることが、応用の Information Gap と Keep-Going Challenge での自然な会話につながる。',
          point: 'ゲームに集中しているうちに、表現が自然と耳と頭に入ってくる。どの表現がどの場面で使われるかを意識しながら聞いてみよう。',
          steps: [
            'Step 1：下の9つの表現を、好きな順番で3×3のマスに書き込む',
            'Step 2：ペアでダイアログを声に出して読む（交互に何度でも）',
            'Step 3：読み上げられた表現が自分のカードにあればマークする',
            'Step 4："Bingo!" になったら声に出す。終わったら役割を交代して繰り返す',
          ],
          modelText: [
            "How's it going?",
            'Good, thanks!',
            'And you?',
            'Not bad!',
            'Actually, ...',
            'Sure!',
            'That makes sense.',
            'I know what you mean.',
            'No problem.',
          ],
        },
      ],
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // LEVEL 2  応用
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  oyo: {

    // ── 読む（応用）──────────────────────────
    yomu: {
      goal: '本文を精読し、情報を整理・批判的に読む',
      text: MAIN_TEXT,
      activities: [
        {
          type: 'practice',
          title: 'Platform Multiple Choice Quiz',
          description: '基礎のTrue/Falseで確認した本文の内容を、4択形式でより細かく問い直す。タップして答えを確認しよう。',
          connection: '基礎の True / False Quiz で事実確認の力をつけた。応用では一段細かい読み取り——「最も正確な解釈」を選ぶ精度を上げる。発展の Evidence Hunt と Critical Reading でこの読解力を批判的思考に接続する。',
          point: 'True/Falseは「合っている・合っていない」の判断だったけど、4択はもう一段階深い読み取りが必要になる。「なんとなく正解」ではなく、本文のどの一文が根拠になるかを意識しながら選んでみよう。',
          mcItems: [
            {
              question: 'What does the text say about how people use YouTube?',
              options: [
                'YouTube is mainly used by adults for business networking.',
                'YouTube focuses primarily on private messaging between users.',
                'Users spend an average of over 40 minutes per day watching videos.',
                'YouTube was developed by the Chinese company ByteDance.',
              ],
              answer: 2,
            },
            {
              question: 'According to the text, what is a potential risk of using Instagram?',
              options: [
                'Its algorithm collects data and sells it to other companies.',
                'Comparing oneself to "perfect lives" on Instagram can harm mental health.',
                'Instagram is only available in certain countries.',
                'Instagram forces users to post content every day.',
              ],
              answer: 1,
            },
            {
              question: 'How does the text describe LINE differently from other social media platforms?',
              options: [
                'LINE has more users worldwide than any other platform.',
                'LINE was the first social media platform created in Japan.',
                'LINE functions less like a social network and more like a daily communication tool.',
                'LINE specializes in short videos ranging from 15 seconds to 10 minutes.',
              ],
              answer: 2,
            },
            {
              question: 'Which of the following best describes the concerns about TikTok mentioned in the text?',
              options: [
                'TikTok has lost popularity because it only allows short videos.',
                'TikTok was banned in all countries due to its addictive algorithm.',
                'TikTok faces controversy over data privacy and its influence on young users.',
                'TikTok\'s algorithm was developed by Meta and shared with ByteDance.',
              ],
              answer: 2,
            },
          ],
        },
        {
          type: 'analysis',
          title: 'Text Structure Analysis',
          description: '「platform / function / users / benefit / risk」の5つの観点で、6つの段落を表に整理して分析する活動。情報が書かれていない欄に注目することが重要。',
          connection: '基礎の Mind Map で本文の情報を整理した。応用では「著者がどういう構造で書いているか」まで分析する。この力が、発展の Critical Reading で「なぜそう書いたか」を問う土台になる。',
          point: '「何が書いてあるか」と同じくらい、「何が書かれていないか」を意識してほしい。全プラットフォームにRiskが書かれているわけじゃない。その「差」が、筆者が何を一番問題視しているかを教えてくれる。これはニュースやSNS投稿を読むときにも使える視点だよ。',
          steps: [
            'Step 1：6つのプラットフォーム段落それぞれについて、以下を本文から書き出す',
            '　　① Platform（プラットフォーム名）',
            '　　② Function（主な機能・特徴）',
            '　　③ Users（典型的なユーザー層）',
            '　　④ Benefit（メリット・良い点）',
            '　　⑤ Risk（リスク・問題点）',
            'Step 2：情報が書かれていない欄に×印をつける',
            'Step 3：ペアで比較し、気づいた「共通点」と「違い」について日本語で話し合う',
            'Step 4：分析結果を教師と一緒に確認する',
          ],
          teacherNote: '分析後、教師から以下の視点を補足する。①共通構造（Platform → Feature → User → [Risk]）が全体を貫いている。②Riskの記述がないプラットフォーム（LINE・Facebookは弱い）→「私的通信」「コミュニティ形成」ツールは批判されにくいという暗黙の評価が読める。③TikTokのRisk記述が最も詳しい→筆者が最も問題視していることが伺える。「書かれていないこと」を読む力が批判的読解の入口であることを伝える。',
        },
        {
          type: 'analysis',
          title: 'Fact vs. Opinion Jigsaw',
          description: 'AとBで担当段落を分けて分析し、共有して初めて全体が完成する。',
          connection: '基礎の True / False Quiz で「事実を確認する目」を養った。応用ではさらに踏み込み、「事実と意見を区別する」力を育てる。発展の Evidence Hunt でこの目を教科書の外に向ける。',
          point: '「自分の担当を責任を持って分析し、相手に伝える」構造が、互いを必要とする読解につながる。事実と意見を区別する力は、SNS・ニュース・広告でフェイクや誘導に流されないための基礎的なメディアリテラシー。',
          steps: [
            'Step 1：ペアでAとBに役割を分ける',
            '　　A担当：YouTube・Instagram・Xの段落',
            '　　B担当：LINE・Facebook・TikTokの段落',
            'Step 2：それぞれ担当段落から「事実」と「意見・解釈」を書き出す',
            'Step 3：ペアで見せ合い、分類を共有・比較する',
            'Step 4：意見が分かれた文について話し合う',
            'Step 5：全体で「どのプラットフォームに意見・解釈が多かったか」を確認する',
          ],
        },
      ],
    },

    // ── 聞く（応用）──────────────────────────
    kiku: {
      goal: '音声から情報を精密に抽出する',
      text: MAIN_TEXT,
      activities: [
        {
          type: 'practice',
          title: 'Dictation',
          description: '音声を一文一文正確に書き取る活動。内容はすでに読んでいる文なので、内容把握より「単語レベルの正確な聞き取り」に集中できる。',
          connection: '基礎の Sentence Ordering で文の流れを耳でつかんだ。応用では一語単位の正確さで書き取る力を鍛える。この精度が、発展の Authentic Audio Comprehension でリアル音声を処理するときの基盤になる。',
          point: '内容はもう知ってるはずなのに、単語単位で書き取ろうとすると意外と聞き取れない部分が出てくる。そのギャップこそが、自分のリスニングの弱点を教えてくれる場所。「聞こえなかった」を流さず、一語一語を確かめる意識で取り組もう。',
          steps: [
            '区間1：Social media has become... → ...different purposes.',
            '区間2：YouTube is the world\'s largest... → ...and entertainment.',
            '区間3：Instagram, owned by Meta... → ...mental health and self-esteem.',
            '区間4：X, formerly known as Twitter... → ...shaping public opinion.',
            '区間5：LINE is the dominant... → ...daily communication tool.',
            '区間6：Facebook, one of the oldest... → ...connect across borders.',
            '区間7：TikTok, developed by... → ...on young users.',
          ],
        },
        {
          type: 'analysis',
          title: 'Selective Listening',
          description: '音声を繰り返し聞きながら、数字・固有名詞・リスクに関する語句など「特定の情報だけ」を選んで書き取る活動。ラウンドごとに聞く対象を絞る。',
          connection: '基礎の Platform ID Listening で特徴を聞き分けた。応用では「必要な情報だけを選んで聞く」という実践的な力を磨く。発展の Speaker\'s Stance でこの力が「話者の立場を読む」方向に深化する。',
          point: '「全部聞き取らなきゃ」と思うと頭がパンクする。でも実際の会議や授業で必要なのは、大事な情報だけを素早く捕まえるスキル。目的を決めてから聞くと、同じ音声でもまったく違って聞こえてくるよ。',
          steps: [
            'Round 1：数字・統計だけをメモする（例：40 minutes / 95 million / 3 billion / 15 seconds）',
            'Round 2：企業名・固有名詞だけをメモする（例：Meta / ByteDance / Twitter）',
            'Round 3：リスクや問題に関する語句だけをメモする（例：controversy / privacy / addictive / mental health）',
            'Step 4：メモを見ながら本文で正解を確認する',
          ],
          teacherNote: '「選択的注意」は実際のリスニング（会議・講義・ニュース）でも重要なスキル。音声は各ラウンド1〜2回流す。',
        },
        {
          type: 'analysis',
          title: 'Word Harvest & Retell',
          description: '音声から聞こえた単語をとにかく書き出し、そのメモだけを使ってペアに内容を伝える活動。文にせず単語だけ書き取ることから始める。',
          connection: '基礎の Vocabulary Bingo で語彙の意味を確認した。応用では音声から語彙を「拾い上げ」、それだけを使って内容を伝える。発展の Authentic Audio Comprehension と Vocabulary in the Wild でこの力を教室の外に向ける。',
          point: '「完璧に聞き取れなかったから話せない」ではなく、「聞き取れた単語だけで伝える」ことを目標にしよう。手持ちの情報だけで動く力が、実際の英語使用の場面では必要になる。メモにない言葉は使わない——それがこの活動のルールであり、リスニング力と向き合う鍵。',
          steps: [
            'Step 1：音声を流す。聞こえた単語を片っ端からメモする（文にしなくてOK、単語だけ）',
            'Step 2：もう一度流す。さらに追加する',
            'Step 3：メモした単語だけを使って内容を日本語でペアに伝える',
            'Step 4：条件 — メモにない語句はなるべく使わない。自分が聞き取れた単語だけで説明する',
            'Step 5：本文で確認 — 書き取れなかった単語はどこで聞き逃したか振り返る',
          ],
          teacherNote: '内容はすでに知っているので、この活動の焦点は「音声処理能力」そのもの。どれだけ多くの単語を音として捕まえられるかが評価軸。retell の制約（メモにない語句は使わない）が、記憶や推測ではなくリスニングの成果に向き合わせる。',
        },
      ],
    },

    // ── 書く（応用）──────────────────────────
    kaku: {
      goal: 'まとまった文章を書く',
      activities: [
        {
          type: 'creative',
          title: 'Chain Writing',
          description: '4人グループで「SNSの良い点と悪い点」について1文ずつ交代で書き、接続表現でつないで1つの段落を完成させる活動。',
          connection: '基礎の Word Order Challenge・Sentence Builder Race で文の組み立て方を身につけた。応用ではその力を「次の人に続く文を書く」即興的な場面で使う。接続表現を意識することが、発展の論理的な文章構成への準備になる。',
          point: '自分1人では書けないような段落が、4人でつなぐと完成する。前の人の文を受け取って次に渡すとき、「この文の後に何を置けば段落がつながるか」を考えることが英語ライティングの核心。However・For example・Thereforeを意識して使ってみよう。',
          conditions: [
            '今日の語彙を最低1語使う（connect / compare / algorithm / community など）',
            '1人1文・合計4文で1段落にする',
            '接続表現を意識する（However / Also / For example / Therefore）',
          ],
          modelText: [
            'Social media helps us connect with friends easily.　　（1人目）',
            'However, some people feel stressed when they compare themselves to others.　（2人目）',
            'For example, seeing perfect photos on Instagram can make us feel lonely.　（3人目）',
            'Therefore, it is important to be aware of the algorithm and use social media mindfully.　（4人目）',
          ],
        },
        {
          type: 'practice',
          title: 'Summary Writing',
          description: '本文全体を自分の言葉で英語のサマリーとして3〜5文でまとめる活動。本文をコピーせず、自分の言葉で言い換えることが条件。',
          connection: '基礎の Fill in the Blank・Sentence Reconstruction で「正しく書く力」を固めた。応用では本文を圧縮して「自分の言葉でまとめる」力を使う。この力が、発展の School SNS Policy と News Article での論理的な文章構成に直結する。',
          point: '「本文を短くする」のではなく、「自分が理解したことを自分の言葉で書く」のがサマリーの本質。書いてみると、自分がどこをちゃんと読めていてどこを読めていなかったかがはっきりわかる。',
          conditions: [
            '3〜5文で書く',
            '本文をそのままコピーしない（自分の言葉で言い換える）',
            '取り上げるプラットフォームを最低2つ含める',
            '学習した語彙をなるべく使う',
          ],
          modelText: [
            'There are many social media platforms, each with different features and users.',
            'For example, YouTube is known for video content, while LINE is popular in Japan as a messaging app.',
            'Understanding the characteristics of each platform helps us use them more wisely.',
          ],
          teacherNote: '本文を参照しながら書かせてOK。ただし「コピーではなく要約」であることを強調する。完成後ペアで読み合わせして、内容が正確に伝わっているか確認させる。',
        },
        {
          type: 'analysis',
          title: 'Perspective Writing',
          description: '「SNS大賛成派」と「SNS批判派」に分かれ、それぞれの立場から理由付きで段落を書く活動。書き終えたらお互いの文章を読み比べる。',
          connection: '基礎の Word Order Challenge で正確に書く力をつけた。応用では「書き手の視点を選んで書く」という論点を持った文章作成を練習する。発展の Open Letter to a CEO でこの力を「実際の相手に届ける文章」へと発展させる。',
          point: '自分の本音と違う立場で書くのが、この活動の面白さ。「反対の立場だとどう言うだろう？」を考えることで、自分の意見の根拠も強くなる。ディベートや小論文で「相手の反論を想定して書く」力は、ここから始まる。',
          conditions: [
            '自分の本音とは逆の立場でも書いてOK',
            '根拠を1つ以上含める（because / since）',
            '3文以上で書く',
          ],
          teacherNote: '立場はくじで決めると公平。「逆の立場を論じる」経験がディベート力・批判的思考の基礎になる。',
        },
        {
          type: 'creative',
          title: 'Write a Social Media Post',
          description: '実際に投稿するプラットフォームを選んでから、そのSNSに合わせた英語の短文を2〜3文で書く活動。',
          connection: '基礎の Fill in the Blank で語彙を文の中で使う練習をした。応用ではプラットフォームを選ぶことで「誰に・何のために書くか」を意識した実践的な書き方を体験する。',
          point: 'プラットフォームを選ぶことで、「誰が読むか・何文字で伝えるか・どんなトーンか」が変わってくる。Xのポストとインスタのキャプションでは書き方が違う。「伝える相手と場所を意識して書く」のが実際のライティングの基本。英語のハッシュタグも考えてみよう。',
          conditions: [
            '2〜3文で書く',
            '学習した語彙を最低1語使う',
            '投稿するプラットフォームを決めてから書く（Instagram / X / YouTube コメント欄 など）',
            '英語のハッシュタグをつけると◎',
          ],
          modelText: [
            '（Instagramの場合）',
            '"Social media platforms like YouTube and TikTok are shaping how we learn and connect.',
            'But remember — each app has its own algorithm and purpose. Use them wisely! 📱',
            '#DigitalLiteracy #SocialMediaLife"',
          ],
          teacherNote: 'プラットフォームを選ばせることで、読者・文体・目的を意識した書き方につながる。Summary Writingで整理した内容を凝縮する活動として機能させる。',
        },
      ],
    },

    // ── 話す（スピーチ）（応用）──────────────
    speech: {
      goal: '発音・抑揚を意識してプレゼンする',
      activities: [
        {
          type: 'practice',
          title: 'One-Slide Presentation',
          description: '「SNSの良い点・悪い点・自分の意見」をスライド1枚にまとめ、1分間で話す活動。暗記した英文を再現するのではなく、自分の言葉で構成して話す最初のステップ。',
          connection: '基礎の Memorization Challenge で語感と語彙を体に入れた。応用ではその素材を使って「自分の考えを構成して話す」発表の基本形を練習する。発展の Pitch Speech と Live Stream Speech への足がかりとなる。',
          point: '基礎では「覚えた文を正確に言う」練習をしたよね。今度は「自分の意見を組み立てて話す」ステージ。最初から流暢に話せなくていい。良い点・悪い点・自分の意見の3つがちゃんと言えれば、それがプレゼンの骨格になる。',
          steps: [
            '① SNSの良い点（1文）',
            '② SNSの悪い点（1文）',
            '③ 自分の意見（1文）',
          ],
          rubric: [
            { label: 'Content',    points: 3, note: '良い点・悪い点・意見が含まれているか' },
            { label: 'Vocabulary', points: 3, note: '学んだ語彙を使えているか' },
            { label: 'Delivery',   points: 2, note: '聴衆を意識して話せているか' },
            { label: 'Timing',     points: 2, note: '1分以内に収まっているか' },
          ],
          teacherNote: '発音・抑揚も観察ポイント（評価基準には含めないがフィードバックとして伝えること）。',
        },
        {
          type: 'creative',
          title: '30-Second Ad Speech',
          description: '「健康的なSNSの使い方を助けるアプリ」の英語CMを30秒で発表する活動。アプリ名・機能・英語のキャッチコピーを自由に考える。',
          connection: '基礎の Emotion Reading Challenge で「どう聞こえるか」を意識した。応用では30秒という制約の中で「相手を引きつける話し方」を鍛える。発展の Pitch Speech でこの力を「アイデアを売り込む」場面に転用する。',
          point: '30秒でどう印象を残すか——それが広告スピーチのすべて。「構成して話す」感覚を掴んだ上で、今度は「目的と聴衆を絞る」挑戦をしよう。英語の正確さより「伝えたいという熱量」の方が、聞き手には届くことが多い。',
          steps: [
            'Step 1：アプリ名を考える',
            'Step 2：主な機能を英語で1〜2文説明する',
            'Step 3：英語のキャッチコピー（1文）で締める',
            'Step 4：準備3分 → 発表30秒',
          ],
          teacherNote: 'クリエイティブな発想を評価する。英語の正確さより「伝えようとする姿勢」を褒めると意欲が上がる。',
        },
        {
          type: 'analysis',
          title: 'Peer Review Presentation',
          description: '「自分がよく使うSNSとその理由」について1分プレゼンを行い、ペアから3点フィードバック（伝わったこと・よかった点・改善点）をもらう活動。発表する側と評価する側を交代する。',
          connection: '基礎の Memorization Relay で「正確に言える」状態を作った。応用では「自分の考えを構成して話す」発表の完成形に取り組む。発展の Random Word Speech と Live Stream Speech で、この力を準備なしの場面でも使えるかが問われる。',
          point: '発表する力だけでなく、「聞いて評価する力」も同時に鍛えるのがこの活動のポイント。ルーブリックを見ながら相手の発表を聞くと、「いいプレゼン」の条件が自分の中に入ってくる。それが次の自分のプレゼンを変える。',
          steps: [
            'Step 1：「自分がよく使うSNSとその理由」について1分プレゼンを準備する（メモOK）',
            'Step 2：ペアに発表する',
            'Step 3：聞き手が3点フィードバックする — ①伝わったこと ②よかった点 ③改善できる点',
            'Step 4：役割を交代する',
          ],
          rubric: [
            { label: 'Content',   points: 3, note: '主張・根拠・意見が明確か' },
            { label: 'Language',  points: 3, note: '語彙・文法が適切か' },
            { label: 'Delivery',  points: 2, note: 'アイコンタクト・声量を意識しているか' },
            { label: 'Feedback',  points: 2, note: '具体的なフィードバックを与えられたか' },
          ],
          teacherNote: 'フィードバックする側も評価の対象にすることで、聞く力と分析力を同時に鍛えられる。採点基準を共有してから始めると質が上がる。',
        },
      ],
    },

    // ── 話す（会話）（応用）──────────────────
    kaiwa: {
      goal: '目的を持って対話する',
      activities: [
        {
          type: 'authentic',
          title: 'Information Gap',
          description: 'AとBで異なるプラットフォーム情報を持ち、相手のシートにない情報を英語の質問だけで引き出してシートを完成させる活動。',
          connection: '基礎の Dialogue Practice で「表現を使える状態」を作った。応用では相手が持っていない情報を英語で引き出すという、本物の会話の目的を持って話す。発展の Hot Topic Discussion でこの力を「準備なし・フリートピック」の場面へ拡張する。',
          point: '「知らない情報を英語で質問して手に入れる」——これが本物のコミュニケーションニーズ。相手が持っている情報があって初めて会話が成立する。その「互いを必要とする」構造を楽しみながら、どんな質問をすれば必要な情報が引き出せるか考えてみよう。',
          steps: [
            'Step 1：AシートまたはBシートを受け取る（相手のシートは見ない）',
            'Step 2：自分のシートにない情報を英語の質問で相手から引き出す',
            'Step 3：シートを完成させる',
            'Step 4：最後にシートを見せ合って確認する',
          ],
          teacherNote: 'Aシートには Instagram・TikTokの情報、BシートにはX（Twitter）・YouTubeの情報を入れておく。"What platform does...?" "How many users does it have?" などの質問表現を板書しておくと動きやすい。',
        },
        {
          type: 'authentic',
          title: 'SNS Advice Conversation',
          description: '一人がSNSに関する悩みを話し、もう一人が英語でアドバイスする活動。一問一答ではなく最低2往復のやりとりを続けることがゴール。',
          connection: '基礎の Reaction Drill で反応フレーズを反射的に使える状態にした。応用では「相手の状況を聞いてアドバイスを返す」という、深いやりとりを練習する。発展の Devil\'s Advocate でこの「相手の立場で考える」力がさらに機能する。',
          point: '「アドバイスをする」のは、相手の状況をちゃんと聞いた後でないとできない。"That sounds tough." の一言から始まる会話が、自然と続いていくのを体感してほしい。基礎のReaction Drillで練習した応答表現を、もっと長い流れの中で使ってみよう。',
          steps: [
            'Step 1：相談役がSNSに関する悩みを話す（例："I keep comparing myself to others on Instagram..."）',
            'Step 2：アドバイス役が英語でアドバイスをする（最低2往復続けること）',
            'Step 3：役割を交代する',
          ],
          modelText: [
            'That sounds tough. Have you tried...?',
            'Why don\'t you...?',
            'I think you should...',
            'What if you...?',
            'I understand how you feel.',
          ],
        },
        {
          type: 'game',
          title: 'Keep-Going Challenge',
          description: 'SNSについて英語で1分間（成功したら2分）、会話を途切れさせずに続けることを目指す活動。基礎で習得した表現と反応をすべて使う。',
          connection: '基礎の Expression Bingo で表現を耳と頭に入れた。応用では「会話を途切れさせない」という実践的な課題に挑む。発展の Hot Topic Discussion でこの力を「準備なし・トピック固定なし」の場面で試す。',
          point: '会話が続かないのは語彙が少ないからじゃなくて、「返し方」を知らないことが多い。"What about you?" "Have you ever...?" "By the way..." ——こういう一言が会話をつなぐ橋になる。間違えても止まらないことの方が大事。',
          steps: [
            'Step 1：ペアでSNSについて英語で会話を始める',
            'Step 2：1分間、会話を途切れさせないことがゴール',
            'Step 3：途切れたらリスタート',
            'Step 4：成功したら2分に延長する',
          ],
          teacherNote: '詰まったとき用の「会話つなぎフレーズ」（"By the way..." / "What about you?" / "Have you ever..."）をカードで配布しておくと、ヒントとして使える。',
        },
      ],
    },
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // LEVEL 3  発展
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  hatten: {

    // ── 読む（発展）──────────────────────────
    yomu: {
      goal: '本文を批判的に読み、自分の視点を持つ',
      activities: [
        {
          type: 'authentic',
          title: 'Evidence Hunt',
          description: '本文の主張を裏付けるか反証する実際のデータや記事を英語で検索し、本文の記述と比較してまとめる活動。',
          connection: '応用の Fact vs. Opinion Jigsaw で「事実と意見を区別する目」を養った。発展では、その目を使って教科書の外に出る。本文の記述を実際のデータと照合することが、情報を批判的に読む力の完成形だ。',
          point: '教科書が「正しい」と思い込んでいないか？ 書いてあることを信じるのではなく、自分でデータを探して検証してみよう。世の中に出回る情報は全部、誰かが選んで書いたものだ。',
          conditions: [
            '信頼できる英語ソースを1つ以上見つける（ニュース・論文・統計など）',
            '「本文の主張」と「自分が見つけたデータ」を比較する',
            '本文との比較をまとめる',
          ],
          teacherNote: 'Google Scholar・BBC・NPR などを紹介しておくと取り組みやすい。情報の信頼性を評価する習慣もつけたい。',
        },
        {
          type: 'analysis',
          title: 'Critical Reading',
          description: '本文の記述のうち、自分が賛成できるものと反対・疑問を感じるものをそれぞれ選び、理由とともにペアで共有する活動。',
          connection: '応用の Text Structure Analysis で「著者がどう書いているか」を分析した。発展ではさらに踏み込んで、「著者が何を言っていないか・なぜそう書いたか」まで考える。Fact vs. Opinion で培った「意見を見分ける目」がここで本格的に機能する。',
          point: '「先生が使っている教材だから正しい」は思考停止。どんな文章にも書いた人の視点や限界がある。自分なりの「なぜ？」「本当に？」を持つことが、読む力の本質だ。',
          steps: [
            'Step 1：本文を読んで、賛成できる記述を1〜2つ選ぶ',
            'Step 2：反対・疑問を感じる記述を1〜2つ選ぶ',
            'Step 3：それぞれに理由をつけてまとめる',
            'Step 4：ペアと共有し、互いの意見を聞き合う',
          ],
          teacherNote: '「正しい答えを出す」活動ではないことを最初に伝える。根拠のある反論・疑問であれば何でも歓迎する雰囲気をつくること。応用の Fact vs. Opinion で培った「意見を見分ける目」をここで活用させる。',
        },
      ],
    },

    // ── 聞く（発展）──────────────────────────
    kiku: {
      goal: '本物の英語音声でSNSを聞く',
      activities: [
        {
          type: 'authentic',
          title: 'Authentic Audio Comprehension',
          description: 'TED・ニュース・ポッドキャストなど授業外の本物の英語音声を聞き、主なメッセージと本文との共通点・違いをまとめる活動。',
          connection: '応用の Word Harvest & Retell で授業音声の内容を自分の言葉でまとめる力をつけた。発展では同じ力を、授業外の本物の英語音声に向ける。授業で鍛えた「聞く力」が教室の外でも通用するかを確かめる段階だ。',
          point: '授業で学んだ英語が「現実の世界の英語」と同じかどうか、自分の耳で確かめてみよう。テキストの外に出て初めて、自分の英語力の本当の場所がわかる。',
          steps: [
            'Q1. この音声の主なメッセージは何か？',
            'Q2. 話者はSNSについてどんな問題・主張を述べているか？',
            'Q3. 本文（授業テキスト）と比べて、共通点と違いは何か？',
          ],
          answerNote: '素材例：TED-Ed "How social media makes us unsocial" / "Why our screens make us less happy" など',
          teacherNote: '音声は2回流す（1回目：大意把握 / 2回目：詳細）。字幕は最初はオフ推奨。',
        },
        {
          type: 'analysis',
          title: "Speaker's Stance",
          description: '英語音声を聞いて、話者がSNSについて賛成・批判・中立のどの立場を取っているかを判断し、その根拠となる発言をメモする活動。',
          connection: '応用の Selective Listening で「必要な情報を正確に聞き取る」精度を上げた。発展では情報量だけでなく、話者の「立場・温度感・選択」まで読み取る。読む発展（Critical Reading）と同じ問い——「これは事実か、解釈か」——を今度は音声で問う。',
          point: '人が話すとき、言葉の選び方・強調の仕方・何を省略するかに必ず立場が滲み出る。「何を言っているか」だけでなく「どういう角度から言っているか」を聞き取れるようになろう。',
          steps: [
            'Step 1：音声を聞きながら、話者の立場（賛成 / 批判 / 中立）を判断する',
            'Step 2：その根拠になった具体的な発言・語句をメモする',
            'Step 3：ペアと比較し、判断が分かれた場合は話し合う',
          ],
          teacherNote: '同じ音声でも立場の解釈が分かれることがある。「どの発言からそう判断したか」を言語化させることが重要。読むの発展（Critical Reading）との縦の接続を意識させる。',
        },
        {
          type: 'authentic',
          title: 'Vocabulary in the Wild',
          description: 'YouGlishを使い、授業で学んだ語彙が実際の英語動画の中でどんな文脈・発音・場面で使われているかを確認する活動。',
          connection: '基礎の Vocabulary Bingo・応用の Word Harvest & Retell で語彙を学び、文脈の中で使う練習をした。発展では、同じ単語が実際の英語話者によってどう発音され、どんな場面で使われているかを自分の耳で確かめる。「知っている単語」を「聞き取れる単語」へ変換する最終段階だ。',
          point: '授業で覚えた単語が「生きた英語」の中でどう使われているか、実際に見てみよう。意味を知っている単語と、リアルな会話で使いこなせる単語はまったく別物だ。',
          steps: [
            'Step 1：YouGlishで学習語彙を検索する（例：algorithm / privacy / addictive / influencer）',
            'Step 2：出てきた動画クリップを2〜3つ聞く',
            'Step 3：授業で学んだ意味・使われ方と比べて、気づいたことをまとめる',
          ],
          teacherNote: 'YouGlish（youglish.com）は単語を入力するとその語が含まれるYouTube動画クリップを即座に表示するサービス。実際の発音・イントネーション・文脈での使われ方を確認するのに最適。事前に検索する語彙をいくつかピックアップして共有しておくと取り組みやすい。',
        },
      ],
    },

    // ── 書く（発展）──────────────────────────
    kaku: {
      goal: '論理的に主張を構成する',
      activities: [
        {
          type: 'authentic',
          title: 'School SNS Policy',
          description: '本文で学んだ各プラットフォームの特徴・リスク・メリットを根拠として、自分たちの学校のSNS利用ガイドラインを英語で5項目以上作る活動。',
          connection: '応用の Perspective Writing で「書き手の視点を意識して書く」力をつけた。発展では一つの視点を超えて、複数の立場（生徒・教師・保護者）を想定したルールを構成する。Summary Writing で鍛えた論理的な整理力が、根拠のある主張を作る土台になる。',
          point: '「学校のルールを自分たちで決める」としたらどうする？ 教科書の知識を使って、自分たちが実際に守れるリアルなルールを考えてみよう。誰かに言われたルールより、自分で作ったルールの方が意味を考えるはずだ。',
          conditions: [
            '5項目以上のルールを英語で書く',
            '根拠（because / since / to prevent など）を少なくとも2項目に含める',
            '本文に登場するプラットフォームを少なくとも1つ具体的に言及する',
          ],
          modelText: [
            'Our School Social Media Guidelines:',
            '1. Do not share personal information such as your address or phone number on any platform.',
            '2. Be respectful in comments, since hurtful words can cause serious harm to others.',
            '3. Be aware that TikTok\'s algorithm may show content that does not reflect reality.',
          ],
          teacherNote: '「自分たちが決める」設定が主体性を引き出す。完成したルールをクラスで共有し、採用されたルールを「学級SNS憲章」として掲示するとリアリティが増す。',
        },
        {
          type: 'authentic',
          title: 'Open Letter to a CEO',
          description: 'SNSの問題点と具体的な改善要求を、InstagramのCEOへの公開書簡という形式で英語100語以上で書く活動。',
          connection: '応用の Perspective Writing で「自分の立場から書く」練習をした。発展では「実際の相手（CEO）に届ける文章」として書く。誰に向けて書くかを明確にすることで、語彙・語調・構成がどう変わるかを意識しよう。',
          point: '「大企業に意見するなんて自分には関係ない」と思ってる？ 実際、SNSに関する政策変更のきっかけになった意見書は市民から出たものも多い。英語で書くことは、世界の意思決定の場に自分の声を届ける手段になりうる。',
          conditions: [
            '100語以上',
            '問題点を1〜2つ具体的に述べる',
            '具体的な改善策を提案する',
            '書簡の書き方を守る（Dear ～ / Sincerely,）',
          ],
          teacherNote: '「実際に読まれる可能性がある文章」という設定が生徒の真剣さを引き出す。Authentic Writingの入門として最適。',
        },
        {
          type: 'creative',
          title: 'News Article',
          description: 'SNSに関するニュース記事を、見出し・リード文・本文・記者名という構成で英語で書く活動。',
          connection: '応用の Summary Writing で「必要な情報を選んでまとめる」力をつけた。発展ではニュース記事という形式を使い、同じ力を「記者の視点」に変換する。何を選んで何を省くか——その判断が、読み手の印象を決める。',
          point: '同じ出来事でも、見出しや言葉の選び方で読者の印象は大きく変わる。記者になったつもりで書くことで、自分が普段読んでいるニュースがどうやって「作られているか」が見えてくるはずだ。',
          conditions: [
            '見出し（Headline）：インパクトのある英語タイトル',
            'リード文：5W1Hを含む1〜2文',
            '本文：事実・データ・意見を含む3〜5文',
            '記者名（By ～）を書く',
          ],
          teacherNote: '実際のニュース記事の構造を事前に紹介しておくと取り組みやすい。BBCやNPRの見出しを参考に。',
        },
      ],
    },

    // ── 話す（スピーチ）（発展）──────────────
    speech: {
      goal: '即興で論理的に話す',
      activities: [
        {
          type: 'game',
          title: 'Random Word Speech',
          description: 'くじで引いた単語を必ず使いながら、SNSに関する30秒の即興スピーチを準備30秒で行う活動。',
          connection: '応用の Peer Review Presentation で「構成して話す」経験を積んだ。発展では準備を30秒に限定する。構成する力はあっても「今すぐ話せるか」は別の力だ。積み上げた語彙・知識・表現を即座につなげる練習をここで行う。',
          point: '「準備できてないから話せない」は練習不足のサイン。本当の場面では準備なんてない。自分の頭の中にある知識と語彙を即座につなげる力を、今ここで鍛えよう。',
          steps: [
            'くじを引く',
            '準備30秒 → スピーチ30秒（引いた単語を必ず1回以上使う）',
          ],
          sampleWords: [
            { word: 'addiction',     ipa: '/əˈdɪkʃən/',    meaning: '依存'          },
            { word: 'privacy',       ipa: '/ˈpraɪvəsi/',   meaning: 'プライバシー'   },
            { word: 'algorithm',     ipa: '/ˈælɡərɪðəm/',  meaning: 'アルゴリズム'   },
            { word: 'mental health', ipa: '/ˈmentl helθ/', meaning: 'メンタルヘルス' },
            { word: 'connection',    ipa: '/kəˈnekʃən/',   meaning: 'つながり'       },
            { word: 'influence',     ipa: '/ˈɪnfluəns/',   meaning: '影響'           },
          ],
          teacherNote: '発音・抑揚も観察ポイント（評価基準には含めない）。',
        },
        {
          type: 'authentic',
          title: 'Pitch Speech',
          description: 'SNSの問題を解決するサービス・アプリのアイデアを、クラスメイト（審査員）に向けて2分の準備で60秒ピッチする活動。',
          connection: '応用の 30-Second Ad Speech で「短くまとめて伝える」力を使った。発展ではそれをさらに発展させ、「相手を動かすアイデアを売り込む」という目的を加える。伝える力から、人を動かす力へ。',
          point: 'スタートアップ発表でも就職面接でも、「短時間で相手を動かす」場面は必ず来る。英語で自分のアイデアを人に売り込む経験は、授業の外の世界で直接使えるスキルだ。',
          steps: [
            'Step 1：解決するSNSの問題を1つ選ぶ（例：algorithm addiction / privacy / mental health）',
            'Step 2：「サービス名・機能・誰のためか」を2分で考える',
            'Step 3：審査員（クラスメイト）に向けて60秒でピッチする',
            'Step 4：審査員が「このサービスに投資したいか」を理由とともにフィードバック',
          ],
          teacherNote: '「審査員から投資を受ける」という設定が話す緊張感とリアリティを生む。英語の正確さより「アイデアと伝える意欲」を評価する。',
        },
        {
          type: 'authentic',
          title: 'Live Stream Speech',
          description: '「SNSライブ配信」という設定で、スマホ（カメラ）に向かってSNSと私というテーマで60秒スピーチする活動。',
          connection: '応用の Peer Review Presentation ではクラスメイトに向けて話した。発展では「カメラ越しの見知らぬ視聴者」に向けて話す。聞き手が見えない状況で話すことで、目線・間の作り方・言葉の選び方の意識がまったく変わる。',
          point: '教室でクラスメイトに話すのと、カメラ越しに「見知らぬ誰か」に話すのは全然違う。視聴者を意識した話し方・目線・間の取り方を意識してみよう。これは授業の外で一番使える発信スキルかもしれない。',
          steps: [
            'Step 1：テーマ「SNSと私」について60秒で話す',
            'Step 2：メモは最小限にして、カメラに向かって話す',
            'Step 3：「視聴者」へのメッセージで締める',
          ],
          teacherNote: '実際に録画して後で見返させると自己評価につながる。発音・ペース・アイコンタクトを振り返りポイントに。',
        },
      ],
    },

    // ── 話す（会話）（発展）──────────────────
    kaiwa: {
      goal: '幅広いトピックで自由に会話を続ける',
      activities: [
        {
          type: 'game',
          title: 'Hot Topic Discussion',
          description: 'トピックカードを引き、書かれたSNSトピックについて準備時間なしでペアと3分間、英語で即興会話する活動。',
          connection: '応用の Keep-Going Challenge で「会話を途切れさせない」力をつけた。発展では準備もなく、トピックも選べない状況で始まる。「会話が続くか」ではなく、「どんな話題でも自分の意見を持って話せるか」を問う段階だ。',
          point: '国際交流や留学の場では、話すトピックは向こうが決める。準備ゼロでも話せる状態を作るのが発展の目標だ。「何か言わなきゃ」じゃなく「何が言えるか」を楽しんでみよう。',
          steps: [
            'Step 1：トピックカードを引く',
            'Step 2：準備時間なし。すぐにペアと英語で会話を始める',
            'Step 3：3分間続ける',
          ],
          teacherNote: 'トピック例："Do you think social media makes people lonely?" / "Should schools ban smartphones?" / "Is it okay to post about other people without permission?" / "Would you delete your SNS accounts if asked to?" など。',
        },
        {
          type: 'analysis',
          title: "Devil's Advocate",
          description: '一人がSNSについての意見を述べ、もう一人は「本当にそう言えるか？」「例外はないか？」と問い返し続け、3分後に役割を交代する活動。',
          connection: '応用の Information Gap では相手に伝えるべき情報があった。発展の Devil\'s Advocate では「正解」は存在しない。問い返し続けるパートナーがいることで、思考が一段深まる。SNS Advice Conversation で練習した「相手の立場で考える」姿勢がここでも機能する。',
          point: '反論することが目的じゃない。相手の考えを「もっと深く」引き出すために問い続けることが目的だ。自分の意見に「でも本当に？」と聞いてくる人がいると、思考は一段深くなる。そういう相手になろう。',
          steps: [
            'Step 1：一人がSNSについての意見を1〜2文で述べる',
            'Step 2：もう一人は「本当にそう言えるか？」「どうして？」「例外はないか？」と問い返し続ける',
            'Step 3：3分間続けたら役割を交代する',
          ],
          modelText: [
            'Are you sure about that?',
            'What makes you say so?',
            'Can you give me a specific example?',
            'But what about...?',
            "Isn't it possible that...?",
          ],
        },
        {
          type: 'creative',
          title: 'Cross-Cultural Comparison',
          description: '日本と海外のSNSの使われ方の違いについて、本文の知識と自分の経験をもとに英語で自由に議論する活動。',
          connection: '応用の Keep-Going Challenge で「話し続ける力」を、SNS Advice Conversation で「相手の立場を考える力」を養った。発展ではその力に「本文の知識」と「自分の文化的経験」を組み合わせる。正解のない問いを英語で考え続けることが、発展の最終ゴールだ。',
          point: '「なぜ日本ではLINEが圧倒的で、海外ではWhatsAppなのか？」——その答えは教科書には書いていない。文化・習慣・社会の仕組みの違いを自分の言葉で英語にすることが、本当の意味での「発展」だ。',
          steps: [
            'Step 1：本文に登場するプラットフォームの中で「日本での使われ方が特徴的なもの」を1つ選ぶ（例：LINEは日本では圧倒的、Facebookは欧米の方が主流）',
            'Step 2：なぜ違いが生まれるのかを自分の考えで英語で話す（メモOK）',
            'Step 3：ペアと意見を比較・交換する',
          ],
          teacherNote: '正解はない。「自分の観察・経験・推測を英語で話す」ことがゴール。本文の知識（各プラットフォームのユーザー数・特徴）を根拠として使わせると深みが出る。',
        },
      ],
    },
  },
}

type ThemeContent = Record<LevelId, Record<DomainId, Unit>>

export function getThemeContent(themeId: string): ThemeContent | null {
  const map: Record<string, ThemeContent | null> = {
    sns: SNS_CONTENT,
    washoku: null,
  }
  return map[themeId] ?? null
}
