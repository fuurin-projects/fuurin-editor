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
        <GridLayoutItem><span style={{margin: "8px 0",display: "inline-block"}}>プロジェクト名:</span></GridLayoutItem><GridLayoutItem><ProjectNameField name={name} setName={setName}/></GridLayoutItem>
        <GridLayoutItem><span style={{margin: "8px 0",display: "inline-block"}}>作業ディレクトリ:</span></GridLayoutItem><GridLayoutItem><ProjectDirField name={name}/></GridLayoutItem>
      </GridLayout>
    </>
  );

};

export default NewProjectFieldGroup;