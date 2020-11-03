import {app, ipcMain} from 'electron';
import installExtension, {REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS} from 'electron-devtools-installer';
import Configuration from "./Configuration";
import ICPDispatcher from "./dispatcher/ICPDispatcher";
import {WindowManager} from "./WindowManager";

const path = require('path');

async function main() {

  await Configuration.instance().init();

  ICPDispatcher.registryICP(ipcMain);

  app.whenReady().then(async function () {

    installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));

    WindowManager.instance().showLauncher();


  });

  ipcMain.on('test-message', (event, arg) => {
    console.log(arg);
    event.reply('test-reply', 'foo')
  });


}

main();