import Configuration from "./Configuration";
import Project from "./Project";
import GameInfo from "../common/GameInfo";
import GameInfoManager from "./GameInfoManager";

export default class ProjectManager {

  private static instance_: ProjectManager;

  private constructor() {
  }

  public static instance(): ProjectManager {

    if (!this.instance_) {
      this.instance_ = new ProjectManager();
    }

    return this.instance_;
  }

  public async createProject(name: string, dir: string): Promise<Project> {

    const project = new Project(name, dir);

    await Configuration.instance().addProject(name, dir);

    await this.initGameInfo(project);

    return project;

  }

  // gameinfo.jsonのファイルを生成する
  public async initGameInfo(project: Project) {
    const gameInfo = new GameInfo(project.name);
    await GameInfoManager.writeGameInfo(gameInfo, project.dir);
  }


}