import React, {ReactNode} from "react";
import styles from "../../../css/other/Logo.css";


export default class Logo extends React.Component<any, any> {

  render(): ReactNode {

    return (
      <>
        <div>
          <img alt={"ここにかっこいいロゴ画像"} className={styles.image} height={"140px"} width={"140px"}/>
          <br/>
          <div>バージョン : {"0.0.0"}</div>
        </div>
      </>
    );
  }

}