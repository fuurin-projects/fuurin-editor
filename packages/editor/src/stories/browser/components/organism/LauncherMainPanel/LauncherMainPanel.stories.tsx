import {LauncherMainPanel} from '../../../../../main/browser/components/organism/LauncherMainPanel/LauncherMainPanel';
import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";

export default {
  title: 'organism/LauncherMainPanel',
  component: LauncherMainPanel
} as Meta;

const Template: Story = ({}) => <LauncherMainPanel/>;

export const デフォルト = Template.bind({});
デフォルト.args = {};
