import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import {LauncherApplication} from "../../../../../main/browser/components/pages/LauncherApplication/LauncherApplication";
import ProjectRepository from "../../../../../main/browser/repository/ProjectRepository";
import {createLiveDateMock} from "../../../../../main/browser/repository/LiveDateMock";


export default {
  title: 'pages/LauncherApplication',
  component: LauncherApplication,
} as Meta;

const Template: Story<{}> = (args) => (
  <LauncherApplication {...args} />
);

export const デフォルト = Template.bind({});
デフォルト.args = {};
デフォルト.decorators = [
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
];

export const プロジェクトが0個の時 = Template.bind({});
プロジェクトが0個の時.args = {};
プロジェクトが0個の時.decorators = [
  (Story) => {
    ProjectRepository.instance().getProjectList = () => {
      return createLiveDateMock([]);
    }
    return (
      <Story/>
    )
  },
];

export const プロジェクトが2個の時 = Template.bind({});
プロジェクトが2個の時.args = {};
プロジェクトが2個の時.decorators = [
  (Story) => {
    ProjectRepository.instance().getProjectList = () => {
      return createLiveDateMock([{
        name: 'test1',
        dir: 'testDir1'
      },
        {
          name: 'test2',
          dir: 'testDir2'
        }]);
    }
    return (
      <Story/>
    )
  },
];
