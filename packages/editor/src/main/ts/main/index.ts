import LauncherWindow from "./window/LauncherWindow";

const path = require('path');

import {app, BrowserWindow, ipcMain} from 'electron';
import SystemHandler from "./handler/SystemHandler";

async function createWindow() {

  console.log("create LauncherWindow!");
  let launcherWindow: BrowserWindow = new LauncherWindow().getRowBrowserWindow();

  launcherWindow.webContents.openDevTools();

  // and load the launcher.html of the app.
  await launcherWindow.loadFile(path.resolve(app.getAppPath(), "./html/launcher.html"));

}

SystemHandler.init();

ipcMain.on('test-message', (event, arg) => {
  console.log(arg);
  event.reply('test-reply', 'foo')
});

app.whenReady().then(createWindow);