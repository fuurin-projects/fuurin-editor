import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import {ProjectItem, Prop} from "../../../../../main/browser/components/organism/ProjectItem/ProjectItem";

export default {
  title: 'organism/ProjectItem',
  component: ProjectItem,
} as Meta;

const Template: Story<Prop> = (args) => (
  <ProjectItem {...args} />
);

export const デフォルト = Template.bind({});
デフォルト.args = {
  project: {name: "test", dir: "testDir"}
};
