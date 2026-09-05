# Sommelier Sho Yamazaki — Official Website

東京・湯島を拠点に活動する「ソムリエ山崎（Sommelier Sho Yamazaki）」の公式サイト初期版です。個人ブランドを中心に、ワインバー、コミュニティ、各種ソムリエ／コンサルティングサービスへの入口をまとめた、依存ライブラリのない静的サイトです。

## 起動方法

### そのまま開く

`index.html` をブラウザで開いて閲覧できます。

### ローカルサーバーで確認する（推奨）

```bash
python3 -m http.server 8000
```

ブラウザで <http://localhost:8000> を開いてください。ビルド作業やパッケージのインストールは不要です。

## ファイル構成

```text
.
├── index.html   # ページ構造、文章、SEOメタ情報
├── styles.css   # デザイン、レスポンシブ、アクセシビリティ対応
├── script.js    # モバイルメニュー、ヘッダー、年表示
└── README.md    # 本ドキュメント
```

## ページ構成

1. **HERO** — ブランド名とメインコピー
2. **ABOUT** — ソムリエ山崎の紹介
3. **tsuki-akari** — 湯島のワインバー
4. **GLASS VIBE** — ワイン・ライフスタイルコミュニティ
5. **SERVICES** — 提供サービス一覧
6. **PHILOSOPHY** — ブランド思想
7. **CONTACT** — 仕事・イベント・コンサルティングの問い合わせ導線

各セクションは独立しているため、今後プロジェクトや下層ページを追加しやすい構成です。

## 写真の差し替え予定箇所

現在は写真素材がないため、CSSによる抽象的なプレースホルダーを表示しています。以下の3箇所を実写真に差し替える想定です。

| 場所 | 推奨する写真 | HTML上の目印 |
| --- | --- | --- |
| ABOUT | 山崎氏の縦位置ポートレート | `.portrait.placeholder` |
| tsuki-akari | 店内、ワイン、カウンターの横位置写真 | `.project-dark .project-visual` |
| GLASS VIBE | イベントや乾杯の横位置写真 | `.project-light .project-visual` |

`assets/images/` ディレクトリを作成して画像を保存し、対象要素へ `<picture>` / `<img>` を追加するか、CSSの `background-image` を指定してください。表示速度のため、AVIFまたはWebP形式、適切なサイズ、`width` / `height` の明示、遅延読み込み（ファーストビュー外は `loading="lazy"`）を推奨します。

## 公開前に必要な変更

- `index.html` の `contact@example.com` を正式な問い合わせ先へ変更
- Instagramリンク（現在は `#`）を正式なプロフィールURLへ変更
- OGP画像、canonical URL、faviconを追加
- 実写真と、写真に即した代替テキストを追加
- 必要に応じてプライバシーポリシーや問い合わせフォームを追加

## デザイン／品質方針

- 黒・チャコール・オフホワイトを基調に、控えめなゴールドを使用
- セマンティックHTML、スキップリンク、フォーカス可能な操作、適切なARIA属性を採用
- 850px以下でモバイルレイアウトと開閉式ナビゲーションに切り替え
- `prefers-reduced-motion` に対応
- JavaScriptなしでも本文と問い合わせ導線を閲覧可能
