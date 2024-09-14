import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import GradeSettingComponent from "@/components/ui/grade-setting/grade-setting";

export default {
  title: "Grade Setting",
  Component: GradeSettingComponent,
} as ComponentMeta<typeof GradeSettingComponent>;

export const GradeSetting: ComponentStory<typeof GradeSettingComponent> =
  () => <GradeSettingComponent />;
