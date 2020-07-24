import {createSlice} from "@reduxjs/toolkit";

// Stateの初期状態
const initialState = {
  currentActivity: ""
};

// Sliceを生成する
const slice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    onActivity: (state, action) => {
      return Object.assign({}, state, {currentActivity: action.payload})
    },
  }
});

export {slice as ActivityStore};