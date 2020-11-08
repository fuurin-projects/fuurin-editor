import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import {SubPanel, SubPanelProp} from "../../../../../main/browser/components/templates/SubPanel/SubPanel";

export default {
  title: 'atoms/SubPanel',
  component: SubPanel,
} as Meta;

const Template: Story<SubPanelProp> = (args) => (
  <SubPanel {...args} >
    <div style={{padding: "8px"}}>コンテナの中身</div>
  </SubPanel>);

export const デフォルト = Template.bind({});
デフォルト.args = {
  title: "テスト用タイトル"
};
