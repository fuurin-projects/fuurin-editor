import React from "react";
import styles from "./ActivityList.css";
import {ActivityButton} from "../ActivityButton/ActivityButton";
import {Icons} from "../../../../Icons";

/**
 * Activityを切り替えるボタンを表示するコンポーネント
 * @constructor
 */
export const ActivityList: React.FunctionComponent = () => {

  return (<>
    <div className={styles.main}>
      <ActivityButton name={"general"} image={Icons.ACTIVITY_GENERAL}/>
      <ActivityButton name={"tile"} image={Icons.ACTIVITY_TILE}/>
      <ActivityButton name={"world"} image={Icons.ACTIVITY_WORLD}/>
      <ActivityButton name={"setting"} image={Icons.ACTIVITY_SETTING}/>
    </div>
  </>)

};