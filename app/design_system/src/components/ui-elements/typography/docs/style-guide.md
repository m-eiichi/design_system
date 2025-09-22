# Typography Style Guide & Variants

## サイズバリエーション

### 見出しサイズ (Heading Sizes)

| サイズ | 用途 | フォントサイズ | 行間 | 使用場面 |
|-------|------|------------|------|----------|
| `h1` | メインタイトル | 32px (2rem) | 1.2 | ページタイトル、セクション最上位 |
| `h2` | セクションタイトル | 28px (1.75rem) | 1.25 | 主要セクション見出し |
| `h3` | サブセクションタイトル | 24px (1.5rem) | 1.3 | サブセクション見出し |
| `h4` | 小見出し | 20px (1.25rem) | 1.35 | カテゴリ見出し |
| `h5` | 詳細見出し | 18px (1.125rem) | 1.4 | 詳細項目見出し |
| `h6` | 最小見出し | 16px (1rem) | 1.45 | 補助的見出し |

### 本文・補助テキストサイズ

| サイズ | 用途 | フォントサイズ | 行間 | 使用場面 |
|-------|------|------------|------|----------|
| `body` | 標準本文 | 16px (1rem) | 1.5 | 通常のテキスト、段落 |
| `subtitle1` | 大サブタイトル | 18px (1.125rem) | 1.4 | 重要な説明文 |
| `subtitle2` | 小サブタイトル | 14px (0.875rem) | 1.4 | 補助説明文 |
| `caption` | キャプション | 12px (0.75rem) | 1.3 | 注釈、説明文、ラベル |

## カラーバリエーション

### プライマリカラー

```tsx
<Typography color="primary">メインテキスト</Typography>
<Typography color="secondary">セカンダリテキスト</Typography>
```

### ステータスカラー

```tsx
<Typography color="success">成功メッセージ</Typography>
<Typography color="error">エラーメッセージ</Typography>
<Typography color="warning">警告メッセージ</Typography>
<Typography color="info">情報メッセージ</Typography>
```

### 特殊カラー

```tsx
<Typography color="description">説明文</Typography>
<Typography color="link">リンクテキスト</Typography>
<Typography color="disabled">無効テキスト</Typography>
<Typography color="white">白色テキスト</Typography>
```

## レスポンシブスタイリング

### ブレイクポイント対応

```tsx
// スマートフォンでは小さく、タブレット以上では大きく表示
<Typography
  size={{
    sp: "body",
    md: "h3",
    lg: "h2"
  }}
>
  レスポンシブタイトル
</Typography>

// デバイスに応じてテキスト配置を変更
<Typography
  textAlign={{
    sp: "center",
    md: "left"
  }}
>
  レスポンシブ配置
</Typography>
```

### マージン設定

```tsx
// 上下にマージンを設定
<Typography margin="both">
  上下マージン付きテキスト
</Typography>

// 下のみマージンを設定
<Typography margin="bottom">
  下マージン付きテキスト
</Typography>

// マージンなし
<Typography margin="none">
  マージンなしテキスト
</Typography>
```

## フォントウェイトバリエーション

```tsx
<Typography fontWeight="normal">通常の太さ</Typography>
<Typography fontWeight="bold">太字</Typography>

// レスポンシブフォントウェイト
<Typography
  fontWeight={{
    sp: "normal",
    md: "bold"
  }}
>
  レスポンシブ太さ
</Typography>
```

## テキスト配置オプション

```tsx
<Typography textAlign="left">左寄せ</Typography>
<Typography textAlign="center">中央寄せ</Typography>
<Typography textAlign="right">右寄せ</Typography>
<Typography textAlign="justify">両端揃え</Typography>
```

## 表示方法の制御

```tsx
// インライン表示
<Typography display="inline">インライン</Typography>

// ブロック表示
<Typography display="block">ブロック</Typography>

// インラインブロック表示
<Typography display="inlineBlock">インラインブロック</Typography>
```

## 特殊機能

### テキスト省略

```tsx
// 長いテキストを省略記号で表示
<Typography ellipsis>
  これは非常に長いテキストで、幅を超える場合は省略記号（...）で表示されます
</Typography>
```

### インタラクティブテキスト

```tsx
<Typography
  cursor="pointer"
  onClick={() => console.log('クリックされました')}
>
  クリック可能なテキスト
</Typography>
```

## 使用パターン例

### ページヘッダー

```tsx
<div>
  <Typography as="h1" size="h1" margin="bottom">
    ページタイトル
  </Typography>
  <Typography color="secondary" margin="bottom">
    ページの説明文がここに入ります
  </Typography>
</div>
```

### カード内コンテンツ

```tsx
<div>
  <Typography as="h3" size="h4" margin="bottom">
    カードタイトル
  </Typography>
  <Typography size="body" color="description" margin="bottom">
    カードの詳細説明。ここには商品やサービスの詳細が記載されます。
  </Typography>
  <Typography size="caption" color="secondary">
    最終更新: 2024年3月15日
  </Typography>
</div>
```

### フォーム要素ラベル

```tsx
<div>
  <Typography as="label" size="subtitle2" margin="bottom">
    必須項目 *
  </Typography>
  <Typography size="caption" color="description">
    この項目は必ず入力してください
  </Typography>
</div>
```

### エラーメッセージ

```tsx
<Typography color="error" size="caption">
  入力内容に誤りがあります。正しい形式で入力してください。
</Typography>
```

### レスポンシブヒーロー

```tsx
<Typography
  as="h1"
  size={{
    sp: "h3",
    md: "h1"
  }}
  textAlign={{
    sp: "center",
    md: "left"
  }}
  margin="both"
>
  レスポンシブなヒーロータイトル
</Typography>
```

## ベストプラクティス

### セマンティックHTML

- **適切なHTML要素を使用**: 見出しには`h1-h6`、段落には`p`を使用
- **構造の階層を維持**: `h1` → `h2` → `h3`の順序を守る
- **`as`プロパティの適切な使用**: デザインとセマンティクスが異なる場合のみ使用

### アクセシビリティ

- **コントラスト比の確保**: 背景とテキストの十分なコントラストを維持
- **フォントサイズの配慮**: 最小サイズは12px以上を推奨
- **読みやすい行間**: テキストサイズに応じた適切な行間設定

### パフォーマンス

- **静的値の活用**: 可能な限りトークン値を使用してCSSクラス化
- **動的値の最小化**: 計算値やカスタム値は必要最小限に抑制
- **レスポンシブ値の適切な使用**: 本当に必要な場面でのみ使用

### 一貫性

- **デザインシステムの遵守**: 定義されたサイズとカラーを使用
- **命名規則の統一**: プロジェクト内で一貫した命名を使用
- **レイアウトとの調和**: 他のコンポーネントとの適切な間隔設定