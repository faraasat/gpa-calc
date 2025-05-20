import { Meta, StoryObj } from "@storybook/react";

import InputComponent from "@/components/ui/input/input";

const meta: Meta<typeof InputComponent> = {
  title: "Input",
  component: InputComponent,
  parameters: {
    nextjs: {
      appDirectory: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputComponent>;

export const Deleteable: Story = {
  args: {
    isDelete: false,
    id: "1",
    setDelete: () => alert("setDelete called!"),
  },
};

export const NotDeleteable: Story = {
  args: {
    isDelete: true,
    id: "2",
    setDelete: () => alert("setDelete called!"),
  },
};
