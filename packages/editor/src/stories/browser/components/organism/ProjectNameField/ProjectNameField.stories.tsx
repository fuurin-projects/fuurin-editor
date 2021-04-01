import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import {ProjectNameField, Props} from "../../../../../main/browser/components/organism/ProjectNameField/ProjectNameField";

export default {
  title: 'organism/ProjectNameField',
  component: ProjectNameField,
} as Meta;

const Template: Story<Props> = (args) => (
  <ProjectNameField {...args} />
);

export const デフォルト = Template.bind({});
デフォルト.args = {};
