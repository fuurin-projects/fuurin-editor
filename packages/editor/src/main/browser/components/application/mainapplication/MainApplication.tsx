import * as React from 'react';
import {useEffect} from 'react';
import * as ReactDOM from 'react-dom';
import {RunButton} from "../../button/runbutton/RunButton";
import styles from "./main_application.css";
import {RootState, RootStore} from "../../../stores/RootStore";
import {Provider, useDispatch, useSelector} from "react-redux";
import {ReRunButton} from "../../button/ReRunButton/ReRunButton";
import {GameRepository} from "../../../repository/GameRepository";
import {DevGameStore} from "../../../stores/DevGameStore";
import {StopButton} from "../../button/stopbutton/StopButton";
import {ActivityContainer} from "../../activity/activity_container/ActivityContainer";

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
  const dispatch = useDispatch();

  useEffect(() => {

    const isRunLiveDate = GameRepository.instance().getIsRun();
    const changeIsRun = (isRun: boolean) => {
      console.log(isRun);
      if (isRun) {
        dispatch(DevGameStore.actions.runGame());
      } else {
        dispatch(DevGameStore.actions.stopGame());
      }
    };
    isRunLiveDate.on(changeIsRun);

    return () => {
      isRunLiveDate.off(changeIsRun);
    }

  }, [dispatch]);

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
          <StopButton/>
        </div>
        <div className={styles.main}><ActivityContainer/></div>
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