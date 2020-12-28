import React, {useEffect, useState} from "react";
import styles from "./Version.css"
import SystemRepository from "../../../repository/SystemRepository";
import {Text} from "../Text/Text";

type Prop = {
  prefix?: string
}

export const Version: React.FunctionComponent<Prop> = ({prefix}) => {

  const [version, setVersion] = useState("0.0.0");
  useEffect(() => {

    const fun = async () => {
      const version = await SystemRepository.getVersion();
      setVersion(version);
    }
    fun();

  }, [setVersion]);

  return (<>
    <div className={styles.main}><Text>{prefix}{version}</Text></div>
  </>)

};
