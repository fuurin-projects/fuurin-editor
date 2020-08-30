import React, {ReactNode} from "react";
import styles from "./CenterLayout.css"

interface Prop {
  marginTop: number
}

export default class CenterLayout extends React.Component<Partial<Prop>, any> {

  render(): ReactNode {

    const styleGenerator = ({marginTop}: Partial<Prop>) => {

      if (!marginTop) {
        return;
      }

      return (
        {
          marginTop: marginTop ? `${marginTop}px` : "0px"
        }
      );

    };

    return (
      <div className={styles.base} style={styleGenerator(this.props)}>
        {this.props.children}
      </div>
    )
  }

}