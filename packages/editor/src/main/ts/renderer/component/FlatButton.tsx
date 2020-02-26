import React, {ReactNode} from "react";
import styles from "../../../css/button/FlatButton.css";

interface Props {
  text: string,
  width?: number
}

export default class FlatButton extends React.Component<Props, any> {

  constructor(props: Props) {
    super(props);
  }

  render(): ReactNode {

    const styleGenerator = ({width}: Props) => {

      if (!width) {
        return;
      }

      return (
        {
          width: width ? `${width}px` : "0px"
        }
      );

    };

    return (
      <button className={styles.base} style={styleGenerator(this.props)}>{this.props.text}</button>
    );
  }

}