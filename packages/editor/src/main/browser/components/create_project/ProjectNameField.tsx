import React from "react";


interface Prop {
  name: string
  setName: (name: string) => void
}

const ProjectNameField: React.FunctionComponent<Prop> = (props) => {

  const onChangeName: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

    props.setName(event.target.value);

  };

  return (
    <input style={{height: "26px", paddingLeft: "4px", width: "100%"}} type={"text"} onChange={onChangeName} value={props.name}/>
  );

};

export default ProjectNameField;