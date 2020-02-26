import {app, BrowserWindow, BrowserWindowConstructorOptions} from 'electron';
import path from 'path';

export default class LauncherWindow {

  private readonly rowBrowserWindow: BrowserWindow;

  constructor(option: BrowserWindowConstructorOptions = {}) {

    const opt = Object.assign(option, {
      width: 680,
      height: 510,
      backgroundColor: "#f5f5f5",
      icon: path.resolve(app.getAppPath(), './resources/fuurin_icon_16.png'),
      webPreferences: {
        nodeIntegration: false,
        preload: path.resolve(app.getAppPath(), './js/preload.js'),
      }
    });
    this.rowBrowserWindow = new BrowserWindow(opt);

    this.rowBrowserWindow.setMenu(null);
  }

  public getRowBrowserWindow(): BrowserWindow {
    return this.rowBrowserWindow;
  }

}