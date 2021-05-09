import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import {NewProjectFieldGroup, Prop} from "../../../../../main/browser/components/organism/NewProjectFieldGroup/NewProjectFieldGroup";

export default {
  title: 'organism/NewProjectFieldGroup',
  component: NewProjectFieldGroup,
} as Meta;

const Template: Story<Prop> = (args) => (
  <NewProjectFieldGroup {...args} />
);

export const デフォルト = Template.bind({});
デフォルト.args = {};
