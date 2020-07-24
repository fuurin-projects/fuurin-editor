import React from "react";
import styles from "./activity_list.css";
import {ActivityButton} from "../activity_button/ActivityButton";

export const ActivityList: React.FunctionComponent = () => {


  return (<>
    <div className={styles.main}>
      <ActivityButton name={"general"} image={"../resources/images/activity_general.png"}/>
      <ActivityButton name={"tile"} image={"../resources/images/activity_tile.png"}/>
      <ActivityButton name={"world"} image={"../resources/images/activity_world.png"}/>
      <ActivityButton name={"setting"} image={"../resources/images/activity_setting.png"}/>
    </div>
  </>)

};