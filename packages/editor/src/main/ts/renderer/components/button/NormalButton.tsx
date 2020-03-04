import React, {MouseEventHandler, ReactNode} from "react";
import styles from "../../../../css/button/NormalButton.css";

interface Props {
  text: string,
  width?: number
  click?: MouseEventHandler<HTMLButtonElement>
  type?: "normal" | "current"
}

export default class NormalButton extends React.Component<Props, any> {

  constructor(props: Props) {
    super(props);
  }

  render(): ReactNode {

    const styleGenerator = ({width, type}: Props) => {

      let s = {};

      if (width) {
        s = Object.assign(s, {
          width: width ? `${width}px` : "0px"
        })
      }

      return s

    };

    return (
      <button className={this.props.type === "current" ? styles.current : styles.base}
              style={styleGenerator(this.props)}
              onClick={this.props.click}>
        {this.props.text}
      </button>
    );
  }

}