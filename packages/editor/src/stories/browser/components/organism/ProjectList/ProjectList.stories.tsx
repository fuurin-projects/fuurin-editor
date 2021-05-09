import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import {ProjectList, Props} from "../../../../../main/browser/components/organism/ProjectList/ProjectList";
import ProjectRepository from "../../../../../main/browser/repository/ProjectRepository";
import {createLiveDateMock} from "../../../../../main/browser/repository/LiveDateMock";

export default {
  title: 'organism/ProjectList',
  component: ProjectList,
  decorators: [
    (Story) => {
      ProjectRepository.instance().getProjectList = () => {
        return createLiveDateMock([{
          name: 'test',
          dir: 'testDir'
        }]);
      }
      return (
        <Story/>
      )
    },
  ],
} as Meta;

const Template: Story<Props> = (args) => (
  <ProjectList {...args} />
);

export const デフォルト = Template.bind({});
デフォルト.args = {};
