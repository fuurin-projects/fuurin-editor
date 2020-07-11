import React from "react";
import styles from "./activity_container.css";
import {ActivityList} from "../activity_list/ActivityList";


export const ActivityContainer: React.FunctionComponent = () => {


  return (<>
    <div className={styles.main}>
      <div className={styles.activity_selector}><ActivityList/></div>
      <div className={styles.activity_sub}>ActivitySub</div>
      <div>エディター</div>
    </div>
  </>)

};