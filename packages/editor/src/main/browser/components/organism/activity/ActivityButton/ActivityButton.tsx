import React from "react";
import styles from "./ActivityButton.css";
import {useDispatch} from "react-redux";
import {ActivityStore, ActivityType} from "../../../../stores/ActivityStore";

interface Props {
  activityType: ActivityType,
  image?: string
}

/**
 * アクティビティーを切り替えるボタン
 *
 * @param activityType 切り替えるアクティビティー
 * @param image ボタンの画像
 * @constructor
 */
export const ActivityButton: React.FunctionComponent<Props> = ({activityType, image}) => {

  const dispatch = useDispatch();

  const customStyle = {
    backgroundImage: `url("${image}"`,
  };

  const click = async () => {

    console.log("ActivityStore:" + activityType);
    dispatch(ActivityStore.actions.onActivity(activityType));

  };

  return (<>
    <button className={styles.main} style={customStyle} onClick={click}>

    </button>
  </>)

};