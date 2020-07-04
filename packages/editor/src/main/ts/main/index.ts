import {app, ipcMain} from 'electron';
import Configuration from "./Configuration";
import ICPDispatcher from "./dispatcher/ICPDispatcher";
import {WindowManager} from "./WindowManager";

const path = require('path');

async function main() {

  await Configuration.instance().init();

  ICPDispatcher.registryICP(ipcMain);

  app.whenReady().then(async function () {
    WindowManager.instance().showLauncher();
  });

  ipcMain.on('test-message', (event, arg) => {
    console.log(arg);
    event.reply('test-reply', 'foo')
  });


}

main();