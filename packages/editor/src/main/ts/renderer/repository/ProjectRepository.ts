import Channels from "../../common/Channels";
import {Project} from "../../common/Preference";
import IpcRendererEvent = Electron.IpcRendererEvent;

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

    return new LiveDate<Project[]>();

  }


}

class LiveDate<V> {

  public callbackList = new Map<any, (event: IpcRendererEvent, ...args: any[]) => void>();

  public on(callback: (project: V) => void) {

    const hock = (event: IpcRendererEvent, ...args: any[]) => {
      console.log(`LiveDate: ${JSON.stringify(args[0])}`);
      callback(args[0]);
    };

    this.callbackList.set(callback, hock);

    window.ipcRenderer.addListener(Channels.PROJECT_LIST, hock);

    //初回時は強制で最新のデータを発火
    window.ipcRenderer.send(Channels.PROJECT_LIST);

  }

  public off(callback: (project: Project[]) => void) {

    const hock = this.callbackList.get(callback);

    window.ipcRenderer.removeListener(Channels.PROJECT_LIST, hock!);

  }

}