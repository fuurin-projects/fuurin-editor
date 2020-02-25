import LauncherWindow from "./window/LauncherWindow";

const path = require('path');

import {app, BrowserWindow, ipcMain} from 'electron';

async function createWindow() {

  console.log("create LauncherWindow!");
  let launcherWindow: BrowserWindow = new LauncherWindow().getRowBrowserWindow();

  launcherWindow.webContents.openDevTools();

  // and load the launcher.html of the app.
  await launcherWindow.loadFile(path.resolve(app.getAppPath(), "./html/launcher.html"));

}

ipcMain.on('test-message', (event, arg) => {
  console.log(arg);
  event.reply('test-reply', 'foo')
});

app.whenReady().then(createWindow);