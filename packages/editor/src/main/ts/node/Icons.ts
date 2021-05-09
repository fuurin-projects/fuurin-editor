import path from "path";
import {app} from "electron";

/**
 * エディタ内で使用する各種アイコンを管理するクラス
 */
export class Icons {

  public static getAppIcon(): string {
    return path.resolve(app.getAppPath(), './resources/images/fuurin_icon_16.png')
  }

}