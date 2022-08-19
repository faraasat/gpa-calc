import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputModelComponent from "../components/input/input-model";

export default {
  title: "Input Model",
  Component: InputModelComponent,
} as ComponentMeta<typeof InputModelComponent>;

export const InputModel: ComponentStory<typeof InputModelComponent> = () => (
  <InputModelComponent handleAdd={() => alert("handleAdd() Called!")} />
);
