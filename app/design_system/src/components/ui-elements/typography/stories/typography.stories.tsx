import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "../index";

// Storybookのメタ情報
const meta: Meta<typeof Typography> = {
  title: "ui-elements/Typography", // Storybookでの表示パス
  component: Typography,
  parameters: {
    layout: "padded",
  },
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルトのストーリー
export const Default: Story = {
  args: {
    children: "Typographyコンポーネント",
    color: "success",
    // size: {
    //   sp: "h1",
    //   tb: "h2",
    //   pc: "h3",
    // },
    size: "h5",
    textAlign: {
      sp: "right",
      tb: "center",
      pc: "left",
    },
    // textAlign: "right",
    margin: "none",
    fontWeight: {
      sp: "thin",
      tb: "normal",
      pc: "bold",
    },
    fontSize: {
      sp: "12",
      tb: "14",
      pc: "16",
    },
    display: {
      sp: "block",
      tb: "inline",
      pc: "inlineBlock",
    },
    cursor: {
      sp: "pointer",
      tb: "default",
      pc: "pointer",
    },
    ellipsis: false,
    // ここにデフォルトのpropsを設定
  },
};

// 別のストーリー例
// export const AnotherExample: Story = {
//   args: {
//     label: '別の例',
//     // 他のprops
//   },
// };
