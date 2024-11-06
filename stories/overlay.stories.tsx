import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import OverlayComponent from "@/components/overlay/overlay";

export default {
  title: "Overlay",
  Component: OverlayComponent,
} as ComponentMeta<typeof OverlayComponent>;

export const Overlay: ComponentStory<typeof OverlayComponent> = () => (
  <OverlayComponent />
);
