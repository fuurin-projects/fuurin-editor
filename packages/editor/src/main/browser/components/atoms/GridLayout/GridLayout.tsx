import React, {ReactNode} from "react";
import styles from "./GridLayout.css"


class GridLayout extends React.Component<any, any> {

  render(): ReactNode {
    return (
      <>
        <div className={styles.wrapper}>{this.props.children}</div>
      </>
    );
  }

}

class GridLayoutItem extends React.Component<any, any> {
  render(): ReactNode {
    return (
      <>
        <span className={styles.item}>{this.props.children}</span>
      </>
    );
  }
}

export {GridLayout, GridLayoutItem}