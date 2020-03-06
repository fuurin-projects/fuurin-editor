import React, {MouseEventHandler, ReactNode} from "react";
import styles from "../../../../css/button/NormalButton.css";

interface Props {
  text: string,
  width?: number
  padding?: string
  paddingLeft?: number
  margin?: string
  click?: MouseEventHandler<HTMLButtonElement>
  type?: "normal" | "current"
}

export default class NormalButton extends React.Component<Props, any> {

  constructor(props: Props) {
    super(props);
  }

  render(): ReactNode {

    const styleGenerator = ({width, padding, paddingLeft, margin}: Props) => {

      let s = {};

      if (width) {
        s = Object.assign(s, {
          width: width ? `${width}px` : "0px"
        })
      }

      if (padding) {
        s = Object.assign(s, {
          padding: padding ? `${padding}` : "0"
        })
      }

      if (paddingLeft) {
        s = Object.assign(s, {
          paddingLeft: paddingLeft ? `${paddingLeft}px` : "0"
        })
      }

      if (margin) {
        s = Object.assign(s, {
          margin: margin ? `${margin}` : "0"
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