window.LP_CONFIG = {
  service: {
    nameJa: "市場調査AI",
    nameEn: "marketResearchAI",
    companyName: "株式会社A&Cコンサルティング",
    description:
      "ユーザーのプロンプトに応じて企業名とURLの一覧を出力し、営業先整理や協業候補の検討に使える市場調査支援サービスです。",
    repositoryUrl: "https://github.com/AandCorg/marketResearch",
    loginUrl: "#",
    contactEmail: "contact@example.com",
  },
  assets: {
    heroImage: "assets/images/hero-market-research-ai.png",
    heroImageAlt:
      "企業一覧を確認しながら調査を進めるビジネスチーム",
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
    { label: "料金", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: {
    primary: { label: "導入相談する", href: "#contact" },
    secondary: { label: "資料の構成を見る", href: "#solution" },
    login: { label: "ログイン", href: "#" },
  },
  hero: {
    eyebrow: "AI market research platform",
    titleTemplate: "{serviceNameJa}",
    lead:
      "カテゴリーを選び、検索内容を入力するだけで、条件に合う企業名とURLの一覧を出力します。営業先の整理や協業候補の検討、CSV連携に活用できます。",
    points: [
      "カテゴリー選択とプロンプト入力で企業一覧を生成",
      "企業名とURLを中心にシンプルに出力",
      "CSV出力で他サービスや業務へ連携",
    ],
    panel: {
      label: "Output example",
      title: "プロンプトから企業一覧を出力",
      metrics: [
        { value: "カテゴリ", label: "対象領域を選択" },
        { value: "プロンプト", label: "探したい条件を入力" },
        { value: "CSV出力", label: "業務連携に活用" },
      ],
      insightTitle: "出力イメージ",
      insight:
        "条件に合う企業を、企業名とURLの一覧として確認できます。",
    },
  },
  problems: {
    eyebrow: "Current pain",
    title: "市場調査は、まだ人の手に頼る部分が多い",
    lead:
      "営業先や協業先の候補を探す現場で、調査業務が止まりやすいポイントを整理しました。",
    items: [
      {
        title: "調査から報告まで時間がかかる",
        text:
          "候補企業の検索、URL確認、一覧化を手作業で進めると時間がかかり、次の検討に移りづらくなります。",
      },
      {
        title: "生成AIの回答品質に不安がある",
        text:
          "必要な情報が企業名だけ、URLだけなどに分かれると、営業先整理や協業検討に使いづらくなります。",
      },
      {
        title: "専門人材なしでは活用しづらい",
        text:
          "検索条件の作り込みや出力形式の調整に慣れが必要だと、現場で継続利用しにくい課題があります。",
      },
    ],
  },
  solution: {
    eyebrow: "Solution",
    title: "課題に対応した解決手段",
    lead:
      "Current painで挙げた調査の詰まりどころに対して、現場で使いやすい出力と操作性で解決手段を提供します。",
    items: [
      {
        title: "一覧化にかかる手間を減らす",
        text:
          "入力した条件に応じて、候補企業の企業名とURLを一覧で出力します。",
        bullets: ["企業名", "URL", "候補企業一覧"],
      },
      {
        title: "欲しい条件で候補を探せる",
        text:
          "業界、用途、提供サービスなど、ユーザーが入力した検索内容に沿って候補を整理します。",
        bullets: ["業界条件", "用途条件", "自由入力"],
      },
      {
        title: "他業務へ連携しやすい",
        text:
          "企業一覧をCSVとして出力し、他サービスや社内業務へ連携できます。",
        bullets: ["CSVダウンロード", "外部連携", "社内共有"],
      },
      {
        title: "迷わず操作できる",
        text:
          "カテゴリー選択、検索内容の入力、検索実行の3ステップで結果を確認できます。",
        bullets: ["カテゴリー選択", "プロンプト入力", "検索実行"],
      },
      {
        title: "営業先整理に使いやすい",
        text:
          "出力した企業一覧をもとに、営業先候補の確認やリスト整備を進められます。",
        bullets: ["候補確認", "リスト整備", "社内共有"],
      },
      {
        title: "協業候補の探索に使える",
        text:
          "自社サービスや企画と相性がありそうな企業を探し、協業検討の入口として使えます。",
        bullets: ["協業先候補", "関連企業探索", "初期調査"],
      },
    ],
  },
  workflow: {
    eyebrow: "Workflow",
    title: "利用の流れ",
    lead:
      "Chat AIのブラウザ画面で、カテゴリー選択から企業一覧の確認まで進められます。",
    items: [
      {
        title: "カテゴリーを選択",
        text: "調査したい業界や用途に近いカテゴリーを選びます。",
      },
      {
        title: "検索内容を記入",
        text: "探したい企業の条件を、プロンプトとして入力します。",
      },
      {
        title: "検索を実行",
        text: "検索実行を押すと、企業名とURLの一覧が出力されます。",
      },
    ],
  },
  useCases: {
    eyebrow: "Use cases",
    title: "想定ユースケース",
    lead:
      "営業先整理や協業検討につながりやすい利用場面を紹介します。",
    items: [
      {
        title: "新規事業の立ち上げ",
        text:
          "関連企業を一覧化し、初期調査やヒアリング先の整理に活用します。",
      },
      {
        title: "協業候補の探索",
        text:
          "自社商品やサービスと連携できそうな企業を探し、協業検討の候補リストを作ります。",
      },
      {
        title: "営業先の開拓",
        text:
          "条件に合う企業名とURLを出力し、営業先候補の整理に活用します。",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "料金プラン",
    lead:
      "利用回数や連携範囲に応じて選べる料金プランを用意しています。",
    note:
      "詳細な利用条件や導入支援の範囲は、お問い合わせ時にご案内します。",
    plans: [
      {
        name: "Free",
        price: "無料",
        unit: "",
        description: "サービスを試してみたい方",
        detail: "2週間限定で上限20回まで",
        features: ["導入方法の確認", "利用方法の確認", "成果の確認"],
      },
      {
        name: "Standard",
        price: "準備中",
        unit: "",
        description: "継続的にサービスを利用したい方",
        detail: "月あたり100回まで",
        features: ["最新情報の活用", "企業一覧管理", "業務利用"],
        highlighted: true,
      },
      {
        name: "Unlimited",
        price: "個別対応",
        unit: "",
        description: "独自のrag環境を構築したい方",
        detail: "お問い合わせください",
        features: ["独自DBの構築", "運用相談", "外部連携"],
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "よくある質問",
    lead:
      "利用前の不安を減らすため、出力内容、利用開始、外部連携を先に説明します。",
    items: [
      {
        question: "どのような情報を調査できますか？",
        answer:
          "ユーザーが入力したプロンプトに応じて、条件に合う企業名とURLの一覧出力を想定しています。",
      },
      {
        question: "出力結果はそのまま営業に使えますか？",
        answer:
          "出力結果は候補企業の初期リストとしてご利用ください。営業や協業の判断前に、各社サイトなどで最新情報を確認する運用を想定しています。",
      },
      {
        question: "専門知識がなくても使えますか？",
        answer:
          "Chat AIのブラウザ画面で、カテゴリー選択、検索内容の入力、検索実行の順に操作できます。",
      },
      {
        question: "TOIAWASEKUNとの連携はできますか？",
        answer:
          "CSV出力した企業一覧をもとに、外部サービスや社内業務へ連携する使い方を個別にご相談いただけます。",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "企業一覧を営業・協業検討に活用したい方へ",
    lead:
      "初回相談では、探したい企業の条件、出力件数、CSV連携の有無を確認し、導入イメージを整理します。",
    points: ["サービス資料の送付", "導入相談", "料金体系の相談"],
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
      "市場調査AIは、企業名とURLの一覧出力で営業先整理や協業候補の検討を支援するサービスです。",
    links: [
      { label: "お問い合わせ", href: "#contact" },
      { label: "ログイン", href: "#" },
    ],
  },
};
