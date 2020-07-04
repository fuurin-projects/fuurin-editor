import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {RunButton} from "../../button/runbutton/RunButton";
import styles from "./main_application.css";

export const MainApplication: React.FunctionComponent = (props): React.ReactElement => {

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.header}>
          <RunButton/>
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
  ReactDOM.render(<MainApplication/>, document.querySelector('#main'));
}