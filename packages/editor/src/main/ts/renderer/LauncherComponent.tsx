import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FlatButton from "./component/FlatButton";
import CenterLayout from "./component/CenterLayout";
import Logo from "./component/Logo";

class LauncherComponent extends React.Component {
  render() {
    return (
      <div>
        <CenterLayout marginTop={20}><Logo/></CenterLayout>
        <CenterLayout marginTop={72}><FlatButton text={"新規でゲームを作成する"}/></CenterLayout>
        <CenterLayout><FlatButton text={"既存のゲームプロジェクトを開く"}/></CenterLayout>
      </div>
    );
  }
}

export function createComponent() {
  ReactDOM.render(<LauncherComponent/>, document.querySelector('#launcher'));
}
