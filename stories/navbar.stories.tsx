import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import NavbarComponent from "@/components/navbar/navbar";

export default {
  title: "Navbar",
  Component: NavbarComponent,
} as ComponentMeta<typeof NavbarComponent>;

export const Navbar: ComponentStory<typeof NavbarComponent> = () => (
  <NavbarComponent />
);
