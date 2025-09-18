# app概要

## プロジェクト概要
このプロジェクトは、React + TypeScript + Viteを使用したデザインシステムの開発環境です。再利用可能なUIコンポーネントとデザイントークンを提供し、一貫性のあるユーザーインターフェースの構築を支援します。

## 技術スタック

### フロントエンド
- **React** - ユーザーインターフェース構築ライブラリ
- **TypeScript** - 型安全なJavaScript開発
- **Vite** - 高速なビルドツールと開発サーバー

### スタイリング
- **PostCSS** - CSS処理ツール
- **CSS Modules** - スコープ付きCSS
- **CSS Custom Properties** - デザイントークン管理

### 状態管理
- **Jotai** - 軽量な状態管理ライブラリ
- **SWR** - データフェッチングとキャッシュ

### フォーム管理
- **React Hook Form** - 高性能なフォームライブラリ
- **Zod** - スキーマ検証

### ルーティング
- **React Router DOM** - クライアントサイドルーティング

### テスト
- **Vitest** - 高速なテストランナー
- **React Testing Library** - Reactコンポーネントテスト
- **Jest DOM** - DOM要素のテストマッチャー

### 開発ツール
- **ESLint** - コード品質チェック
- **Prettier** - コードフォーマット
- **Stylelint** - CSS品質チェック
- **Storybook** - コンポーネント開発環境

## 使用しているライブラリ

### 主要な依存関係
- **react-select** - カスタマイズ可能なセレクトボックス
- **clsx** - 条件付きCSSクラス名の管理
- **destyle.css** - CSSリセット

### 開発依存関係
- **Hygen** - コード生成ツール
- **ts-node** - TypeScript実行環境
- **@faker-js/faker** - テスト用ダミーデータ

## プロジェクト構造

```
app/design_system/
├── src/
│   ├── components/          # UIコンポーネント
│   │   ├── ui-elements/     # 基本UI要素
│   │   │   └── CoreComponent/ # コアコンポーネント
│   │   ├── ui-parts/        # 複合UI要素
│   │   ├── features/        # 機能別コンポーネント
│   │   ├── templates/       # レイアウトテンプレート
│   │   └── pages/           # ページコンポーネント
│   ├── tokens/              # デザイントークン
│   │   ├── color.ts         # カラーパレット
│   │   ├── font.ts          # タイポグラフィ
│   │   ├── size.ts          # サイズとスペーシング
│   │   ├── elevation.ts     # シャドウと深度
│   │   └── mq.ts            # メディアクエリ
│   ├── hooks/               # カスタムフック
│   ├── utils/               # ユーティリティ関数
│   ├── types/               # TypeScript型定義
│   ├── routes/              # ルーティング設定
│   └── assets/              # 静的アセット
├── .storybook/              # Storybook設定
├── scripts/                 # ビルドスクリプト
└── _templates/              # Hygenテンプレート
```

## 主要機能

### デザイントークンシステム
- **カラーシステム**: 一貫性のあるカラーパレット
- **タイポグラフィ**: フォントファミリー、サイズ、ウェイトの統一
- **スペーシング**: 8pxベースのグリッドシステム
- **エレベーション**: シャドウと深度の管理

### コアコンポーネント
- **CoreComponent**: 柔軟なスタイリングプロパティを持つ基本コンポーネント
- レイアウト、タイポグラフィ、スペーシング、カラーなどのプロパティを統合
- CSS Modulesを使用したスコープ付きスタイリング

### 開発環境
- **Storybook**: コンポーネントの独立した開発とテスト
- **Hygen**: コンポーネントテンプレートの自動生成
- **Hot Module Replacement**: 高速な開発体験

## スクリプトコマンド

```bash
# 開発サーバー起動
yarn dev

# ビルド
yarn build

# テスト実行
yarn test
yarn test:watch
yarn test:ui

# Storybook起動
yarn storybook

# コンポーネント生成
yarn gen:component

# デザイントークン生成
yarn generate:tokens
```

## ブラウザサポート
- 最新3バージョン
- シェア5%以上
- Firefox ESR
- サポート終了ブラウザは除外

## パッケージマネージャー
- **Yarn** - 高速で信頼性の高いパッケージマネージャー
