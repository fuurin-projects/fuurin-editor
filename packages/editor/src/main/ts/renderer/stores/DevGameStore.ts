import {createSlice} from "@reduxjs/toolkit";

// Stateの初期状態
const initialState = {
  run: false
};

// Sliceを生成する
const slice = createSlice({
  name: "dev_game",
  initialState,
  reducers: {
    runGame: (state, action) => {
      console.log("DevGameStore");
      return Object.assign({}, state, {run: true})
    },
    stopGame: state => {
      return Object.assign({}, state, {run: false})
    },
  }
});

export {slice as DevGameStore};
