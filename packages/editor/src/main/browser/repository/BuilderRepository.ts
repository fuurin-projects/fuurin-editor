import Channels from "../../ts/common/Channels";

export class BuilderRepository {

  private static instance_: BuilderRepository;

  private constructor() {
  }

  public static instance(): BuilderRepository {

    if (!this.instance_) {
      this.instance_ = new BuilderRepository();
    }

    return this.instance_;
  }

  public async buildDev(): Promise<void> {

    const message = await window.ipcRenderer.invoke(Channels.BUILD_DEV);

    console.log(message);

  }

}