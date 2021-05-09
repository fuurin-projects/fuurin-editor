import Channels from "../../ts/common/Channels";

/**
 * 画像データを管理するレポジトリ
 */
export class ImageRepository {

  private static instance_: ImageRepository;

  private constructor() {
  }

  public static instance(): ImageRepository {

    if (!this.instance_) {
      this.instance_ = new ImageRepository();
    }

    return this.instance_;
  }

  public async getImage(imagePath: string): Promise<Blob | null> {

    const imageData: ArrayBuffer | undefined = await window.ipcRenderer.invoke(Channels.GET_IMAGE, imagePath);

    if (imageData == null) {
      return null;
    }

    const blob = new Blob([imageData], {type: 'image/png'});

    return blob;
  }

}