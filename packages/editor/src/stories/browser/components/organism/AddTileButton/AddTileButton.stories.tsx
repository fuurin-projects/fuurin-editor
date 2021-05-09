import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import {AddTileButton} from "../../../../../main/browser/components/organism/AddTileButton/AddTileButton";

export default {
  title: 'organism/AddTileButton',
  component: AddTileButton,
} as Meta;

const Template: Story<{}> = (args) => (
  <AddTileButton {...args} />
);

export const デフォルト = Template.bind({});
デフォルト.args = {};
