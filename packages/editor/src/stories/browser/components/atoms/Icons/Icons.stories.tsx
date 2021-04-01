import React from "react";
import * as AllIcons from "../../../../../main/browser/components/atoms/Icons/Icons";
import {storiesOf} from "@storybook/react";

//エクスポートされたコンポーネントを動的に管理するためにあえて storiesOf を使用
const storyFnReactReturnTypeStoryApi = storiesOf("atoms/Icons", module);

for (let allIconsKey in AllIcons) {

  //@ts-ignore
  const Icon = AllIcons[allIconsKey];

  storyFnReactReturnTypeStoryApi
    .add(allIconsKey, () => (
      <Icon/>
    ));
}

