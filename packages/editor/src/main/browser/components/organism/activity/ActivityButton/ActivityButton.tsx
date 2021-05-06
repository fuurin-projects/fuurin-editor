import React from "react";
import styles from "./ActivityButton.css";
import {useDispatch} from "react-redux";
import {ActivityStore} from "../../../../stores/ActivityStore";

interface Props {
  name: string,
  image?: string
}

/**
 * アクティビティーを切り替えるボタン
 *
 * @param name 名前
 * @param image ボタンの画像
 * @constructor
 */
export const ActivityButton: React.FunctionComponent<Props> = ({name, image}) => {

  const dispatch = useDispatch();

  const customStyle = {
    backgroundImage: `url("${image}"`,
  };

  const click = async () => {

    console.log("ActivityStore:" + name);
    dispatch(ActivityStore.actions.onActivity(name));

  };

  return (<>
    <button className={styles.main} style={customStyle} onClick={click}>

    </button>
  </>)

};