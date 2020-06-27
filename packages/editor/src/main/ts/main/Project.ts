/**
 * エディター自体が保持するプロジェクト(ゲーム)情報
 */
export default class Project {

  private readonly _name: string;

  private readonly _dir: string;

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