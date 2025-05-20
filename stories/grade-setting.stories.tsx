import { Meta, StoryObj } from "@storybook/react";

import ButtonComponent from "@/components/ui/button/button";

import GradeSettingComponent from "@/components/ui/grade-setting/grade-setting";

const meta: Meta<typeof ButtonComponent> = {
  title: "Grade Setting",
  component: GradeSettingComponent,
  parameters: {
    nextjs: {
      appDirectory: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof GradeSettingComponent>;

export const GradeSetting: Story = {
  args: {},
};
