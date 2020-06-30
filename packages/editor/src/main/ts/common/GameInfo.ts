/**
 * ゲーム情報を保持するクラス
 */
export default class GameInfo {

  private name: string;

  constructor(_name: string) {
    this.name = _name;
  }

  getName(): string {
    return this.name;
  }

  set setName(value: string) {
    this.name = value;
  }

}