import React from "react";
import {GridLayout, GridLayoutItem as Item} from "../layout/GridLayout/GridLayout";
import ProjectNameField from "./ProjectNameField";
import ProjectDirField from "./ProjectDirField";

type Props = {
  name: string,
  setName: (name: string) => void
  dir: string,
  setDir: (name: string) => void
}

const NewProjectFieldGroup: React.FC<Props> = (props) => {

  //const [color, setColor] = useState(window.systemPreferences.getColor("3d-face"));

  // const [name, setName] = useState("unknown_game");

  const onChangeName = (name: string) => {

  };

  const spanStyle = {margin: "8px 0", display: "inline-block"};

  return (
    <>
      <GridLayout>
        <Item><span style={spanStyle}>プロジェクト名:</span></Item><Item><ProjectNameField name={props.name} setName={props.setName}/></Item>
        <Item><span style={spanStyle}>作業ディレクトリ:</span></Item><Item><ProjectDirField name={props.name} dir={props.dir} setDir={props.setDir} setName={props.setName}/></Item>
      </GridLayout>
    </>
  );

};

export default NewProjectFieldGroup;