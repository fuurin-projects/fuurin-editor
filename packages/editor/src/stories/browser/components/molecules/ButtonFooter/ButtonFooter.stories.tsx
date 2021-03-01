import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import {ButtonFooter} from "../../../../../main/browser/components/molecules/ButtonFooter/ButtonFooter";
import {Button} from "../../../../../main/browser/components/atoms/Button/Button";

export default {
  title: 'molecules/ButtonFooter',
  component: ButtonFooter,
} as Meta;

const Template: Story<{}> = (args) => (
  <ButtonFooter {...args} >
    <Button>OK</Button>
    <Button>キャンセル</Button>
  </ButtonFooter>);

export const デフォルト = Template.bind({});
デフォルト.args = {};
