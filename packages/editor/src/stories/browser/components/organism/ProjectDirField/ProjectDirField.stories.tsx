import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import {ProjectDirField, Prop} from "../../../../../main/browser/components/organism/ProjectDirField/ProjectDirField";

export default {
  title: 'organism/ProjectDirField',
  component: ProjectDirField,
} as Meta;

const Template: Story<Prop> = (args) => (
  <ProjectDirField {...args} />
);

export const デフォルト = Template.bind({});
デフォルト.args = {};
