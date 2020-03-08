import LauncherWindow from "./window/LauncherWindow";
import {app, BrowserWindow, ipcMain} from 'electron';
import SystemHandler from "./handler/SystemHandler";
import Configuration from "./Configuration";
import ProjectHandler from "./handler/ProjectHandler";

const path = require('path');

async function main() {

  await Configuration.instance().init();

  SystemHandler.init();
  ProjectHandler.init();

  app.whenReady().then(createWindow);

  ipcMain.on('test-message', (event, arg) => {
    console.log(arg);
    event.reply('test-reply', 'foo')
  });

}

async function createWindow() {

  console.log("create LauncherWindow!");
  let launcherWindow: BrowserWindow = new LauncherWindow().getRowBrowserWindow();

  launcherWindow.webContents.openDevTools();

  // and load the launcher.html of the app.
  await launcherWindow.loadFile(path.resolve(app.getAppPath(), "./html/launcher.html"));

}

main();