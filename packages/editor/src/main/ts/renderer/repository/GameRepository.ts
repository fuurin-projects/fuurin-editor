import Channels from "../../common/Channels";

export class GameRepository {

  private static instance_: GameRepository;

  private constructor() {
  }

  public static instance(): GameRepository {

    if (!this.instance_) {
      this.instance_ = new GameRepository();
    }

    return this.instance_;
  }

  public async runDev(): Promise<void> {

    const message = await window.ipcRenderer.invoke(Channels.RUN_DEV);

    console.log(message);

  }

}