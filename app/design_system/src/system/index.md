src/
├─ system/
│ ├─ tokens/ ← 色・サイズなどのデザイントークン
│ ├─ utils/ ← flattenObject, snakeCase などの汎用ユーティリティ
│ └─ style-engine/ ← 共通のスタイル生成ロジック
│ ├─ create-style.ts
│ ├─ process-color.ts
│ ├─ process-size.ts
│ └─ process-property.ts
│
├─ components/
│ ├─ CoreComponent/
│ │ ├─ index.tsx
│ │ ├─ styles.module.css
│ │ └─ style-extensions.ts ← CoreComponent専用の拡張ロジック
│ │
│ ├─ Button/
│ │ ├─ index.tsx
│ │ ├─ styles.module.css
│ │ └─ style-extensions.ts ← Button専用の拡張ロジック
│ │
│ └─ Card/
│ ├─ index.tsx
│ ├─ styles.module.css
│ └─ style-extensions.ts ← Card専用の拡張ロジック
