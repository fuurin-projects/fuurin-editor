import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import {DirInput, Prop} from "../../../../../main/browser/components/organism/DirInput/DirInput";

export default {
  title: 'organism/DirInput',
  component: DirInput,
} as Meta;

const Template: Story<Prop> = (args) => (
  <DirInput {...args} />
);

export const デフォルト = Template.bind({});
デフォルト.args = {};
