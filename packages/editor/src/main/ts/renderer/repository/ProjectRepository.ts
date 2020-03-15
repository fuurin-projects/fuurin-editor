import Channels from "../../common/Channels";
import {Project} from "../../common/Preference";
import LiveDate from "./LiveDate";

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

  public deleteGameProject(project: Project) {

    console.log(`deleteGameProject ${project.name}. ${project.dir}`);

    const message = window.ipcRenderer.sendSync(Channels.DELETE_PROJECT, project.name, project.dir);
    console.log(message);
  }

  public getProjectListOld(): Promise<Project[]> {

    return new Promise((resolve, reject) => {

      const list = window.ipcRenderer.sendSync(Channels.PROJECT_LIST);
      resolve(list);

    })

  }

  public getProjectList(): LiveDate<Project[]> {

    return new LiveDate<Project[]>(Channels.PROJECT_LIST);

  }

}
