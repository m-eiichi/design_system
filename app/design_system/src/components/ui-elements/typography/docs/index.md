# Typography コンポーネント

Typographyコンポーネントは、デザインシステムにおけるテキスト表示の統一されたインターフェースを提供する汎用コンポーネントです。

## 🚀 クイックスタート

### 基本的な使用方法

```tsx
import { Typography } from '@/components/ui-elements/typography';

// シンプルなテキスト表示
<Typography>基本的なテキスト</Typography>

// 見出しとして使用
<Typography as="h1" size="h1">ページタイトル</Typography>

// スタイル付きテキスト
<Typography color="primary" fontWeight="bold">
  重要なメッセージ
</Typography>
```

### レスポンシブ対応

```tsx
<Typography
  size={{ sp: "body", md: "h3" }}
  textAlign={{ sp: "center", md: "left" }}
>
  デバイスに応じて変わるテキスト
</Typography>
```

## ✨ 主な機能

- **🎯 セマンティックHTML**: `size`に基づく適切なHTMLタグの自動選択
- **📱 レスポンシブ対応**: すべてのプロパティでブレイクポイント別スタイル
- **⚡ パフォーマンス**: 静的値はCSSクラス、動的値はインラインスタイル
- **♿ アクセシビリティ**: 適切な見出し階層とセマンティック構造

## 📚 ドキュメント

### 基本ドキュメント
- **[スタイルガイド](./style-guide.md)** - サイズ、カラー、使用パターンの詳細
- **[実装ガイド](./implementation-guide.md)** - 実践的な実装例とベストプラクティス

### 技術ドキュメント
- **[詳細設計書](./design-specifications.md)** - アーキテクチャと技術仕様
- **[ロードマップ](./roadmap.md)** - 課題と改善計画

## 🎨 よく使用されるパターン

### ページ見出し構造
```tsx
<Typography as="h1" size="h1" margin="bottom">
  ページタイトル
</Typography>
<Typography color="secondary" size="subtitle1" margin="both">
  ページの説明文
</Typography>
```

### カードコンテンツ
```tsx
<Typography as="h3" size="h4" fontWeight="bold" margin="bottom">
  カードタイトル
</Typography>
<Typography color="description" margin="bottom">
  カードの詳細説明テキスト
</Typography>
<Typography size="caption" color="secondary">
  更新日: 2024年3月15日
</Typography>
```

### フォームラベル
```tsx
<Typography as="label" size="subtitle2" fontWeight="bold">
  入力項目名 *
</Typography>
<Typography size="caption" color="description">
  入力に関する説明やヒント
</Typography>
```

## 🔧 プロパティ早見表

### 基本プロパティ
| プロパティ | 型 | 説明 | 例 |
|-----------|----|----|---|
| `children` | `ReactNode` | 表示するテキスト | `"テキスト"` |
| `as` | `string` | HTMLタグ | `"h1"`, `"p"`, `"span"` |
| `size` | `TypographySize` | テキストサイズ | `"h1"`, `"body"`, `"caption"` |
| `color` | `ColorType` | テキストカラー | `"primary"`, `"error"`, `"success"` |

### スタイリングプロパティ
| プロパティ | 説明 | 例 |
|-----------|----|----|
| `textAlign` | テキスト配置 | `"left"`, `"center"`, `"right"` |
| `margin` | マージン設定 | `"both"`, `"bottom"`, `"none"` |
| `fontWeight` | フォント太さ | `"normal"`, `"bold"` |
| `ellipsis` | テキスト省略 | `true`, `false` |

## ⚠️ 重要な注意事項

### セマンティックHTML
- 見出しの階層を正しく保つ（h1 → h2 → h3...）
- `as`プロパティは必要な場合のみ使用

### パフォーマンス
- 静的な値はトークン値を使用してCSSクラス化
- 動的な値は最小限に抑制

### アクセシビリティ
- 適切なコントラスト比を維持
- 意味的に正しいHTML構造を使用

## 🔄 マイグレーション

### 従来のHTMLタグからの移行
```tsx
// Before
<h1 className="title">タイトル</h1>
<p className="description">説明文</p>

// After
<Typography as="h1" size="h1">タイトル</Typography>
<Typography color="description">説明文</Typography>
```

### スタイル付きコンポーネントからの移行
```tsx
// Before
<StyledTitle $fontSize="24px" $color="#333">
  タイトル
</StyledTitle>

// After
<Typography size="h3" color="primary">
  タイトル
</Typography>
```

## 🆘 トラブルシューティング

### よくある問題

**Q: スタイルが適用されない**
```tsx
// ❌ 間違い
<Typography style={{ fontSize: '20px' }}>

// ✅ 正しい
<Typography size="h4">
```

**Q: レスポンシブが効かない**
```tsx
// ❌ 間違い
<Typography size="h1,h2,h3">

// ✅ 正しい
<Typography size={{ sp: "h3", md: "h2", lg: "h1" }}>
```

**Q: 見出し階層がおかしい**
```tsx
// ❌ 間違い（h1の後にh3）
<Typography as="h1">メイン</Typography>
<Typography as="h3">サブ</Typography>

// ✅ 正しい
<Typography as="h1">メイン</Typography>
<Typography as="h2">サブ</Typography>
```

## 🤝 コントリビューション

改善提案やバグ報告は[ロードマップ](./roadmap.md)を参照して、適切なチャンネルでお知らせください。

## 📝 更新履歴

- **v1.0.0**: 初期リリース
- セマンティックHTML自動選択機能
- レスポンシブ対応
- トークンベースのスタイリング