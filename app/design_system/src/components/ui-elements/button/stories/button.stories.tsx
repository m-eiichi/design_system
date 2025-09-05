import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../index";

// Storybookのメタ情報
const meta: Meta<typeof Button> = {
  title: "ui-elements/Button", // Storybookでの表示パス
  component: Button,
  parameters: {
    layout: "fullscreen", // fullWidthに対応するため
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
    fullWidth: true,
    // leftIcon: <div>leftIcon</div>,
    // rightIcon: <div>rightIcon</div>,
    children: "Button",
  },
};

// 別のストーリー例
// export const AnotherExample: Story = {
//   args: {
//     label: '別の例',
//     // 他のprops
//   },
// };
