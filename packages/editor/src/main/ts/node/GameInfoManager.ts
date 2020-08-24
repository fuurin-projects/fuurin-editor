import GameInfo from "../common/GameInfo";
import fs from "fs";
import path from "path";

/**
 * Game毎に存在するマネージャー
 */
export default class GameInfoManager {

  public static async writeGameInfo(gameInfo: GameInfo, dir: string) {

    await fs.promises.writeFile(path.resolve(dir, "./game_info.json"), JSON.stringify(gameInfo));

  }

}