import LiveDate from "./LiveDate";

/**
 * LiveDateをテストで使いやすいようにモックする関数
 * @param date LiveDateの中のデータ
 */
const createLiveDateMock = <T>(date: T) => {
  const liveDate = new LiveDate<T>('LiveDateMock');
  liveDate.on = (callback) => {
    callback(date);
  };
  return liveDate;
};

export {createLiveDateMock};