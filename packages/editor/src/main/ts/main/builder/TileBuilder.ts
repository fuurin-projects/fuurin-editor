import Project from "../Project";
import {constants, promises as fs} from "fs";
import * as path from "path";

export class TileBuilder {

  private static TILE_IMAGE_PATH = "./data/assets/textures/tile/";
  private static TILE_DATA_PATH = "./data/assets/tile_states";

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


}

class TileState {

  private collision = true;

  private image = "";

  constructor(collision: boolean, image: string) {
    this.collision = collision;
    this.image = image;
  }

}