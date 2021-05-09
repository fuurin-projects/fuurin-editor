import React from "react";
import styles from "./ProjectNameField.css"

interface Props {
  name: string
  setName: (name: string) => void
}

const ProjectNameField: React.FunctionComponent<Props> = (props) => {

  const onChangeName: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

    props.setName(event.target.value);

  };

  return (
    <input className={styles.main} type={"text"} onChange={onChangeName} value={props.name}/>
  );

};

export {ProjectNameField, Props}
