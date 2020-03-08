import Channels from "../../common/Channels";
import {Project} from "../../common/Preference";

export default class ProjectRepository {

  private static instance_: ProjectRepository;

  private constructor() {
  }

  public static instance(): ProjectRepository {

    if (!this.instance_) {
      this.instance_ = new ProjectRepository();
    }

    return this.instance_;
  }

  public createGameProject(gameName: string, dir: string): void {

    console.log(`CreateProject: name=${gameName}, dir=${dir}`);

    const message = window.ipcRenderer.sendSync(Channels.CREATE_PROJECT, gameName, dir);
    console.log(message);

  }

  public getProjectList(): Promise<Project[]> {

    return new Promise((resolve, reject) => {

      const list = window.ipcRenderer.sendSync(Channels.PROJECT_LIST);
      resolve(list);

    })

  }

}