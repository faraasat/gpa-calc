import { Meta, StoryObj } from "@storybook/react";

import NavbarComponent from "@/components/ui/navbar/navbar";

const meta: Meta<typeof NavbarComponent> = {
  title: "Navbar",
  component: NavbarComponent,
  parameters: {
    nextjs: {
      appDirectory: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavbarComponent>;

export const Navbar: Story = {
  args: {},
};
