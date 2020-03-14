import {app} from 'electron';
import path from "path";
import fs from "fs";
import {Preference, Project} from "../common/Preference";

export default class Configuration {

  private static instance_: Configuration;
  private preferencePath: string;

  private preference: Preference | undefined;

  private constructor() {
    this.preferencePath = path.resolve(app.getPath('userData'), "./preference.json");
  }

  public static instance(): Configuration {

    if (!this.instance_) {
      this.instance_ = new Configuration();
    }

    return this.instance_;
  }

  private defaultPreference: Preference = {
    projects: []
  };

  public async init() {

    try {
      const stats = await fs.promises.stat(this.preferencePath);
    } catch (error) {
      if (error.code === 'ENOENT') {
        //設定ファイルがない場合は作成する
        await this.writePreference(this.defaultPreference);

        console.log('Init preference file.');
      } else {
        console.log(error);
      }
    }

    console.log("Load Config");
    const data = JSON.parse(fs.readFileSync(this.preferencePath, 'utf8')) as Preference;
    this.preference = data;

  }

  private async writePreference(data: Preference) {
    await fs.promises.writeFile(this.preferencePath, JSON.stringify(data));
  }

  public async addProject(name: string, dir: string): Promise<void> {

    this.preference?.projects.push({
      name: name,
      dir: dir,
    });

    this.writePreference(this.preference!);

  }

  public async deleteProject(name: string, dir: string) {

    if (this.preference == undefined) {
      return;
    }

    console.log(`deleteProject: ${name}. ${dir}`);

    this.preference.projects = this.preference.projects.filter(project => {
      if (project.name !== name) {
        return true
      }
      if (project.dir !== dir) {
        return true;
      }
      return false;
    });

    this.writePreference(this.preference!);

  }

  public getProjectList(): Project[] {
    return this.preference!.projects;
  }


}
