# Design System - Token-Driven Component Architecture

## 概要

このプロジェクトは、**トークン駆動設計**に基づくReactデザインシステムです。デザイントークンを中心とした一貫性のあるコンポーネント実装により、スケーラブルで保守性の高いUIシステムを提供します。

## 🎯 プロジェクトビジョン

**「デザイントークンによる統一されたUI開発体験の実現」**

すべてのコンポーネントがデザイントークンを基盤として実装され、デザインとコードの一貫性を保ちながら、開発者が直感的にUIを構築できる環境を提供します。

## 🏗️ アーキテクチャ原則

### 1. トークン駆動設計
```
デザイントークン → コンポーネント → アプリケーション
```

- **デザイントークン**: 色、タイポグラフィ、スペーシング等の基本的な値
- **コンポーネント**: トークンを使用して構築される再利用可能なUI要素
- **アプリケーション**: コンポーネントを組み合わせて構築される最終的なUI

### 2. レイヤード構造
```
src/
├── system/
│   ├── tokens/          # デザイントークン定義
│   │   ├── color.ts    # カラートークン
│   │   ├── typography.ts # タイポグラフィトークン
│   │   └── spacing.ts  # スペーシングトークン
│   └── foundations/     # 基盤システム
├── components/
│   ├── ui-elements/     # 基本UIコンポーネント
│   ├── layout/         # レイアウトコンポーネント
│   └── patterns/       # 複合パターン
└── utils/              # 共通ユーティリティ
```

### 3. 一貫性の原則
- **単一情報源**: すべてのデザイン値はトークンから派生
- **型安全性**: TypeScriptによる厳密な型定義
- **レスポンシブ対応**: すべてのコンポーネントでブレイクポイント対応

## 🚀 技術スタック

- **React 18** + **TypeScript** - モダンなUI開発
- **Vite** - 高速な開発環境
- **CSS Modules** - スコープ付きスタイリング
- **Design Tokens** - JSON/TypeScript形式のトークン管理

## 🎨 デザイントークンシステム

### カラートークン
```typescript
// システム基本色
export const baseColor = {
  white: "#FFFFFF",
  black: "#000000",
  gray: {
    100: "#F5F5F5",
    500: "#9E9E9E",
    900: "#212121"
  }
};

// セマンティックカラー
export const semanticColor = {
  primary: baseColor.blue[500],
  error: baseColor.red[500],
  success: baseColor.green[500]
};
```

### タイポグラフィトークン
```typescript
export const typography = {
  fontFamily: {
    primary: "'Inter', sans-serif",
    monospace: "'JetBrains Mono', monospace"
  },
  fontSize: {
    xs: "0.75rem",    // 12px
    sm: "0.875rem",   // 14px
    base: "1rem",     // 16px
    lg: "1.125rem",   // 18px
    xl: "1.25rem"     // 20px
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75
  }
};
```

## 🧩 コンポーネント設計指針

### 1. トークンベース実装
すべてのスタイル値はトークンから取得：

```tsx
// ❌ 直接値の指定
<div style={{ color: '#FF0000', fontSize: '16px' }}>

// ✅ トークンベース
<Typography color="error" size="base">
```

### 2. レスポンシブ対応
すべてのビジュアルプロパティでResponsiveValueをサポート：

```tsx
<Typography
  size={{ sp: "sm", md: "base", lg: "lg" }}
  textAlign={{ sp: "center", md: "left" }}
>
  レスポンシブテキスト
</Typography>
```

### 3. セマンティックHTML
適切なHTML要素の自動選択：

```tsx
// size="h1" → <h1>タグで出力
<Typography size="h1">ページタイトル</Typography>

// 明示的な指定も可能
<Typography as="span" size="h1">スタイルのみh1</Typography>
```

## 📚 開発ガイド

### コンポーネント作成手順

1. **トークン定義の確認**
   ```typescript
   // 必要なトークンが存在するか確認
   import { colors, typography, spacing } from '@/system/tokens';
   ```

2. **型定義の作成**
   ```typescript
   export interface ComponentProps {
     variant?: 'primary' | 'secondary';
     size?: ResponsiveValue<'sm' | 'md' | 'lg'>;
   }
   ```

3. **スタイル生成ロジック**
   ```typescript
   const createStyles = (props: ComponentProps) => {
     // トークンベースのスタイル生成
     return {
       className: generateClasses(props),
       inlineStyles: generateInlineStyles(props)
     };
   };
   ```

4. **コンポーネント実装**
   ```tsx
   export const Component = (props: ComponentProps) => {
     const { className, inlineStyles } = createStyles(props);
     return <div className={className} style={inlineStyles} />;
   };
   ```

### ベストプラクティス

#### ✅ 推奨事項
- トークン値の使用を最優先
- レスポンシブ対応の実装
- TypeScript型の活用
- セマンティックHTMLの使用

#### ❌ 避けるべき事項
- 直接的なCSS値の指定
- 固定値によるスタイリング
- 非セマンティックなHTML構造
- トークン外の値の使用

## 🔧 開発環境セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 型チェック
npm run type-check

# リント
npm run lint
```

## 📖 ドキュメント

### コンポーネントドキュメント
各コンポーネントには包括的なドキュメントを用意：

- **基本ガイド** (`docs/index.md`) - 概要と基本的な使用方法
- **スタイルガイド** (`docs/style-guide.md`) - バリエーションと使用パターン
- **実装ガイド** (`docs/implementation-guide.md`) - 詳細な実装例
- **技術仕様** (`docs/design-specifications.md`) - アーキテクチャと仕様
- **ロードマップ** (`docs/roadmap.md`) - 課題と改善計画

### 参考例: Typography コンポーネント
```
src/components/ui-elements/typography/
├── index.tsx                    # メインコンポーネント
├── types.ts                     # 型定義
├── style-extensions.ts          # スタイル生成ロジック
├── styles/                      # CSSモジュール
└── docs/                        # ドキュメント
    ├── index.md                # 基本ガイド
    ├── style-guide.md          # スタイルガイド
    ├── implementation-guide.md  # 実装ガイド
    ├── design-specifications.md # 技術仕様
    └── roadmap.md              # ロードマップ
```

## 🎯 目標指標

### 品質目標
- **型安全性**: TypeScriptエラー 0件
- **一貫性**: すべてのスタイル値がトークンベース
- **テストカバレッジ**: 90%以上
- **アクセシビリティ**: WCAG 2.1 AA準拠

### パフォーマンス目標
- **バンドルサイズ**: 最適化されたトークンシステム
- **レンダリング**: 16ms以内の初期表示
- **レスポンシブ**: 滑らかなブレイクポイント遷移

### 開発者体験目標
- **学習コストの低減**: 直感的なAPI設計
- **生産性向上**: 豊富なドキュメントとサンプル
- **保守性**: 明確なアーキテクチャと命名規則

## 🤝 コントリビューション

1. **トークン駆動**: 新機能もトークンベースで実装
2. **ドキュメント**: 包括的なドキュメント作成
3. **テスト**: 十分なテストカバレッジ
4. **型安全性**: 厳密なTypeScript型定義

## 📄 ライセンス

MIT License - 詳細は[LICENSE](./LICENSE)ファイルを参照
