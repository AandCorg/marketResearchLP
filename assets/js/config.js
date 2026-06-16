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
    { label: "機能", href: "#features" },
    { label: "料金", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: {
    primary: { label: "導入相談する", href: "#contact" },
    secondary: { label: "資料の構成を見る", href: "#features" },
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
    title: "企業一覧を、次のアクションにつなげる",
    lead:
      "市場調査AIは、検索したい条件に沿って企業名とURLを整理し、営業先の確認や協業候補の検討に使いやすい形で出力します。",
    steps: [
      {
        label: "Select",
        title: "カテゴリーを選択",
        text:
          "ブラウザ上のChat AI画面で、調査したい業界や用途に近いカテゴリーを選びます。",
      },
      {
        label: "Prompt",
        title: "検索内容を入力",
        text:
          "探したい企業の条件をプロンプトとして入力し、候補企業の抽出条件を具体化します。",
      },
      {
        label: "Output",
        title: "企業名とURLを出力",
        text:
          "検索実行後、企業名とURLの一覧を確認し、CSV出力で他サービスや業務にもつなげられます。",
      },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "できること",
    lead:
      "プロンプトに応じた企業一覧を、営業先整理や協業検討に使いやすいアウトプットとして届けます。",
    items: [
      {
        title: "企業一覧の出力",
        text:
          "入力した条件に応じて、候補企業の企業名とURLを一覧で出力します。",
        bullets: ["企業名", "URL", "候補企業一覧"],
      },
      {
        title: "プロンプトに応じた検索",
        text:
          "業界、用途、提供サービスなど、ユーザーが入力した検索内容に沿って候補を整理します。",
        bullets: ["業界条件", "用途条件", "自由入力"],
      },
      {
        title: "CSV出力",
        text:
          "企業一覧をCSVとして出力し、他サービスや社内業務へ連携できます。",
        bullets: ["CSVダウンロード", "外部連携", "社内共有"],
      },
      {
        title: "簡単な操作",
        text:
          "カテゴリー選択、検索内容の入力、検索実行の3ステップで結果を確認できます。",
        bullets: ["カテゴリー選択", "プロンプト入力", "検索実行"],
      },
      {
        title: "営業先整理への活用",
        text:
          "出力した企業一覧をもとに、営業先候補の確認やリスト整備を進められます。",
        bullets: ["候補確認", "リスト整備", "社内共有"],
      },
      {
        title: "協業候補の探索",
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
      "正式な料金は、利用頻度や出力件数、連携範囲を確認したうえでご案内します。",
    note:
      "月額上限付きプランまたは従量課金など、運用状況を確認しながら最適な料金体系を検討しています。",
    plans: [
      {
        name: "PoC",
        price: "個別相談",
        unit: "",
        description: "小規模な検証向け",
        features: ["企業一覧出力", "CSV出力", "利用条件の確認"],
      },
      {
        name: "Standard",
        price: "個別相談",
        unit: "",
        description: "継続利用を検討する方向け",
        features: ["カテゴリー活用", "企業一覧管理", "社内業務連携"],
        highlighted: true,
      },
      {
        name: "Business",
        price: "個別相談",
        unit: "",
        description: "外部サービス連携を含めて使う方向け",
        features: ["CSV連携", "運用相談", "利用範囲の調整"],
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
    points: ["サービス資料の送付", "PoC相談", "料金体系の相談"],
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
      { label: "GitHub", href: "https://github.com/AandCorg/marketResearch" },
      { label: "お問い合わせ", href: "#contact" },
      { label: "ログイン", href: "#" },
    ],
  },
};
