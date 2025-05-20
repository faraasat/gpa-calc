import { Meta, StoryObj } from "@storybook/react";

import GradingComponent from "@/components/ui/grading/grading";

const meta: Meta<typeof GradingComponent> = {
  title: "Grading",
  component: GradingComponent,
  parameters: {
    nextjs: {
      appDirectory: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof GradingComponent>;

export const Grading: Story = {
  args: {},
};
