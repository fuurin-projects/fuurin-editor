import React from "react";
import styles from "./activity_container.css";
import {ActivityList} from "../activity_list/ActivityList";
import {useSelector} from "react-redux";
import {RootState} from "../../../stores/RootStore";
import {ActivityPanel} from "../activity_panel/ActivityPanel";
import {EditorContainer} from "../../editor/editor_container/EditorContainer";
import {SplitPanel} from "../../layout/split_panel/SplitPanel";


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