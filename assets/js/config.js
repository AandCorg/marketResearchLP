window.LP_CONFIG = {
  service: {
    nameJa: "市場調査AI",
    nameEn: "marketResearchAI",
    companyName: "株式会社A&Cコンサルティング",
    description:
      "顧客・競合・市場情報をAIで収集、整理、分析し、営業戦略や価格戦略の提案までつなげる市場調査サービスです。",
    repositoryUrl: "https://github.com/AandCorg/marketResearch",
    loginUrl: "#",
    contactEmail: "contact@example.com",
  },
  assets: {
    heroImage: "assets/images/hero-market-research-ai.png",
    heroImageAlt:
      "市場データを確認しながら戦略を検討するビジネスチーム",
  },
  theme: {
    primaryColor: "#0f766e",
    accentColor: "#f59e0b",
    darkColor: "#172033",
    lightColor: "#f8fafc",
  },
  navigation: [
    { label: "課題", href: "#problem" },
    { label: "解決策", href: "#solution" },
    { label: "機能", href: "#features" },
    { label: "料金", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: {
    primary: { label: "無料相談する", href: "#contact" },
    secondary: { label: "資料の構成を見る", href: "#features" },
    login: { label: "ログイン", href: "#" },
  },
  hero: {
    eyebrow: "AI market research platform",
    titleTemplate: "{serviceNameJa}",
    lead:
      "新規事業、拡販、営業提案に必要な市場調査を、調査設計から根拠付きレポート、営業アクションの提案まで一気通貫で支援します。",
    points: [
      "顧客・競合・市場情報をまとめて分析",
      "判断に必要な根拠を確認しながらAI回答を生成",
      "価格戦略・営業先候補・次の打ち手まで提案",
    ],
    panel: {
      label: "Output example",
      title: "調査から提案までを1つの流れに",
      metrics: [
        { value: "市場把握", label: "動向を整理" },
        { value: "競合比較", label: "違いを可視化" },
        { value: "営業提案", label: "次の打ち手へ" },
      ],
      insightTitle: "次の営業アクション",
      insight:
        "市場動向、競合価格、顧客候補をもとに、優先営業リストと提案観点を提示します。",
    },
  },
  problems: {
    eyebrow: "Current pain",
    title: "市場調査は、まだ人の手に頼る部分が多い",
    lead:
      "新規事業や営業戦略を進める現場で、調査業務が止まりやすいポイントを整理しました。",
    items: [
      {
        title: "調査から報告まで時間がかかる",
        text:
          "情報収集、整理、分析、社内共有までに1人日以上かかるケースがあり、施策化が遅れます。",
      },
      {
        title: "生成AIの回答品質に不安がある",
        text:
          "根拠が見えない回答や情報の偏りがあると、営業や価格判断に使いづらいレポートになります。",
      },
      {
        title: "専門人材なしでは活用しづらい",
        text:
          "既存ツールは高機能でも、設定や分析観点の設計に慣れが必要で、現場に定着しにくい課題があります。",
      },
    ],
  },
  solution: {
    eyebrow: "Solution",
    title: "調査結果を、売れる提案に変える",
    lead:
      "市場調査AIは、情報を集めるだけで終わらせず、顧客候補・競合状況・価格戦略・営業施策までつなげることを狙います。",
    steps: [
      {
        label: "Collect",
        title: "調査に必要な情報を整理",
        text:
          "商品・役務・業界に関する情報を、目的に合わせて比較しやすい形にまとめます。",
      },
      {
        label: "Check",
        title: "判断材料をわかりやすく提示",
        text:
          "回答の根拠や前提を確認しながら、営業判断に使える形でレポート化します。",
      },
      {
        label: "Recommend",
        title: "次の打ち手を提案",
        text:
          "営業戦略、リード予測、案件化予測、契約予測、価格戦略など、行動に移しやすい形で出力します。",
      },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "できること",
    lead:
      "市場調査の結果を、営業や事業判断に使いやすいアウトプットとして届けます。",
    items: [
      {
        title: "顧客・競合分析",
        text:
          "3C分析を軸に、顧客候補、競合企業、市場動向を整理します。",
        bullets: ["顧客リスト候補", "競合比較", "市場トレンド"],
      },
      {
        title: "根拠付きAIレポート",
        text:
          "市場動向や競合情報を、判断材料がわかるレポートとして整理します。",
        bullets: ["要点サマリー", "根拠の確認", "意思決定メモ"],
      },
      {
        title: "価格・営業戦略提案",
        text:
          "競合価格や市場動向をもとに、販売価格や営業優先度の仮説を作ります。",
        bullets: ["価格戦略", "リード予測", "営業先優先度"],
      },
      {
        title: "簡単な操作",
        text:
          "調査したいテーマと目的を入力し、必要なアウトプットを自然な流れで指定できます。",
        bullets: ["テーマ入力", "目的別の出力", "レポート確認"],
      },
      {
        title: "レポート管理",
        text:
          "調査結果を見返しやすく整理し、営業資料や社内共有に使える形で管理します。",
        bullets: ["調査履歴", "社内共有", "資料化しやすい構成"],
      },
      {
        title: "営業アプローチ支援",
        text:
          "営業効果が高いと考えられる候補先と、提案時に伝えるべき観点を整理します。",
        bullets: ["営業候補抽出", "提案観点", "アプローチ方針"],
      },
    ],
  },
  workflow: {
    eyebrow: "Workflow",
    title: "利用の流れ",
    lead:
      "はじめてのユーザーでも、調査テーマの入力からレポート確認まで迷わず進められます。",
    items: [
      {
        title: "調査テーマを入力",
        text: "商品、役務、業界、地域、目的を指定します。",
      },
      {
        title: "情報源と条件を選択",
        text: "対象期間、情報源、除外条件、出力形式を設定します。",
      },
      {
        title: "AIが収集・分析",
        text: "市場動向、競合、顧客候補をまとめて整理します。",
      },
      {
        title: "レポートと提案を確認",
        text: "市場動向、競合比較、営業候補、価格戦略を確認できます。",
      },
    ],
  },
  useCases: {
    eyebrow: "Use cases",
    title: "想定ユースケース",
    lead:
      "販売や事業検討につながりやすい3つの利用場面を紹介します。",
    items: [
      {
        title: "新規事業の立ち上げ",
        text:
          "市場規模、競合、顧客課題を整理し、事業ロードマップの仮説を作ります。",
      },
      {
        title: "既存商品の拡販",
        text:
          "競合価格と市場動向を踏まえ、訴求軸や価格戦略を検討します。",
      },
      {
        title: "営業先の開拓",
        text:
          "営業効果が高いと考えられる企業リストと、提案観点を抽出します。",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "料金プラン",
    lead:
      "事業規模や利用頻度に合わせて選べるプランを用意しています。",
    note:
      "正式な料金、利用範囲、サポート内容はお問い合わせ時にご案内します。",
    plans: [
      {
        name: "ライト",
        price: "1,000円",
        unit: "月額",
        description: "小規模な調査や検証向け",
        features: ["基本調査", "根拠付き要約", "小規模チーム向け"],
      },
      {
        name: "ミドル",
        price: "1,500円",
        unit: "月額",
        description: "継続的な市場調査向け",
        features: ["調査テーマ管理", "レポート共有", "営業候補リスト"],
        highlighted: true,
      },
      {
        name: "プロ",
        price: "3,000円",
        unit: "月額",
        description: "営業・価格戦略まで使う方向け",
        features: ["価格戦略提案", "外部サービス連携", "優先サポート"],
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "よくある質問",
    lead:
      "販売前の不安を減らすため、AIの品質、利用開始、外部連携を先に説明します。",
    items: [
      {
        question: "どのような情報を調査できますか？",
        answer:
          "商品・役務、競合企業、市場動向、価格、営業候補などを想定しています。対象情報源は導入時に調整できます。",
      },
      {
        question: "AIの誤情報はどう防ぎますか？",
        answer:
          "回答の根拠や前提を確認し、営業判断に使う前に内容を見直しやすいレポートとして提示します。",
      },
      {
        question: "専門知識がなくても使えますか？",
        answer:
          "説明書なしで主要操作を進められることを目標に、検索条件と出力内容を選びやすいUIを想定しています。",
      },
      {
        question: "TOIAWASEKUNとの連携はできますか？",
        answer:
          "営業候補の抽出やフォーム営業への展開など、営業活動につなげる使い方を個別にご相談いただけます。",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "市場調査を営業成果につなげたい方へ",
    lead:
      "初回相談では、対象商材、調査したい市場、営業活用の目的を確認し、導入イメージを整理します。",
    points: ["サービス資料の送付", "PoC相談", "料金プランの相談"],
    submitLabel: "相談内容を送信",
    note:
      "送信後、担当者よりサービス資料や導入相談の日程についてご連絡します。",
    fields: [
      { name: "company", label: "会社名", type: "text", required: true },
      { name: "name", label: "お名前", type: "text", required: true },
      { name: "email", label: "メールアドレス", type: "email", required: true },
      {
        name: "message",
        label: "相談内容",
        type: "textarea",
        required: false,
      },
    ],
  },
  footer: {
    description:
      "市場調査AIは、調査結果を営業成果につなげるためのAI市場調査サービスです。",
    links: [
      { label: "GitHub", href: "https://github.com/AandCorg/marketResearch" },
      { label: "お問い合わせ", href: "#contact" },
      { label: "ログイン", href: "#" },
    ],
  },
};
