import React, {MouseEventHandler, ReactNode} from "react";
import styles from "../../../../css/button/NormalButton.css";

interface Props {
  text: string,
  width?: number
  click?: MouseEventHandler<HTMLButtonElement>
}

export default class NormalButton extends React.Component<Props, any> {

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
      <button className={styles.base}
              style={styleGenerator(this.props)}
              onClick={this.props.click}>
        {this.props.text}
      </button>
    );
  }

}