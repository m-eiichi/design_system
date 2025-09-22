# Typography Implementation Guide

## 実装チェックリスト

### 基本実装

- [ ] `Typography`コンポーネントのインポート
- [ ] 適切な`children`プロパティの設定
- [ ] 必要に応じた`as`プロパティの指定
- [ ] 適切な`size`プロパティの選択

### アクセシビリティ実装

- [ ] セマンティックな見出し階層の実装
- [ ] 適切なコントラスト比の確認
- [ ] スクリーンリーダー対応の確認
- [ ] キーボードナビゲーション対応（インタラクティブ要素）

### レスポンシブ実装

- [ ] ブレイクポイント別スタイルの定義
- [ ] モバイルファーストの設計
- [ ] 各デバイスでの表示確認

## 実装パターン

### 1. 基本的なテキスト表示

```tsx
import { Typography } from '@/components/ui-elements/typography';

// 最もシンプルな使用例
export const BasicText = () => (
  <Typography>
    基本的なテキスト表示
  </Typography>
);
```

### 2. 見出し階層の実装

```tsx
export const HeadingHierarchy = () => (
  <div>
    {/* メインタイトル */}
    <Typography as="h1" size="h1" margin="bottom">
      ページタイトル
    </Typography>

    {/* セクションタイトル */}
    <Typography as="h2" size="h2" margin="both">
      セクション見出し
    </Typography>

    {/* サブセクション */}
    <Typography as="h3" size="h3" margin="bottom">
      サブセクション見出し
    </Typography>

    {/* 本文 */}
    <Typography margin="bottom">
      ここにコンテンツの本文が入ります。適切な階層構造を維持することで、
      ユーザーと検索エンジンの両方にとって理解しやすいコンテンツになります。
    </Typography>
  </div>
);
```

### 3. レスポンシブデザインの実装

```tsx
export const ResponsiveTypography = () => (
  <div>
    {/* レスポンシブなヒーロータイトル */}
    <Typography
      as="h1"
      size={{
        sp: "h3",      // スマートフォン: h3サイズ
        md: "h2",      // タブレット: h2サイズ
        lg: "h1"       // デスクトップ: h1サイズ
      }}
      textAlign={{
        sp: "center",  // スマートフォン: 中央揃え
        md: "left"     // タブレット以上: 左揃え
      }}
      margin="both"
    >
      レスポンシブタイトル
    </Typography>

    {/* レスポンシブな説明文 */}
    <Typography
      size={{
        sp: "caption",
        md: "body"
      }}
      color="secondary"
    >
      デバイスに応じてサイズが変わる説明文
    </Typography>
  </div>
);
```

### 4. カード型レイアウトの実装

```tsx
export const CardLayout = () => (
  <div className="card">
    {/* カードタイトル */}
    <Typography as="h3" size="h4" margin="bottom" fontWeight="bold">
      カードタイトル
    </Typography>

    {/* カード説明文 */}
    <Typography color="description" margin="bottom">
      カードの詳細説明がここに入ります。商品やサービスの魅力的な
      説明を記載して、ユーザーの関心を引きます。
    </Typography>

    {/* メタ情報 */}
    <Typography size="caption" color="secondary">
      公開日: 2024年3月15日 | カテゴリ: テクノロジー
    </Typography>
  </div>
);
```

### 5. フォーム要素との組み合わせ

```tsx
export const FormWithTypography = () => (
  <div className="form-group">
    {/* フィールドラベル */}
    <Typography as="label" size="subtitle2" margin="bottom" fontWeight="bold">
      メールアドレス *
    </Typography>

    {/* ヘルプテキスト */}
    <Typography size="caption" color="description" margin="bottom">
      ログイン時に使用するメールアドレスを入力してください
    </Typography>

    {/* 入力フィールド（他のコンポーネント） */}
    <input type="email" className="form-control" />

    {/* エラーメッセージ */}
    <Typography size="caption" color="error">
      有効なメールアドレスを入力してください
    </Typography>
  </div>
);
```

### 6. インタラクティブテキストの実装

```tsx
export const InteractiveText = () => {
  const handleClick = () => {
    console.log('テキストがクリックされました');
  };

  return (
    <div>
      {/* クリック可能なテキスト */}
      <Typography
        as="span"
        color="link"
        cursor="pointer"
        onClick={handleClick}
      >
        クリックして詳細を表示
      </Typography>

      {/* リンクテキスト */}
      <Typography as="a" href="/terms" color="link">
        利用規約を確認する
      </Typography>
    </div>
  );
};
```

### 7. 長文コンテンツの実装

```tsx
export const LongContent = () => (
  <article>
    {/* 記事タイトル */}
    <Typography as="h1" size="h1" margin="bottom">
      記事のタイトル
    </Typography>

    {/* 記事メタ情報 */}
    <Typography size="caption" color="secondary" margin="bottom">
      著者: 田中太郎 | 公開日: 2024年3月15日 | 読了時間: 約5分
    </Typography>

    {/* 記事概要 */}
    <Typography size="subtitle1" color="description" margin="both">
      この記事では、Typographyコンポーネントの効果的な活用方法について
      詳しく解説します。
    </Typography>

    {/* セクション見出し */}
    <Typography as="h2" size="h2" margin="both">
      実装のポイント
    </Typography>

    {/* 本文段落 */}
    <Typography margin="bottom">
      Typographyコンポーネントを使用する際は、まずセマンティックな
      HTML構造を意識することが重要です。適切な見出しレベルを使用し、
      情報の階層を明確にしましょう。
    </Typography>

    <Typography margin="bottom">
      また、レスポンシブデザインにおいては、各ブレイクポイントで
      適切な文字サイズと行間を設定することで、すべてのデバイスで
      快適な読書体験を提供できます。
    </Typography>
  </article>
);
```

### 8. エラー・成功メッセージの実装

```tsx
export const StatusMessages = () => (
  <div>
    {/* 成功メッセージ */}
    <Typography color="success" size="caption" margin="bottom">
      ✓ データが正常に保存されました
    </Typography>

    {/* エラーメッセージ */}
    <Typography color="error" size="caption" margin="bottom">
      ⚠ 接続エラーが発生しました。しばらく後にお試しください。
    </Typography>

    {/* 警告メッセージ */}
    <Typography color="warning" size="caption" margin="bottom">
      ⚡ この操作は元に戻すことができません
    </Typography>

    {/* 情報メッセージ */}
    <Typography color="info" size="caption">
      ℹ 新機能が追加されました。詳細はヘルプをご確認ください。
    </Typography>
  </div>
);
```

## 高度な実装パターン

### 1. 動的コンテンツの実装

```tsx
interface DynamicContentProps {
  title: string;
  content: string;
  status: 'draft' | 'published' | 'archived';
  isUrgent?: boolean;
}

export const DynamicContent: React.FC<DynamicContentProps> = ({
  title,
  content,
  status,
  isUrgent = false
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'published': return 'success';
      case 'draft': return 'warning';
      case 'archived': return 'secondary';
      default: return 'primary';
    }
  };

  return (
    <div>
      {/* 動的タイトル */}
      <Typography
        as="h2"
        size={isUrgent ? "h1" : "h2"}
        color={isUrgent ? "error" : "primary"}
        margin="bottom"
      >
        {title}
      </Typography>

      {/* ステータス表示 */}
      <Typography
        size="caption"
        color={getStatusColor()}
        margin="bottom"
        fontWeight="bold"
      >
        状態: {status}
      </Typography>

      {/* 動的コンテンツ */}
      <Typography>
        {content}
      </Typography>
    </div>
  );
};
```

### 2. テーマベースの実装

```tsx
interface ThemedTypographyProps {
  variant: 'light' | 'dark';
  children: React.ReactNode;
}

export const ThemedTypography: React.FC<ThemedTypographyProps> = ({
  variant,
  children
}) => (
  <Typography
    color={variant === 'dark' ? 'white' : 'primary'}
    style={{
      backgroundColor: variant === 'dark' ? '#333' : '#fff',
      padding: '1rem'
    }}
  >
    {children}
  </Typography>
);
```

## トラブルシューティング

### よくある問題と解決方法

1. **スタイルが適用されない**
   ```tsx
   // ❌ 間違った実装
   <Typography style={{ fontSize: '20px' }}>テキスト</Typography>

   // ✅ 正しい実装
   <Typography size="h4">テキスト</Typography>
   ```

2. **レスポンシブ値が機能しない**
   ```tsx
   // ❌ 間違った実装
   <Typography size="h1,h2,h3">テキスト</Typography>

   // ✅ 正しい実装
   <Typography size={{ sp: "h3", md: "h2", lg: "h1" }}>テキスト</Typography>
   ```

3. **セマンティクスの問題**
   ```tsx
   // ❌ 間違った実装（h1の後にh3）
   <Typography as="h1">メインタイトル</Typography>
   <Typography as="h3">サブタイトル</Typography>

   // ✅ 正しい実装
   <Typography as="h1">メインタイトル</Typography>
   <Typography as="h2">サブタイトル</Typography>
   ```

## パフォーマンス最適化

### メモ化の活用

```tsx
import { memo } from 'react';

// 重いコンポーネントをメモ化
export const MemoizedTypography = memo<TypographyProps>(({ children, ...props }) => (
  <Typography {...props}>
    {children}
  </Typography>
));
```

### 条件付きレンダリング

```tsx
// 条件に応じて異なるスタイルを適用
export const ConditionalTypography = ({ isImportant, children }) => (
  <Typography
    size={isImportant ? "h2" : "body"}
    color={isImportant ? "error" : "primary"}
    fontWeight={isImportant ? "bold" : "normal"}
  >
    {children}
  </Typography>
);
```

## テスト実装

### 基本的なテスト

```tsx
import { render, screen } from '@testing-library/react';
import { Typography } from './index';

describe('Typography', () => {
  test('children が正しく表示される', () => {
    render(<Typography>テストテキスト</Typography>);
    expect(screen.getByText('テストテキスト')).toBeInTheDocument();
  });

  test('as プロパティで正しいHTML要素が生成される', () => {
    render(<Typography as="h1">見出し</Typography>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  test('onClick イベントが正しく発火する', () => {
    const mockClick = jest.fn();
    render(
      <Typography onClick={mockClick}>クリック可能</Typography>
    );
    fireEvent.click(screen.getByText('クリック可能'));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
```