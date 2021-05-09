import React from "react";
import styles from "./ActivityContainer.css";
import {useSelector} from "react-redux";
import {RootState} from "../../../../stores/RootStore";
import {ActivityList} from "../ActivityList/ActivityList";
import {ActivityPanel} from "../ActivityPanel/ActivityPanel";
import {EditorContainer} from "../../editor/EditorContainer/EditorContainer";
import {SplitPanel} from "../../../atoms/SplitPanel/SplitPanel";

/**
 * Activityとエディタを並べて表示するコンポーネント
 * @constructor
 */
export const ActivityContainer: React.FunctionComponent = () => {

  const currentActivity = useSelector((state: RootState) => state.activity.currentActivity);

  return (<>
    <div className={styles.main}>
      <div className={styles.activity_selector}><ActivityList/></div>
      <div className={styles.activity_sub}>
        <SplitPanel defaultWidth={200}>
          <ActivityPanel/>
          <EditorContainer/>
        </SplitPanel>
      </div>
    </div>
  </>)

};