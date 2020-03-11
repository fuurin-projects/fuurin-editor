'use strict';
const path = require('path');

module.exports = [
  //Mainプロセス
  {
    mode: "development",
    target: "electron-main",
    entry: path.resolve(__dirname, "./src/main/ts/main/index.ts"),
    output: {
      path: path.resolve(__dirname, "../../build/app/js"),
      filename: 'fuurin-editor.js'
    },
    module: {
      rules: [
        {
          // 拡張子 .ts の場合
          test: /\.ts$/,
          use: "ts-loader"
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".js"]
    },
    externals: [
      //'electron',
      //'path'
    ],
  },
  //PreLoadプロセス
  {
    mode: "development",
    target: "electron-main",
    entry: path.resolve(__dirname, "./src/main/ts/main/preload.ts"),
    output: {
      path: path.resolve(__dirname, "../../build/app/js"),
      filename: 'preload.js'
    },
    module: {
      rules: [
        {
          // 拡張子 .ts の場合
          test: /\.ts$/,
          use: "ts-loader"
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".js"]
    },
  },
  //Renderer(スタート画面)プロセス
  {
    mode: "development",//"production",
    target: "web",
    node: {
      global: false
    },
    entry: path.resolve(__dirname, "./src/main/ts/renderer/init/Launcher.ts"),
    output: {
      path: path.resolve(__dirname, "../../build/app/js"),
      filename: 'launcher.js'
    },
    module: {
      rules: [
        {
          // 拡張子 .ts の場合
          test: /\.tsx?$/,
          use: "ts-loader"
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader?modules'],
        },
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
  },
  //Renderer(新規プロジェクト)プロセス
  {
    mode: "development",//"production",
    target: "web",
    node: {
      global: false
    },
    entry: path.resolve(__dirname, "./src/main/ts/renderer/init/CreateProject.ts"),
    output: {
      path: path.resolve(__dirname, "../../build/app/js"),
      filename: 'create_project.js'
    },
    module: {
      rules: [
        {
          // 拡張子 .ts の場合
          test: /\.tsx?$/,
          use: "ts-loader"
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader?modules'],
        },
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
  }
];
