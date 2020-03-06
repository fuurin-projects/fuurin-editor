import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NewProjectFieldGroup from "./create_project/NewProjectFieldGroup";
import BottomButtonLayout, {BottomButtonLayoutBottom, BottomButtonLayoutMain} from "./layout/BottomButtonLayout";
import NormalButton from "./button/NormalButton";
import CancelButton from "./button/CancelButton";

class LauncherApplication extends React.Component {
  render() {
    return (
      <BottomButtonLayout>
        <BottomButtonLayoutMain>
          <NewProjectFieldGroup/>
        </BottomButtonLayoutMain>
        <BottomButtonLayoutBottom>
          <NormalButton type={"current"} text={"作成"} margin={"14px 14px 14px 0"}/><CancelButton/>
        </BottomButtonLayoutBottom>
      </BottomButtonLayout>
    );
  }
}

export function createComponent() {
  ReactDOM.render(<LauncherApplication/>, document.querySelector('#create_project'));
}
