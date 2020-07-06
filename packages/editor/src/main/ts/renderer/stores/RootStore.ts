import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {DevGameStore} from "./DevGameStore";

const reducer = combineReducers({
  devGame: DevGameStore.reducer,
});


const store = configureStore({reducer});
const state = store.getState();

export type RootState = ReturnType<typeof reducer>
export {store as RootStore};