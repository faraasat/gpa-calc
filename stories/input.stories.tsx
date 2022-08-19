import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputComponent from "../components/input/input";

export default {
  title: "Input",
  Component: InputComponent,
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />;

export const Deleteable = Template.bind({});
Deleteable.args = {
  isDelete: false,
  id: "1",
  setDelete: () => alert("setDelete called!"),
};

export const NotDeleteable = Template.bind({});
NotDeleteable.args = {
  isDelete: true,
  id: "2",
  setDelete: () => alert("setDelete called!"),
};
