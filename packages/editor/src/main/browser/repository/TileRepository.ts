import Channels from "../../ts/common/Channels";
import LiveDate from "./LiveDate";
import {VFile} from "../../ts/common/VFile";

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

  public getTileList(folderPath: string = "$"): LiveDate<VFile[]> {

    return new LiveDate<VFile[]>(Channels.TILE_LIST, folderPath);

  }

  public async getTileImage(tilePath: string): Promise<Blob | null> {

    const imageData: ArrayBuffer | undefined = await window.ipcRenderer.invoke(Channels.GET_TILE_IMAGE, tilePath);

    if (imageData == null) {
      return null;
    }

    const blob = new Blob([imageData], {type: 'image/png'});

    return blob;
  }

}