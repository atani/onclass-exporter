# オンクラス感想エクスポーター

> **このプロジェクトはアーカイブされました**
>
> 後継の [オンクラスエンハンサー](https://chromewebstore.google.com/detail/%E3%82%AA%E3%83%B3%E3%82%AF%E3%83%A9%E3%82%B9%E3%82%A8%E3%83%B3%E3%83%8F%E3%83%B3%E3%82%B5%E3%83%BC/clfpdmnjjknciooaakdojmpfbfgcolgn) をご利用ください。
> 感想エクスポート機能に加え、より多くの機能が利用できます。

---

オンクラス管理画面の感想データをエクスポートする Chrome 拡張です。期間指定や全ページ一括取得に対応しています。

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/hdjdlceoifbamleejbffmmmjcfnokiek)](https://chromewebstore.google.com/detail/%E3%82%AA%E3%83%B3%E3%82%AF%E3%83%A9%E3%82%B9%E6%84%9F%E6%83%B3%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%BC/hdjdlceoifbamleejbffmmmjcfnokiek)

## インストール

[Chrome Web Store からインストール](https://chromewebstore.google.com/detail/%E3%82%AA%E3%83%B3%E3%82%AF%E3%83%A9%E3%82%B9%E6%84%9F%E6%83%B3%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%BC/hdjdlceoifbamleejbffmmmjcfnokiek)

## 機能

- 感想一覧ページからのデータ抽出
- 全ページ一括取得（ページを自動巡回）
- 期間指定フィルタ
- JSON / CSV でのダウンロード

## 使い方

1. オンクラス管理画面の感想ページを開く
2. 拡張のアイコンをクリック
3. 期間を指定（任意）
4. 「全ページ一括取得」または「このページのみ」をクリック

## 出力形式

- JSON: `onclass-feedbacks-YYYY-MM-DD.json` または `onclass-feedbacks-all-YYYY-MM-DD.json`
- CSV: `onclass-feedbacks-YYYY-MM-DD.csv`

## 対象 URL

- `https://manager.the-online-class.com/*`

## 注意事項

- 全ページ取得はページ数に応じて時間がかかります。進捗はページ右上のバーで確認できます。
- 管理画面の構造が変更された場合、抽出が動作しないことがあります。

## 開発

- `manifest.json` は Manifest V3 です。
- ポップアップ UI: `popup.html` / `popup.js`
- 抽出ロジック: `content.js`
