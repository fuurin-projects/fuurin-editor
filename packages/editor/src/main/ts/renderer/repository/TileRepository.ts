import Channels from "../../common/Channels";

export class TileRepository {

  private static instance_: TileRepository;

  private constructor() {
  }

  public static instance(): TileRepository {

    if (!this.instance_) {
      this.instance_ = new TileRepository();
    }

    return this.instance_;
  }

  public async registerTile(name: string, dir: string): Promise<void> {

    const message = await window.ipcRenderer.invoke(Channels.REGISTER_TILE, name, dir);

    console.log(message);

  }

}