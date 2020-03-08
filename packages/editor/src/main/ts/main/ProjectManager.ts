import Configuration from "./Configuration";

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

  public async createProject(name: string, dir: string): Promise<void> {

    await Configuration.instance().addProject(name, dir);

  }

}