import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NewProjectField from "./create_project/NewProjectField";
import BottomButtonLayout, {BottomButtonLayoutBottom, BottomButtonLayoutMain} from "./layout/BottomButtonLayout";
import NormalButton from "./button/NormalButton";
import CancelButton from "./button/CancelButton";

class LauncherApplication extends React.Component {
  render() {
    return (
      <BottomButtonLayout>
        <BottomButtonLayoutMain>
          <NewProjectField/>
        </BottomButtonLayoutMain>
        <BottomButtonLayoutBottom>
          <NormalButton text={"作成"}/><CancelButton/>
        </BottomButtonLayoutBottom>
      </BottomButtonLayout>
    );
  }
}

export function createComponent() {
  ReactDOM.render(<LauncherApplication/>, document.querySelector('#create_project'));
}
