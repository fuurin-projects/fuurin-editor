import {Logo} from '../../../../../main/browser/components/atoms/Logo/Logo';
import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";

export default {
  title: 'atoms/Logo',
  component: Logo
} as Meta;

const Template: Story = ({}) => <Logo/>;

export const デフォルト = Template.bind({});
デフォルト.args = {};
