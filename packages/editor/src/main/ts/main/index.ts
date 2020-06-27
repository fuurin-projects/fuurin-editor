import {app, ipcMain} from 'electron';
import Configuration from "./Configuration";
import ProjectHandler from "./handler/ProjectHandler";
import WindowManager from "./WindowManager";
import ICPDispatcher from "./dispatcher/ICPDispatcher";

const path = require('path');

async function main() {

  await Configuration.instance().init();

  ProjectHandler.init();

  app.whenReady().then(async function () {
    WindowManager.instance().showLauncher();
  });

  ipcMain.on('test-message', (event, arg) => {
    console.log(arg);
    event.reply('test-reply', 'foo')
  });

  ICPDispatcher.registryICP(ipcMain)


}

main();