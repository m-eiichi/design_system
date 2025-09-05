import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from '../index';

// Storybookのメタ情報
const meta: Meta<typeof Typography> = {
  title: 'ui-elements/typography', // Storybookでの表示パス
  component: Typography,
  parameters: {
    layout: 'centered',
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