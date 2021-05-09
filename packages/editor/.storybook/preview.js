import "../src/main/browser/css/reset.static.css";
import "../src/main/browser/css/global.static.css";
import SystemRepository from "../src/main/browser/repository/SystemRepository";

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
};

export const decorators = [
  (Story) => {

    //可変にする必要がないので固定
    SystemRepository.getVersion = async () => {
      return '1.1.1';
    }

    SystemRepository.getDesktopDir = async () => {
      return 'tmp/desktop/';
    }

    return (
      <Story/>
    )
  },
];
