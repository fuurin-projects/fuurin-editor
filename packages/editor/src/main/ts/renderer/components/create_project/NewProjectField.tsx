import React from "react";
import {GridLayout, GridLayoutItem} from "../layout/GridLayout";
import ProjectNameField from "./ProjectNameField";

const NewProjectField: React.FC<any> = (props) => {

  return (
    <>
      <GridLayout>
        <GridLayoutItem>プロジェクト名</GridLayoutItem><GridLayoutItem><ProjectNameField/></GridLayoutItem>
        <GridLayoutItem>作業ディレクトリ</GridLayoutItem><GridLayoutItem><input type={"text"}/></GridLayoutItem>
      </GridLayout>
    </>
  );

};

export default NewProjectField;