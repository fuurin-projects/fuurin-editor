import React from "react";
import styles from "./ButtonFooter.css"

const ButtonFooter: React.FunctionComponent = ({children}) => {

  return (<>
    <div className={styles.main}>{children}</div>
  </>)

};

export {ButtonFooter}
