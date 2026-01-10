# オンクラス感想エクスポーター

オンクラス管理画面の感想データをエクスポートする Chrome 拡張です。期間指定や全ページ一括取得に対応しています。

## 機能

- 感想一覧ページからのデータ抽出
- 全ページ一括取得（ページを自動巡回）
- 期間指定フィルタ
- JSON / CSV でのダウンロード

## 使い方

1. Chrome で `chrome://extensions/` を開く
2. 右上の「デベロッパーモード」を有効化
3. 「パッケージ化されていない拡張機能を読み込む」をクリック
4. このリポジトリのフォルダを選択

## 操作手順

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
