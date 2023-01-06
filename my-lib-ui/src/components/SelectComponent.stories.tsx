import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectComponent from "./SelectComponent";

import "../index.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/SelectComponent",
  component: SelectComponent,
} as ComponentMeta<typeof SelectComponent>;

export const RadioButtonComponentView: ComponentStory<
  typeof SelectComponent
> = (args) => (
  <SelectComponent {...args}>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </SelectComponent>
);


RadioButtonComponentView.args = {
  label: "Nationalité",
}