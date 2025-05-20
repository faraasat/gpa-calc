import { Meta, StoryObj } from "@storybook/react";

import InputModelComponent from "@/components/ui/input/input-model";

const meta: Meta<typeof InputModelComponent> = {
  title: "Input Model",
  component: InputModelComponent,
  parameters: {
    nextjs: {
      appDirectory: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputModelComponent>;

export const InputModel: Story = {
  args: {
    handleAdd: () => alert("handleAdd() Called!"),
  },
};
