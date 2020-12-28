import {Button, Prop} from '../../../../../main/browser/components/atoms/Button/Button';
import {Meta, Story} from "@storybook/react/types-6-0";
import React, {PropsWithChildren} from "react";

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    children: {control: 'text'},
    onClick: {action: 'clicked'},
  },
} as Meta;

const Template: Story<PropsWithChildren<Prop>> = ({children, onClick, primitive, large, fullWidth}) =>
  <Button onClick={onClick} primitive={primitive} large={large} fullWidth={fullWidth}>{children}</Button>;

export const デフォルト = Template.bind({});
デフォルト.args = {
  children: "新規作成"
};

export const プリミティブ = Template.bind({});
プリミティブ.args = {
  children: "OK",
  primitive: true
};

export const ラージ = Template.bind({});
ラージ.args = {
  children: "OK",
  large: true
};

export const フルワイド = Template.bind({});
フルワイド.args = {
  children: "OK",
  fullWidth: true
};