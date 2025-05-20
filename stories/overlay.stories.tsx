import { Meta, StoryObj } from "@storybook/react";

import OverlayComponent from "@/components/ui/overlay/overlay";

const meta: Meta<typeof OverlayComponent> = {
  title: "Overlay",
  component: OverlayComponent,
  parameters: {
    nextjs: {
      appDirectory: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof OverlayComponent>;

export const Overlay: Story = {
  args: {},
};
