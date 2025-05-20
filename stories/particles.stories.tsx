import { Meta, StoryObj } from "@storybook/react";

import ParticleComponent from "@/components/ui/particles/particles";

const meta: Meta<typeof ParticleComponent> = {
  title: "Particles",
  component: ParticleComponent,
  parameters: {
    nextjs: {
      appDirectory: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ParticleComponent>;

export const Particles: Story = {
  args: {},
};
