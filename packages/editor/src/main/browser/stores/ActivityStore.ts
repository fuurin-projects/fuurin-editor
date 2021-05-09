import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type ActivityType = "general" | "tile" | "world" | "setting";

type SliceState = { currentActivity: ActivityType };

// Stateの初期状態
const initialState: SliceState = {
  currentActivity: "general"
};

// Sliceを生成する
const slice = createSlice({
  name: "activity",
  initialState: initialState,
  reducers: {
    onActivity: (state, action: PayloadAction<ActivityType>) => {
      return Object.assign({}, state, {currentActivity: action.payload})
    },
  }
});

export {slice as ActivityStore, ActivityType};
