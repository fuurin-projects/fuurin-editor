'use strict';

const builder = require('electron-builder');
const Platform = builder.Platform;
const fs = require('fs');
const path = require('path');
const packagejson = JSON.parse(fs.readFileSync(path.resolve('../../package.json'), 'utf8'));

builder.build({
  targets: Platform.WINDOWS.createTarget(),
  config: {
    'appId': `shift02.${packagejson.name}`,
    buildVersion: `${packagejson.version}`,
    'win': {
      'target': ['dir', 'zip', 'portable'],
    },
    "directories": {
      buildResources: path.resolve("../../build/app"),
      app: path.resolve("../../build/app"),
      output: path.resolve("../../dist")
    },
    // extraResources: [
    //   "html/launcher.html"
    // ]
    // files: [
    //   "html/",
    //   "js/"
    //   // path.resolve("../../build/app/html/*"),
    //   // path.resolve("../../build/app/js/*"),
    //   // path.resolve("../../build/app/node_modules/*"),
    //   // path.resolve("../../build/app/package.json")
    // ]
  },
});