export class File {

  private isDir: boolean;
  private name: string;
  private path: string;

  constructor(isDir: boolean, name: string, path: string) {
    this.isDir = isDir;
    this.name = name;
    this.path = path;
  }
}