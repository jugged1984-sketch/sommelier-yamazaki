# 山崎 翔 — 個人サイト

飲食DXプロデューサー / ソムリエ 山崎翔の営業・協業向けポートフォリオ。既存の写真・配色・静的構成を維持しています。

## 正本と公開

- 本番: https://sho-yamazaki.jp/
- VINQ協業ページ: https://sho-yamazaki.jp/vinq/
- GitHub: jugged1984-sketch/sommelier-yamazaki
- 公開ブランチ: main
- デプロイ先: GitHub Pages（既存の pages build and deployment）
- フレームワーク・依存ライブラリ・ローカルビルド工程なし

## 構成

- index.html: HERO / PROJECTS / ABOUT / SERVICES / PHILOSOPHY / CONTACT
- vinq/index.html: スクール・講師向け協業案内、現在の学習ループ、問い合わせ導線
- styles.css: 共通デザイン、スマートフォン対応
- script.js: メニュー、ヘッダー、年表示、既存Formspree送信、VINQ問い合わせ種別の引き継ぎ
- favicon.svg: SYのファビコン
- 1000002187.jpg / 1000002827.jpg / yamazaki-logo.png: 既存写真・ロゴ

`python -m http.server 8000` 等で静的配信して確認できます。VINQページはディレクトリURL `/vinq/` を使用します。内部リンクとアセットは相対パスのため、独自ドメインのルートでも同じ構成で配信できます。

## 掲載範囲

各プロジェクトは紹介のみ。VINQ・AKISEKI・MACHIRU・Tsuki-akari等の本体、DB、デプロイ設定は変更しません。監修者の氏名・経歴は未許諾のため掲載しません。教材連携・OEM・ホワイトラベルは相談段階として記載しています。

お問い合わせは既存のFormspree設定を使用します。実送信による確認は営業宛のテスト通知を発生させるため実施していません。AKISEKIとMACHIRUは紹介と相談導線を設け、外部URLの新規推定はしていません。

## 独自ドメイン

- GitHub Pages Custom domain: `sho-yamazaki.jp`
- 公開元: `main` / `/ (root)`。ルートの `CNAME` にドメインを保持します。
- DNS: apex A は `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`。
- IPv6 を設定する場合: apex AAAA は `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`。
- `www` CNAME は `jugged1984-sketch.github.io`（リポジトリ名なし）。GitHub Pagesでapexへ転送します。
- DNS反映と証明書発行の完了後、Pages設定で Enforce HTTPS を有効にします。
