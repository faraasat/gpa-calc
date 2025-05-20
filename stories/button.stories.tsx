import { Meta, StoryObj } from "@storybook/react";

import ButtonComponent from "@/components/ui/button/button";

const meta: Meta<typeof ButtonComponent> = {
  title: "My Button",
  component: ButtonComponent,
  parameters: {
    nextjs: {
      appDirectory: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Inverted: Story = {
  args: {
    inverted: true,
    text: "Inverted Button",
    onClick: () => alert("onClick() Called!"),
  },
};

export const NotInverted: Story = {
  args: {
    inverted: false,
    text: "Non-Inverted Button",
    onClick: () => alert("onClick() Called!"),
  },
};
