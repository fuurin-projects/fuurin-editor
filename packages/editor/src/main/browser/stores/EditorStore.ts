import {createEntityAdapter, createSlice, EntityState, PayloadAction} from "@reduxjs/toolkit";
import {EditorData} from "./EditorData";


// interface EditorState {
//   currentEditor: number
//   editorList: EditorItem[]
//   editorDataList: EditorData<object>[]
// }


const editorDataAdapter = createEntityAdapter<EditorData>({
  selectId: (editorData) => editorData.path,
});

interface EditorState extends EntityState<EditorData> {
  currentEditor: number
  editorList: EditorItem[]
}

// Stateの初期状態
// const initialState: EditorState = {
//   currentEditor: -1,
//   editorList: new Array<EditorItem>(),
//   editorDataList: new Array<EditorData<object>>(),
// };

const initialState: EditorState = editorDataAdapter.getInitialState({
  currentEditor: -1,
  editorList: new Array<EditorItem>(),
});


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

        //タブ関係の処理
        state.currentEditor = number - 1;
        state.editorList = state.editorList.filter((item, index: number) => index !== number);

        //まだタブが残っているのにcurrentEditorが0以下になった場合に0に戻す
        if (state.currentEditor < 0 && state.editorList.length > 0) {
          state.currentEditor = 0;
        }

        //差分Dataの削除
        // const currentEditorPath = state.editorList[number].path;
        // if (state.editorDataList.has(currentEditorPath)) {
        //   state.editorDataList.delete(currentEditorPath);
        // }

      }

    },
    //エディタのデータ更新
    updateEditorData: (state, action: PayloadAction<EditorDataParam<object>>) => {

      const payload = action.payload;
      //const data = state.editorDataList.find(item => item.path == payload.path);

      const data = state.entities[payload.path];


      if (data === undefined) {

        editorDataAdapter.addOne(state, {
          path: payload.path,
          type: payload.type,
          viewData: payload.data,
          isDiff: payload.isDiff
        })

        //
        // state.editorDataList.push({
        //   path: payload.path,
        //   viewData: payload.data,
        //   isDiff: payload.isDiff
        // })

      } else {

        if (payload.canOverride) {
          data.viewData = payload.data;
          data.isDiff = payload.isDiff;
        }

      }


    }

  }
});


export {slice as EditorStore};


export type EditorItem = {

  path: string;
  name: string;

}

interface EditorDataParam<T extends object> {
  path: string
  type: string
  data: T
  isDiff: boolean,
  canOverride: boolean,
}

const {selectById, selectEntities} = editorDataAdapter.getSelectors();


export {EditorDataParam, selectById, selectEntities}


