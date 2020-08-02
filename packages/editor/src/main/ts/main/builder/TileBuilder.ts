import Project from "../Project";
import {constants, Dirent, promises as fs} from "fs";
import * as path from "path";
import {createVFile, VFile} from "../../common/VFile";

export class TileBuilder {

  private static TILE_IMAGE_PATH = "./data/assets/textures/tile/";
  private static TILE_DATA_PATH = "./data/assets/tile_states/";

  public static async createTile(project: Project, name: string, fileDir: string) {

    console.log(`[TileBuilder] create tile. name=${name}, dir=${fileDir}`);

    const imageDir = `${this.TILE_IMAGE_PATH}/base`;
    await fs.mkdir(path.resolve(project.dir, imageDir), {recursive: true});
    const imagePath = `${this.TILE_IMAGE_PATH}/base/${path.basename(fileDir)}`;

    await fs.copyFile(fileDir, path.resolve(project.dir, imagePath), constants.COPYFILE_EXCL);

    const dataDir = `${this.TILE_DATA_PATH}/base/`;
    await fs.mkdir(path.resolve(project.dir, dataDir), {recursive: true});

    const data = JSON.stringify(new TileState(false, imagePath));
    const dataPath = `${this.TILE_DATA_PATH}/base/${name}.json`;

    await fs.writeFile(path.resolve(project.dir, dataPath), data);

  }

  public static async getTileList(project: Project, dir: string): Promise<VFile[]> {

    let dataDir = "";
    let vDataDir = "";
    if (dir === "$") {
      dataDir = `${this.TILE_DATA_PATH}`;
      vDataDir = ``
    } else {
      dataDir = `${this.TILE_DATA_PATH}/${dir}`;
      vDataDir = `${dir}`
    }

    const fileStrings: Dirent[] = await fs.readdir(path.resolve(project.dir, dataDir), {withFileTypes: true});

    return fileStrings.map(dirent => {

      return createVFile(dirent.isDirectory(), path.basename(dirent.name), path.join(vDataDir, path.basename(dirent.name)))
    });

  }


}

class TileState {

  private collision = true;

  private image = "";

  constructor(collision: boolean, image: string) {
    this.collision = collision;
    this.image = image;
  }

}