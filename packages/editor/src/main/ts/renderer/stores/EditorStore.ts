import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Stateの初期状態
const initialState = {
  currentEditor: -1,
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
    changeEditor: (state, action: PayloadAction<number>) => {

      const number = action.payload;

      if (state.editorList.length > number) {
        state.currentEditor = number;
      }

    },
    closeEditor: (state, action: PayloadAction<number>) => {

      const number = action.payload;

      if (state.editorList.length > number) {
        state.currentEditor = number - 1;
        state.editorList = state.editorList.filter((item, index: number) => index !== number);
      }

    },

  }
});


export {slice as EditorStore};


export type EditorItem = {

  path: string;
  name: string;

}
