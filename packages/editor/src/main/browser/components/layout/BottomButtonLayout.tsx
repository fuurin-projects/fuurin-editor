import React from "react";
import styles from "../../../../css/layer/BottomButtonLayout.css"


const BottomButtonLayout: React.FunctionComponent = (props) => {

  return (
    <>
      <div className={styles.container}>
        {props.children}
      </div>
    </>
  );

};


const BottomButtonLayoutMain: React.FunctionComponent = (props) => {

  return (
    <>
      {props.children}
    </>
  );

};

const BottomButtonLayoutBottom: React.FunctionComponent = (props) => {

  return (
    <>
      <div className={styles.bottom}>
        {props.children}
      </div>
    </>
  );

};

export default BottomButtonLayout;
export {BottomButtonLayoutMain, BottomButtonLayoutBottom};