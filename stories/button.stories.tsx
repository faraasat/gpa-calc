import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import ButtonComponent from "../components/button/button";

export default {
  title: "My Button",
  Component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
  text: "Inverted Button",
  onClick: () => alert("onClick() Called!"),
};

export const NotInverted = Template.bind({});
NotInverted.args = {
  inverted: false,
  text: "Non-Inverted Button",
  onClick: () => alert("onClick() Called!"),
};
