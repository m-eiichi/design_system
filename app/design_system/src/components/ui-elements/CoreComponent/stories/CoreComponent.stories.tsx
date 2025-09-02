import type { Meta, StoryObj } from "@storybook/react-vite";
import { CoreComponent } from "../index";

const meta: Meta<typeof CoreComponent> = {
  title: "UI Elements/CoreComponent",
  component: CoreComponent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "CoreComponentコンポーネントは、レイアウトとスタイリングのための汎用的なコンテナコンポーネントです。Flexbox、Grid、スペーシング、カラー、ボーダー、シャドウなどのプロパティをサポートしています。",
      },
    },
  },
  argTypes: {
    as: {
      description: "レンダリングするHTML要素",
    },
    display: {
      control: "select",
      options: [
        "block",
        "inline",
        "inline-block",
        "flex",
        "inline-flex",
        "grid",
        "inline-grid",
        "hidden",
      ],
      description: "displayプロパティ",
    },
    flexDirection: {
      control: "select",
      options: ["row", "row-reverse", "col", "col-reverse"],
      description: "flex-directionプロパティ",
    },
    alignItems: {
      control: "select",
      options: ["start", "end", "center", "baseline", "stretch"],
      description: "align-itemsプロパティ",
    },
    justifyContent: {
      control: "select",
      options: ["start", "end", "center", "between", "around", "evenly"],
      description: "justify-contentプロパティ",
    },
    p: {
      control: "select",
      options: ["0", "1", "2", "3", "4", "5", "6", "8", "10", "12", "16", "20"],
      description: "padding（全方向）",
    },
    m: {
      control: "select",
      options: ["0", "1", "2", "3", "4", "5", "6", "8", "10", "12", "16", "20"],
      description: "margin（全方向）",
    },
    bg: {
      // control: "select",
      // options: [
      //   "bg-primary",
      //   "bg-secondary",
      //   "card",
      //   "accent",
      //   "muted",
      //   "primary",
      //   "success",
      //   "warning",
      //   "information",
      // ],
      description: "背景色",
    },
    color: {
      control: "select",
      options: [
        "base",
        "description",
        "placeholder",
        "on-fill",
        "link",
        "primary",
        "success",
        "warning",
        "information",
      ],
      description: "テキスト色",
    },
    border: {
      control: "select",
      options: [
        "field",
        "field-bold",
        "divider",
        "focused",
        "selected",
        "alert",
        "disabled",
        "none",
      ],
      description: "ボーダー",
    },
    borderRadius: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl", "xxl", "full"],
      description: "ボーダー半径",
    },
    // shadow: {
    //   control: "select",
    //   options: ["none", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
    //   description: "シャドウ",
    // },
  },
  // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基本的な使用例
export const Default: Story = {
  args: {
    children: "基本的なCoreComponentコンポーネント",
    p: "4",
    bg: "lightBlue500",
    border: "field",
    // shadow: "02",
    // borderRadius: "m",
  },
};

// Flexboxレイアウト
// export const FlexboxLayout: Story = {
//   args: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "between",
//     gap: "4",
//     p: "4",
//     bg: "bg-secondary",
//     border: "field",
//     borderRadius: "m",
//     children: (
//       <>
//         <CoreComponent
//           p="2"
//           // bg="primary" // color="on-fill"
//           borderRadius="s"
//         >
//           アイテム1
//         </CoreComponent>
//         <CoreComponent
//           p="2"
//           // bg="success" // color="on-fill"
//           borderRadius="s"
//         >
//           アイテム2
//         </CoreComponent>
//         <CoreComponent
//           p="2"
//           // bg="warning" // color="on-fill"
//           borderRadius="s"
//         >
//           アイテム3
//         </CoreComponent>
//       </>
//     ),
//   },
// };

// // Gridレイアウト
// export const GridLayout: Story = {
//   args: {
//     display: "grid",
//     gridTemplateColumns: "3",
//     gap: "4",
//     p: "4",
//     bg: "muted",
//     border: "field",
//     borderRadius: "m",
//     children: (
//       <>
//         <CoreComponent
//           p="3"
//           // bg="primary"
//           // color="on-fill"
//           borderRadius="s"
//           textAlign="center"
//         >
//           グリッド1
//         </CoreComponent>
//         <CoreComponent
//           p="3"
//           // bg="success"
//           // color="on-fill"
//           borderRadius="s"
//           textAlign="center"
//         >
//           グリッド2
//         </CoreComponent>
//         <CoreComponent
//           p="3"
//           // bg="warning"
//           // color="on-fill"
//           borderRadius="s"
//           textAlign="center"
//         >
//           グリッド3
//         </CoreComponent>
//         <CoreComponent
//           p="3"
//           // bg="information"
//           // color="on-fill"
//           borderRadius="s"
//           textAlign="center"
//         >
//           グリッド4
//         </CoreComponent>
//         <CoreComponent
//           p="3"
//           // bg="accent"
//           // color="on-fill"
//           borderRadius="s"
//           textAlign="center"
//         >
//           グリッド5
//         </CoreComponent>
//         <CoreComponent
//           p="3"
//           // bg="card"
//           color="base"
//           border="field"
//           borderRadius="s"
//           textAlign="center"
//         >
//           グリッド6
//         </CoreComponent>
//       </>
//     ),
//   },
// };

// // カードスタイル
// export const CardStyle: Story = {
//   args: {
//     p: "6",
//     bg: "card",
//     border: "field",
//     borderRadius: "l",
//     shadow: "02",
//     children: (
//       <CoreComponent>
//         <CoreComponent as="h3" mb="3" color="base">
//           カードタイトル
//         </CoreComponent>
//         <CoreComponent color="description" mb="4">
//           これはカードスタイルのCoreComponentコンポーネントの例です。影とボーダーを使用してカードのような見た目を作成しています。
//         </CoreComponent>
//         <CoreComponent display="flex" gap="3" justifyContent="end">
//           <CoreComponent
//             as="button"
//             px="4"
//             py="2"
//             // bg="muted"
//             color="base"
//             borderRadius="s"
//             cursor="pointer"
//           >
//             キャンセル
//           </CoreComponent>
//           <CoreComponent
//             as="button"
//             px="4"
//             py="2"
//             // bg="primary"
//             // color="on-fill"
//             borderRadius="s"
//             cursor="pointer"
//           >
//             確認
//           </CoreComponent>
//         </CoreComponent>
//       </CoreComponent>
//     ),
//   },
// };

// // アラートスタイル
// export const AlertStyle: Story = {
//   args: {
//     p: "4",
//     bg: "alert",
//     border: "alert",
//     borderRadius: "m",
//     color: "base",
//     children: "これはアラートスタイルのCoreComponentコンポーネントです。",
//   },
// };

// // ボタンスタイル
// export const ButtonStyle: Story = {
//   args: {
//     as: "button",
//     px: "6",
//     py: "3",
//     // bg: "primary",
//     // color: "on-fill",
//     borderRadius: "m",
//     cursor: "pointer",
//     border: "none",
//     children: "ボタンスタイルのBox",
//   },
// };

// // レスポンシブレイアウト
// export const ResponsiveLayout: Story = {
//   args: {
//     display: "flex",
//     flexDirection: "col",
//     gap: "4",
//     p: "4",
//     bg: "bg-secondary",
//     border: "field",
//     borderRadius: "m",
//     children: (
//       <>
//         <CoreComponent
//           p="3"
//           // bg="primary"
//           // color="on-fill"
//           borderRadius="s"
//           textAlign="center"
//         >
//           レスポンシブアイテム1
//         </CoreComponent>
//         <CoreComponent
//           p="3"
//           // bg="success"
//           // color="on-fill"
//           borderRadius="s"
//           textAlign="center"
//         >
//           レスポンシブアイテム2
//         </CoreComponent>
//         <CoreComponent
//           p="3"
//           // bg="warning"
//           // color="on-fill"
//           borderRadius="s"
//           textAlign="center"
//         >
//           レスポンシブアイテム3
//         </CoreComponent>
//       </>
//     ),
//   },
//   parameters: {
//     viewport: {
//       defaultViewport: "mobile1",
//     },
//   },
// };

// // ネストしたレイアウト
// export const NestedLayout: Story = {
//   args: {
//     p: "6",
//     bg: "bg-primary",
//     border: "field",
//     borderRadius: "l",
//     children: (
//       <CoreComponent>
//         <CoreComponent as="h2" mb="4" color="base" textAlign="center">
//           ネストしたレイアウト
//         </CoreComponent>
//         <CoreComponent display="flex" gap="4" flexDirection="col">
//           <CoreComponent p="4" bg="card" border="field" borderRadius="m">
//             <CoreComponent as="h3" mb="2" color="base">
//               セクション1
//             </CoreComponent>
//             <CoreComponent color="description">
//               このセクションには、ネストしたCoreComponentコンポーネントが含まれています。
//             </CoreComponent>
//           </CoreComponent>
//           <CoreComponent p="4" bg="card" border="field" borderRadius="m">
//             <CoreComponent as="h3" mb="2" color="base">
//               セクション2
//             </CoreComponent>
//             <CoreComponent color="description">
//               複数のレベルでCoreComponentコンポーネントをネストすることができます。
//             </CoreComponent>
//           </CoreComponent>
//         </CoreComponent>
//       </CoreComponent>
//     ),
//   },
// };

// // オーバーフロー処理
// export const OverflowHandling: Story = {
//   args: {
//     w: "200px",
//     h: "150px",
//     p: "4",
//     bg: "card",
//     border: "field",
//     borderRadius: "m",
//     overflow: "auto",
//     children: (
//       <CoreComponent>
//         <CoreComponent mb="2" color="base">
//           オーバーフロー処理の例
//         </CoreComponent>
//         <CoreComponent color="description">
//           このコンテンツは指定されたサイズを超えるため、スクロールバーが表示されます。
//           長いテキストコンテンツを表示する際に、このようなオーバーフロー処理が役立ちます。
//           ユーザーはスクロールしてコンテンツ全体を確認できます。
//         </CoreComponent>
//       </CoreComponent>
//     ),
//   },
// };

// // ポジショニング
// export const Positioning: Story = {
//   args: {
//     position: "relative",
//     w: "300px",
//     h: "200px",
//     bg: "bg-secondary",
//     border: "field",
//     borderRadius: "m",
//     children: (
//       <>
//         <CoreComponent
//           p="2"
//           // bg="primary" // color="on-fill"
//           borderRadius="s"
//         >
//           通常の位置
//         </CoreComponent>
//         <CoreComponent
//           position="absolute"
//           p="2"
//           // bg="alert"
//           color="base"
//           borderRadius="s"
//         >
//           絶対位置
//         </CoreComponent>
//       </>
//     ),
//   },
// };
