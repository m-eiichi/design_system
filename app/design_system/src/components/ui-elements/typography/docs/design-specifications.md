# Typography コンポーネント 詳細設計書

## 概要

Typography コンポーネントは、デザインシステムにおけるテキスト表示の統一されたインターフェースを提供する汎用コンポーネントです。セマンティックHTML、レスポンシブ対応、動的スタイリングをサポートします。

## アーキテクチャ

### コンポーネント構成

```
typography/
├── index.tsx                    # メインコンポーネント
├── types.ts                     # TypeScript型定義
├── style-extensions.ts          # スタイル生成ロジック
├── styles/                      # CSSモジュール
│   ├── styles.module.css       # コアスタイル
│   └── root.module.css         # ルートスタイル定義
├── stories/                     # Storybookストーリー
├── __tests__/                   # テストファイル
├── docs/                        # ドキュメントフォルダ
│   ├── design-specifications.md # 詳細設計書（本ファイル）
│   ├── style-guide.md          # スタイルガイド
│   └── implementation-guide.md  # 実装ガイド
└── docs.md                      # 基本ドキュメント
```

### 主要機能

1. **セマンティックHTML自動選択**
   - `size`プロパティに基づく適切なHTMLタグの自動選択
   - `as`プロパティによる明示的なタグ指定のオーバーライド

2. **レスポンシブ対応**
   - すべての視覚的プロパティでResponsiveValueをサポート
   - ブレイクポイント別スタイル適用

3. **ハイブリッドスタイリング**
   - 静的な値：CSSクラスとして最適化
   - 動的な値：インラインスタイルとして適用

## プロパティ仕様

### 基本プロパティ

| プロパティ | 型 | デフォルト | 説明 |
|-----------|----|-----------|----||
| `children` | `React.ReactNode` | - | 表示するテキストコンテンツ |
| `as` | `"p" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "span" \| "a"` | 自動選択 | レンダリングするHTMLタグ |
| `size` | `ResponsiveValue<TypographySize>` | 自動選択 | テキストサイズ |
| `color` | `StatusColorType \| TextColorType \| "primary" \| "secondary"` | `"primary"` | テキストカラー |

### スタイリングプロパティ

| プロパティ | 型 | デフォルト | 説明 |
|-----------|----|-----------|----||
| `textAlign` | `ResponsiveValue<TextAlignType>` | `"left"` | テキスト配置 |
| `margin` | `ResponsiveValue<"both" \| "bottom" \| "none">` | `"none"` | マージン設定 |
| `fontWeight` | `ResponsiveValue<FontWeightType>` | - | フォントウェイト |
| `fontSize` | `ResponsiveValue<FontSizeType>` | - | フォントサイズ |
| `display` | `ResponsiveValue<DisplayType>` | - | 表示方法 |
| `cursor` | `ResponsiveValue<CursorType>` | - | カーソルスタイル |
| `ellipsis` | `boolean` | `false` | テキスト省略表示 |

### イベントプロパティ

| プロパティ | 型 | デフォルト | 説明 |
|-----------|----|-----------|----||
| `onClick` | `() => void` | - | クリックイベントハンドラー |
| `style` | `React.CSSProperties` | - | 直接的なスタイル指定 |

## タイプ定義

### TypographySize

```typescript
type TypographySize =
  | "body"       // 本文テキスト
  | "caption"    // キャプション
  | "h1"         // 見出し1（最大）
  | "h2"         // 見出し2
  | "h3"         // 見出し3
  | "h4"         // 見出し4
  | "h5"         // 見出し5
  | "h6"         // 見出し6（最小）
  | "subtitle1"  // サブタイトル1
  | "subtitle2"; // サブタイトル2
```

## 自動選択ロジック

### HTMLタグ自動選択

1. **`as`プロパティが指定されている場合**
   - 指定されたタグを使用

2. **`as`プロパティが未指定の場合**
   - `size`プロパティに基づいて自動選択
   - `h1`-`h6` サイズ → 対応する `<h1>`-`<h6>` タグ
   - その他のサイズ → `<p>` タグ
   - `size`も未指定の場合 → `<p>` タグ

### デフォルトサイズ選択

1. **`size`プロパティが指定されている場合**
   - 指定されたサイズを使用

2. **`size`プロパティが未指定で`as`が指定されている場合**
   - `h1`-`h6` タグ → 対応する `h1`-`h6` サイズ
   - `p`, `span`, `a` タグ → `body` サイズ
   - その他 → `body` サイズ

3. **両方とも未指定の場合**
   - デフォルトサイズは適用されない

## スタイル生成システム

### createStyle関数

`style-extensions.ts`の`createStyle`関数が以下の処理を実行：

1. **早期リターン最適化**
   - すべてのプロパティが`undefined`の場合、基本クラスのみ返却

2. **カラープロパティ処理**
   - トークンマップとの照合
   - 静的値 → CSSクラス
   - 動的値 → インラインスタイル

3. **一般プロパティ処理**
   - レスポンシブ値の処理
   - CSS変数への変換

### CSSクラス命名規則

```css
/* サイズクラス */
.h1, .h2, .h3, .h4, .h5, .h6 { /* 見出しサイズ */ }
.body { /* 本文サイズ */ }
.caption { /* キャプションサイズ */ }
.subtitle1, .subtitle2 { /* サブタイトルサイズ */ }

/* マージンクラス */
.margin_both { /* 上下マージン */ }
.margin_bottom { /* 下マージンのみ */ }

/* ユーティリティクラス */
.ellipsis { /* テキスト省略 */ }
.core_component { /* 基本スタイル */ }
```

## 使用例

### 基本的な使用

```tsx
// 自動的に<p>タグ、bodyサイズで表示
<Typography>基本テキスト</Typography>

// 明示的に見出しタグとサイズを指定
<Typography as="h1" size="h1">メインタイトル</Typography>

// サイズのみ指定（自動的に<h2>タグが選択される）
<Typography size="h2">セクションタイトル</Typography>
```

### レスポンシブスタイリング

```tsx
<Typography
  size={{
    sp: "body",
    md: "h3"
  }}
  textAlign={{
    sp: "center",
    md: "left"
  }}
  color="primary"
>
  レスポンシブテキスト
</Typography>
```

### 高度なスタイリング

```tsx
<Typography
  as="span"
  color="secondary"
  fontWeight="bold"
  cursor="pointer"
  ellipsis
  onClick={() => console.log('clicked')}
>
  インタラクティブテキスト
</Typography>
```

## パフォーマンス考慮事項

1. **メモ化の活用**
   - `useMemo`でタグとサイズの計算を最適化
   - 不要な再計算を防止

2. **早期リターン**
   - プロパティが未定義の場合の最適化
   - 最小限のスタイル適用

3. **CSSクラスの優先使用**
   - 静的な値は可能な限りCSSクラスとして適用
   - ブラウザの最適化を活用

## 拡張性

### 新しいサイズの追加

1. `types.ts`の`TypographySize`に新しい値を追加
2. `styles.module.css`に対応するCSSクラスを定義
3. 必要に応じて自動選択ロジックを更新

### 新しいカラーパレットの対応

1. カラートークンシステムに新しい色を追加
2. `style-extensions.ts`のカラーマップを更新
3. 型定義を更新

## テスト戦略

1. **ユニットテスト**
   - プロパティによる適切なHTML生成
   - 自動選択ロジックの検証
   - スタイル生成の正確性

2. **統合テスト**
   - レスポンシブ動作の確認
   - イベントハンドリングの検証

3. **ビジュアルリグレッションテスト**
   - Storybookを活用したスタイルの一貫性確認

## 制約事項

1. **HTMLタグの制限**
   - サポートされるタグは事前定義されたもののみ
   - カスタムタグの動的生成は不可

2. **レスポンシブ値の制限**
   - `as`プロパティはレスポンシブ値をサポートしない
   - セマンティクスの一貫性を保つため

3. **スタイルの優先順位**
   - インラインスタイルがCSSクラスより優先される
   - 予期しないスタイルの上書きに注意