import {Text, TextProp} from '../../../../../main/browser/components/atoms/Text/Text';
import {Meta, Story} from "@storybook/react/types-6-0";
import React, {PropsWithChildren} from "react";

export default {
  title: 'atoms/Text',
  component: Text,
  argTypes: {
    children: {control: 'text'},
  },
} as Meta;

const Template: Story<PropsWithChildren<TextProp>> = ({children}) => <Text>{children}</Text>;

export const デフォルト = Template.bind({});
デフォルト.args = {
  children: "テスト用文字列",
  text: "テスト用文字列"
};
