import {TileState} from "../repository/TileRepository";

interface EditorData {
  type: string
  path: string
  viewData?: any
  isDiff: boolean
}

interface EditorDataTile extends EditorData {
  type: 'tile'
  path: string
  viewData?: TileState
  isDiff: boolean
}

export {EditorData, EditorDataTile}