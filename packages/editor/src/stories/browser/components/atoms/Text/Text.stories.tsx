import {Text, TextProp} from '../../../../../main/browser/components/atoms/Text/Text';
import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";

export default {
  title: 'atoms/Text',
  component: Text,
  argTypes: {
    text: {control: 'text'},
  },
} as Meta;

const Template: Story<TextProp> = (args) => <Text {...args} />;

export const デフォルト = Template.bind({});
デフォルト.args = {
  text: "テスト用文字列"
};
