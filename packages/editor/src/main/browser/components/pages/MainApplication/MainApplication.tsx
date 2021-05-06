import "../../../css/reset.static.css";
import "../../../css/global.static.css";
import React, {useEffect} from "react";
import styles from "./MainApplication.css"
import {Provider, useDispatch, useSelector} from "react-redux";
import {RootState, RootStore} from "../../../stores/RootStore";
import {GameRepository} from "../../../repository/GameRepository";
import {DevGameStore} from "../../../stores/DevGameStore";
import * as ReactDOM from "react-dom";
import {StopButton} from "../../organism/toolbar/StopButton/StopButton";
import {RunButton} from "../../organism/toolbar/RunButton/RunButton";
import {ReRunButton} from "../../organism/toolbar/ReRunButton/ReRunButton";
import {ActivityContainer} from "../../organism/activity/ActivityContainer/ActivityContainer";

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

const MainApplication: React.FunctionComponent = (props): React.ReactElement => {

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

function createComponent() {
  ReactDOM.render(<MainApplicationContainer/>, document.querySelector('#main'));
}

export {createComponent, MainApplication, MainApplicationContainer};
