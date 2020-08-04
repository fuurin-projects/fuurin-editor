import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Stateの初期状態
const initialState = {
  currentEditor: 0,
  editorList: new Array<EditorItem>()
};

// Sliceを生成する
const slice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    openEditor: (state, action: PayloadAction<EditorItem>) => {

      const number = state.editorList.findIndex(item => item.path == action.payload.path);

      if (number != -1) {
        //すでに開いている場合
        state.currentEditor = number;
      } else {
        state.editorList.push(action.payload);
        state.currentEditor = state.editorList.length - 1;
      }


    },
  }
});

export {slice as EditorStore};


export type EditorItem = {

  path: string | undefined;

}