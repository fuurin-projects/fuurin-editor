import Project from "./Project";
import {promises as fs} from "fs";
import * as path from "path";

/**
 * 画像を管理しているクラス
 */
export class ImageManager {

  //プロジェクトからのデータの位置
  private static IMAGE_DATA_PATH = "./data/assets/textures/";

  /**
   * パスを元に画像データを返却する
   * @param project プロジェクト
   * @param imagePath 画像のパス
   */
  public static async getImage(project: Project, imagePath: string): Promise<ArrayBuffer | null> {


    if (imagePath.startsWith("textures@")) {
      imagePath = imagePath.replace("textures@", "");
    }

    const dataPath = `${this.IMAGE_DATA_PATH}/${imagePath}`;

    try {
      const buffer: Buffer = await fs.readFile(path.resolve(project.dir, dataPath));

      return new Uint8Array(buffer).buffer;
    } catch (e) {
      console.log(`Not found image. path=${dataPath}`);
      return null;
    }


  }

}