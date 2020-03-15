import {app, ipcMain} from 'electron';
import SystemHandler from "./handler/SystemHandler";
import Configuration from "./Configuration";
import ProjectHandler from "./handler/ProjectHandler";
import WindowManager from "./WindowManager";

const path = require('path');

async function main() {

  await Configuration.instance().init();

  SystemHandler.init();
  ProjectHandler.init();

  app.whenReady().then(async function () {
    WindowManager.instance().showLauncher();
  });

  ipcMain.on('test-message', (event, arg) => {
    console.log(arg);
    event.reply('test-reply', 'foo')
  });

}

main();