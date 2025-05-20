import { Meta, StoryObj } from "@storybook/react";

import GradeSettingInputComponent from "@/components/ui/grade-setting-input/grade-setting-input";

const meta: Meta<typeof GradeSettingInputComponent> = {
  title: "Grade Setting Input",
  component: GradeSettingInputComponent,
  parameters: {
    nextjs: {
      appDirectory: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof GradeSettingInputComponent>;

export const Checked: Story = {
  args: {
    id: "1",
    grade: { checked: true, text: "A", min: 85, max: 100, value: 4 },
  },
};

export const UnChecked: Story = {
  args: {
    id: "1",
    grade: { checked: false, text: "A", min: 85, max: 100, value: 4 },
  },
};
