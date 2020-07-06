import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {RunButton} from "../../button/runbutton/RunButton";
import styles from "./main_application.css";
import {RootStore} from "../../../stores/RootStore";
import {Provider} from "react-redux";

export const MainApplication: React.FunctionComponent = (props): React.ReactElement => {

  return (
    <>
      <Provider store={RootStore}>
        <div className={styles.main_container}>
          <div className={styles.header}>
            <RunButton/>
          </div>
          <div className={styles.main}>メインエディター</div>
          <div className={styles.footer}>
            ここに色々
          </div>
        </div>
      </Provider>
    </>
  );

};

export function createComponent() {
  ReactDOM.render(<MainApplication/>, document.querySelector('#main'));
}