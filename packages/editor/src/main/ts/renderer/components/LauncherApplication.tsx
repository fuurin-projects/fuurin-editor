import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CenterLayout from "./layout/CenterLayout";
import Logo from "./Logo";
import CreateProjectButton from "./button/CreateProjectButton";
import FlatButton from "./button/FlatButton";
import ProjectRepository from "../repository/ProjectRepository";
import {Project} from "../../common/Preference";
import ProjectList from "./launcher/ProjectList";

interface Prop {

}

interface State {
  projectList: Project[];
}

class LauncherApplication extends React.Component<Prop, State> {

  constructor(props: Prop) {
    super(props);
    this.state = {projectList: []};
  }


  async componentDidMount() {

    const list = await ProjectRepository.instance().getProjectList();
    console.log(list);
    this.setState({projectList: list});

  }

  render() {
    return (
      <div style={{display: "flex", height: "100%"}}>

        {
          this.state.projectList.length > 0 &&
          <div style={{width: "280px", backgroundColor: "#FFFFFF"}}>
            <ProjectList projectList={this.state.projectList}/>
          </div>
        }

        <div style={{width: "calc(100% - 280px)"}}>
          <CenterLayout marginTop={40}><Logo/></CenterLayout>
          <CenterLayout marginTop={72}><CreateProjectButton width={260}/></CenterLayout>
          <CenterLayout><FlatButton width={260} text={"既存のゲームプロジェクトを開く"}/></CenterLayout>
        </div>
      </div>
    );
  }
}

export function createComponent() {
  ReactDOM.render(<LauncherApplication/>, document.querySelector('#launcher'));
}
