export default class SystemRepository {

  public static async getVersion(): Promise<string> {

    return new Promise((resolve, reject) => {

      const version = window.ipcRenderer.sendSync("version");
      resolve(version);

    })

  }

}