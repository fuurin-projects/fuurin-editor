import React from "react";
import styles from "./NewProjectFieldGroup.css"
import {GridLayout, GridLayoutItem as Item} from "../../atoms/GridLayout/GridLayout";
import {ProjectDirField} from "../ProjectDirField/ProjectDirField";
import {ProjectNameField} from "../ProjectNameField/ProjectNameField";

type Prop = {
  name: string,
  setName: (name: string) => void
  dir: string,
  setDir: (name: string) => void
}

const NewProjectFieldGroup: React.FC<Prop> = (props) => {

  return (
    <>
      <GridLayout>
        <Item><span className={styles.label}>プロジェクト名:</span></Item><Item><ProjectNameField name={props.name} setName={props.setName}/></Item>
        <Item><span className={styles.label}>作業ディレクトリ:</span></Item><Item><ProjectDirField name={props.name} dir={props.dir} setDir={props.setDir} setName={props.setName}/></Item>
      </GridLayout>
    </>
  );

};

export {NewProjectFieldGroup, Prop}
