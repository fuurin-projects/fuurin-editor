import React, {ReactNode} from "react";
import styles from "./Logo.css";
import {Icons} from "../../../Icons";

interface Prop {

}


/**
 * ロゴ画像&バージョン情報を表示するコンポーネント
 */
class Logo extends React.Component<Prop | undefined> {

  constructor(props: Prop | undefined) {
    super(props);
  }

  render(): ReactNode {

    return (
      <>
        <img src={Icons.LOGO_IMAGE} alt={"ここにかっこいいロゴ画像"} className={styles.image} height={"140px"} width={"140px"}/>
      </>
    );
  }

}

export {Logo}