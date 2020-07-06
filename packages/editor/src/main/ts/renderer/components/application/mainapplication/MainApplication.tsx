import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {RunButton} from "../../button/runbutton/RunButton";
import styles from "./main_application.css";
import {RootState, RootStore} from "../../../stores/RootStore";
import {Provider, useSelector} from "react-redux";
import {ReRunButton} from "../../button/rerunbutton/ReRunButton";

//reduxを設定するためのラッパー
const MainApplicationContainer: React.FunctionComponent = (props) => {
  return (
    <>
      <Provider store={RootStore}>
        <MainApplication/>
      </Provider>
    </>
  )
};

export const MainApplication: React.FunctionComponent = (props): React.ReactElement => {

  const isRun = useSelector((state: RootState) => state.devGame.run);

  const getRunButton = () => {
    if (isRun) {
      return <ReRunButton/>
    } else {
      return <RunButton/>
    }

  };

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.header}>
          {getRunButton()}
        </div>
        <div className={styles.main}>メインエディター</div>
        <div className={styles.footer}>
          ここに色々
        </div>
      </div>
    </>
  );

};

export function createComponent() {
  ReactDOM.render(<MainApplicationContainer/>, document.querySelector('#main'));
}