import Channels from "../../ts/common/Channels";
import LiveDate from "./LiveDate";
import {VFile} from "../../ts/common/VFile";
import {ImageRepository} from "./ImageRepository";

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

    const message = await window.electronBridge.ipcRenderer.invoke(Channels.REGISTER_TILE, name, dir);

    console.log(message);

  }

  public getTileList(folderPath: string = "$"): LiveDate<VFile[]> {

    return new LiveDate<VFile[]>(Channels.TILE_LIST, folderPath);

  }

  /**
   * Tileに紐付いているプレビュー的なメイン画像を返却する
   * @param tilePath
   */
  public async getTilePreviewImage(tilePath: string): Promise<Blob | null> {

    const imagePath = await window.electronBridge.ipcRenderer.invoke(Channels.GET_TILE_IMAGE_PATH, tilePath);

    const imageData: Blob | null = await ImageRepository.instance().getImage(imagePath);

    if (imageData == null) {
      return null;
    }

    return imageData;
  }

}