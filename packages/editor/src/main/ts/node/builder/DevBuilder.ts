import path from "path";
import {promises as fs} from "fs";
import {app} from 'electron';

/**
 * ゲームの開発中に使用するビルダー
 */
export class DevBuilder {

  public static async buildDevHtml(dir: string) {

    console.log(`buildHtml ${dir}`);
    const htmlDir = path.resolve(app.getAppPath(), "./resources/dev_game.html");
    const text = await fs.readFile(htmlDir, 'utf8');

    //フォルダを作成
    await fs.mkdir(path.resolve(dir, "./build/dev"), {recursive: true});

    await fs.writeFile(path.resolve(dir, "./build/dev/index.html"), text, 'utf8');

    console.log(dir);

    return text;
  }

  /**
   * 指定したディレクトリにgame用のjsファイルを出力する
   * @param dir
   */
  public static async buildJS(dir: string) {

    console.log(`buildJS ${dir}`);
    const gameDir = path.resolve(app.getAppPath(), "./resources/game.js");
    console.log(gameDir);
    const text = await fs.readFile(gameDir, 'utf8');
    console.log(text);

    //フォルダを作成
    await fs.mkdir(path.resolve(dir, "./build/dev/js"), {recursive: true});

    await fs.writeFile(path.resolve(dir, "./build/dev/js/game.js"), text, 'utf8');

    console.log(dir);

    return text;

  }

}