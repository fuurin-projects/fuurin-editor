import {createComponent} from "../components/MainApplication";

/**
 * メイン画面の表示時に最初に呼ばれるメソッド
 */
function main() {

  window.addEventListener('DOMContentLoaded', (event) => {
    console.log("Load React Component");
    createComponent();
  });

}

main();