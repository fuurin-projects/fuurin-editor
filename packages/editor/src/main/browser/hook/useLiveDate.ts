import {useEffect, useState} from "react";
import LiveDate from "../repository/LiveDate";

/**
 * LiveDateをhock化して使いやすくしたもの
 *
 * @param liveDate
 * @param initialState
 */
export const useLiveDate = <T>(liveDate: LiveDate<T>, initialState: T): T => {

  const [date, setDate] = useState<T>(initialState);

  useEffect(() => {

    let unmounted = false;

    function handleListChange(list: T) {
      if (unmounted) {
        return;
      }

      setDate(list);
      
    }

    liveDate.on(handleListChange);

    return function cleanup() {
      unmounted = true;
      liveDate.off(handleListChange);
    }

  }, []);

  return date

};