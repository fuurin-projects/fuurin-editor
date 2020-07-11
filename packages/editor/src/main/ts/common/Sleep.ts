export class Sleep {

  /**
   * 特定の時間だけ停止する
   * @param time 停止するms
   */
  public static async sleep(time: number) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

}