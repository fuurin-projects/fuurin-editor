import {Version} from '../../../../../main/browser/components/atoms/Version/Version';
import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";

export default {
  title: 'atoms/Version',
  component: Version
} as Meta;

const Template: Story = ({prefix}) => <Version prefix={prefix}/>;

export const デフォルト = Template.bind({});
デフォルト.args = {};

export const PreFixあり = Template.bind({});
PreFixあり.args = {
  prefix: "Ver "
};
