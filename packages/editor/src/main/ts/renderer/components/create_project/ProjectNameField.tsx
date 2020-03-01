import React, {useState} from "react";

const ProjectNameField: React.FunctionComponent = (props) => {

  const [name, setName] = useState("unknown_game");

  return (
    <input type={"text"} value={name}/>
  );

};

export default ProjectNameField;