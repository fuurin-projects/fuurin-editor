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

  public async createGameProject(gameName: string, dir: string): Promise<void> {

    console.log(`CreateProject: name=${gameName}, dir=${dir}`);

    const message = await window.ipcRenderer.invoke(Channels.CREATE_PROJECT, gameName, dir);
    console.log(message);

  }

  public async deleteGameProject(project: Project) {

    console.log(`deleteGameProject ${project.name}. ${project.dir}`);

    const message = await window.ipcRenderer.invoke(Channels.DELETE_PROJECT, project.name, project.dir);
    console.log(message);
  }

  public getProjectList(): LiveDate<Project[]> {

    return new LiveDate<Project[]>(Channels.PROJECT_LIST);

  }

}
