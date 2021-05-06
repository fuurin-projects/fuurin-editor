import React from "react";
import styles from "./ActivityPanel.css";
import {useSelector} from "react-redux";
import {RootState} from "../../../../stores/RootStore";
import {TileActivityComponent} from "../activities/TileActivityComponent/TileActivityComponent";

/**
 * カレントなActivityを表示するパネル
 * @constructor
 */
export const ActivityPanel: React.FunctionComponent = () => {

  const currentActivity = useSelector((state: RootState) => state.activity.currentActivity);

  const getPanel = (name: string) => {
    switch (name) {
      case "tile":
        return <TileActivityComponent/>;
    }
    return (<>{name}</>);
  };

  return (<>
    <div className={styles.main}>
      {getPanel(currentActivity)}
    </div>
  </>)

};

