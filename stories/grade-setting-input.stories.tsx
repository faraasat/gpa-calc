import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import GradeSettingInputComponent from "../components/grade-setting-input/grade-setting-input";

export default {
  title: "Grade Setting Input",
  Component: GradeSettingInputComponent,
} as ComponentMeta<typeof GradeSettingInputComponent>;

const Template: ComponentStory<typeof GradeSettingInputComponent> = (args) => (
  <GradeSettingInputComponent {...args} />
);

export const Checked = Template.bind({});
Checked.args = {
  id: "1",
  grade: { checked: true, text: "A", min: 85, max: 100, value: 4 },
};

export const UnChecked = Template.bind({});
UnChecked.args = {
  id: "1",
  grade: { checked: false, text: "A", min: 85, max: 100, value: 4 },
};
