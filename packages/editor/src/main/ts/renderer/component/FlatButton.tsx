import React, {ReactNode} from "react";
import styles from "../../../css/button/FlatButton.css";

interface Props {
  text: string,
}

export default class FlatButton extends React.Component<Props, any> {

  constructor(props: Props) {
    super(props);
  }

  render(): ReactNode {
    return (
      <button className={styles.base}>{this.props.text}</button>
    );
  }

}