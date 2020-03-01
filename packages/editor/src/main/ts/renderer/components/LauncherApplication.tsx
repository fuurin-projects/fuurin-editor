import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CenterLayout from "./layout/CenterLayout";
import Logo from "./Logo";
import CreateProjectButton from "./button/CreateProjectButton";
import FlatButton from "./button/FlatButton";

class LauncherApplication extends React.Component {
  render() {
    return (
      <div>
        <CenterLayout marginTop={40}><Logo/></CenterLayout>
        <CenterLayout marginTop={72}><CreateProjectButton width={260}/></CenterLayout>
        <CenterLayout><FlatButton width={260} text={"既存のゲームプロジェクトを開く"}/></CenterLayout>
      </div>
    );
  }
}

export function createComponent() {
  ReactDOM.render(<LauncherApplication/>, document.querySelector('#launcher'));
}
