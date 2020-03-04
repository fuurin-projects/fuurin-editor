import React, {useState} from "react";
import {GridLayout, GridLayoutItem} from "../layout/GridLayout";
import ProjectNameField from "./ProjectNameField";
import ProjectDirField from "./ProjectDirField";

const NewProjectFieldGroup: React.FC<any> = (props) => {

  //const [color, setColor] = useState(window.systemPreferences.getColor("3d-face"));

  const [name, setName] = useState("unknown_game");

  const onChangeName = (name: string) => {

  };

  return (
    <>
      <GridLayout>
        <GridLayoutItem>プロジェクト名</GridLayoutItem><GridLayoutItem><ProjectNameField name={name} setName={setName}/></GridLayoutItem>
        <GridLayoutItem>作業ディレクトリ</GridLayoutItem><GridLayoutItem><ProjectDirField name={name}/></GridLayoutItem>
      </GridLayout>
    </>
  );

};

export default NewProjectFieldGroup;