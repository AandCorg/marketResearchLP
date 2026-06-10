# marketResearchAI LP

市場調査AIのサービス紹介・販売用ランディングページテンプレートです。

## ファイル構成

- `index.html`: LPのセクション枠です。表示文言は極力持たせていません。
- `assets/js/config.js`: サービス名、CTA、価格、機能、FAQ、リンクなどの管理ファイルです。
- `assets/js/main.js`: `config.js`を読み込み、各セクションへ描画します。
- `assets/css/styles.css`: LPの見た目を定義します。
- `assets/images/hero-market-research-ai.png`: ヒーロー背景画像です。

## サービス名の変更

`assets/js/config.js`の以下を変更してください。

```js
service: {
  nameJa: "市場調査AI",
  nameEn: "marketResearchAI",
}
```

## 主な差し替え箇所

- `service`: サービス名、会社名、問い合わせ先、ログインURL
- `navigation`: ヘッダーナビゲーション
- `cta`: CTAボタン
- `hero`: ファーストビュー
- `problems`, `solution`, `features`: 訴求内容
- `pricing`: 料金プラン
- `faq`: よくある質問
- `contact`: 問い合わせフォーム表示項目
- `footer`: フッターリンク

## 表示確認

静的HTMLなので、`index.html`をブラウザで開くだけで確認できます。
