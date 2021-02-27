import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import {Prop, WindowsCloseButton} from "../../../../../main/browser/components/molecules/WindowsCloseButton/WindowsCloseButton";

export default {
  title: 'molecules/WindowsCloseButton',
  component: WindowsCloseButton,
} as Meta;

const Template: Story<Prop> = (args) => (
  <WindowsCloseButton {...args} />
);

export const デフォルト = Template.bind({});
デフォルト.args = {};
