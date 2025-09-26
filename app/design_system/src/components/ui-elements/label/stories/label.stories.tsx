import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from '../index';

// Storybookのメタ情報
const meta: Meta<typeof Label> = {
  title: 'ui-elements/label', // Storybookでの表示パス
  component: Label,
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