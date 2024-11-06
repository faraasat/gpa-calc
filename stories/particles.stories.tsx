import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import ParticleComponent from "@/components/particles/particles";

export default {
  title: "Particles",
  Component: ParticleComponent,
} as ComponentMeta<typeof ParticleComponent>;

export const Particles: ComponentStory<typeof ParticleComponent> = () => (
  <ParticleComponent />
);
