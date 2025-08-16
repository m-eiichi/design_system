---
to: "src/components/<%= category %>/<%= subDirectory ? subDirectory + '/' : '' %><%= name %>/stories/<%= name %>.stories.tsx"
unless_exists: true
---
import type { Meta, StoryObj } from "@storybook/react-vite";
import { <%= name %> } from '../index';

// Storybookのメタ情報
const meta: Meta<typeof <%= name %>> = {
  title: '<%= category %>/<%= name %>', // Storybookでの表示パス
  component: <%= name %>,
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