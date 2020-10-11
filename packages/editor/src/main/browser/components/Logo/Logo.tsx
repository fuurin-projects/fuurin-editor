import React, {ReactNode} from "react";
import styles from "./Logo.css";
import SystemRepository from "../../repository/SystemRepository";
import {Icons} from "../../Icons";

interface Prop {

}

interface State {
  version: string;
}

export default class Logo extends React.Component<Prop | undefined, State> {

  constructor(props: Prop | undefined) {
    super(props);
    this.state = {version: "0.0.0"};
  }

  async componentDidMount() {

    const version = await SystemRepository.getVersion();
    this.setState({version: version});

  }

  render(): ReactNode {

    return (
      <>
        <div>
          <img src={Icons.LOGO_IMAGE} alt={"ここにかっこいいロゴ画像"} className={styles.image} height={"140px"} width={"140px"}/>
          <br/>
          <div className={styles.version}>バージョン : {this.state.version}</div>
        </div>
      </>
    );
  }

}