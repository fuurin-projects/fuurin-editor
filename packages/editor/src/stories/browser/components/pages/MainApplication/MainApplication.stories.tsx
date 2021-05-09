import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import {MainApplicationContainer} from "../../../../../main/browser/components/pages/MainApplication/MainApplication";

export default {
  title: 'pages/MainApplication',
  component: MainApplicationContainer,
} as Meta;

const Template: Story<{}> = (args) => (
  <MainApplicationContainer {...args} />
);

export const デフォルト = Template.bind({});
デフォルト.args = {};
