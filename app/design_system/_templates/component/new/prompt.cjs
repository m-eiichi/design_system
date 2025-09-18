// _templates/component/new/prompt.js
module.exports = [
  {
    type: "input",
    name: "name",
    message: "コンポーネント名を入力してください（例: Button）",
  },
  {
    type: "select",
    name: "category",
    message: "Atomic Design のカテゴリを選択してください:",
    choices: ["ui-elements", "ui-parts", "features", "templates", "pages"],
  },
  {
    type: "input",
    name: "subDirectory",
    message:
      "カテゴリ内に追加のディレクトリが必要な場合、名前を入力してください（例: Common / 空欄可）",
    default: "",
  },
  {
    type: "select",
    name: "type",
    message: "コンポーネントのファイルタイプを選択してください:",
    choices: ["tsx", "jsx"],
    default: "tsx",
  },
  {
    type: "confirm",
    name: "withStyles",
    message: "スタイルファイル（.module.css）も生成しますか？",
    default: true,
  },
  {
    type: "confirm",
    name: "withTypes",
    message: "型定義ファイル（types.ts）も生成しますか？",
    default: true,
  },
  {
    type: "confirm",
    name: "withStorybook",
    message: "Storybookファイル（.stories.tsx / .docs.mdx）も生成しますか？",
    default: true,
  },
  {
    type: "confirm",
    name: "withTests",
    message: "テストファイル（__tests__/index.test.tsx）も生成しますか？",
    default: true,
  },
];
