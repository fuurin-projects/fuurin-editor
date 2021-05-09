import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import {CreateProjectApplication} from "../../../../../main/browser/components/pages/CreateProjectApplication/CreateProjectApplication";

export default {
  title: 'pages/CreateProjectApplication',
  component: CreateProjectApplication,
} as Meta;

const Template: Story<{}> = (args) => (
  <CreateProjectApplication {...args} />
);

export const デフォルト = Template.bind({});
デフォルト.args = {};
