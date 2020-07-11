import React from "react";
import styles from "./activity_list.css";
import {ActivityButton} from "../activity_button/ActivityButton";

export const ActivityList: React.FunctionComponent = () => {


  return (<>
    <div className={styles.main}>
      <ActivityButton image={"../resources/images/activity_general.png"}/>
      <ActivityButton image={"../resources/images/activity_tile.png"}/>
      <ActivityButton image={"../resources/images/activity_world.png"}/>
      <ActivityButton image={"../resources/images/activity_setting.png"}/>
    </div>
  </>)

};