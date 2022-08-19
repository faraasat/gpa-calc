import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import GradingComponent from "../components/grading/grading";

export default {
  title: "Grading",
  Component: GradingComponent,
} as ComponentMeta<typeof GradingComponent>;

export const Grading: ComponentStory<typeof GradingComponent> = () => (
  <GradingComponent />
);
