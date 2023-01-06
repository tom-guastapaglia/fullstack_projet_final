import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputTextComponent from "./InputTextComponent";

import "../index.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/InputTextComponent",
  component: InputTextComponent,
} as ComponentMeta<typeof InputTextComponent>;

export const InputTextComponentView: ComponentStory<
  typeof InputTextComponent
> = (args) => <InputTextComponent {...args} />;

InputTextComponentView.args = {
  placeholder: "Example Input",
  label : "Nom",
};
