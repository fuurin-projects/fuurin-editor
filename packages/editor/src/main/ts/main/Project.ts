export default class Project {

  private _name: string;

  private _dir: string;

  constructor(name: string, dir: string) {
    this._name = name;
    this._dir = dir;
  }

  get name(): string {
    return this._name;
  }

  get dir(): string {
    return this._dir;
  }
}