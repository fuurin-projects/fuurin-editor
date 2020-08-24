import React, {ReactNode} from "react";
import styles from "../../../../css/layer/GridLayout.css"


export class GridLayout extends React.Component<any, any> {

  render(): ReactNode {
    return (
      <>
        <div className={styles.wrapper}>{this.props.children}</div>
      </>
    );
  }

}

export class GridLayoutItem extends React.Component<any, any> {
  render(): ReactNode {
    return (
      <>
        <span className={styles.item}>{this.props.children}</span>
      </>
    );
  }
}