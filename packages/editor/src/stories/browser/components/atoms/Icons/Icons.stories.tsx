import {Meta, Story} from "@storybook/react/types-6-0";
import React, {PropsWithChildren} from "react";
import * as AllIcons from "../../../../../main/browser/components/atoms/Icons/Icons";

const template: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg></svg>
  )
}

export default {
  title: 'atoms/Icons',
  component: template
} as Meta;

const Template: Story<PropsWithChildren<{}>> = (args) => (
  <>{args.children}</>
);

export const Icon_TabClose = Template.bind({});
Icon_TabClose.args = {
  children: <AllIcons.IconTabClose/>
};
