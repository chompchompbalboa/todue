//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { combineReducers } from 'redux'
import activeReducer from '@/state/active/reducers'
import historyReducer from '@/state/history/reducers'
import sublistReducer from '@/state/sublist/reducers'
import sublistTagReducer from '@/state/sublistTag/reducers'
import listReducer from '@/state/list/reducers'
import tagReducer from '@/state/tag/reducers'
import todoReducer from '@/state/todo/reducers'
import todoTagReducer from '@/state/todoTag/reducers'

//-----------------------------------------------------------------------------
// Combine Reducers
//-----------------------------------------------------------------------------
export const appReducer = combineReducers({
  active: activeReducer,
  history: historyReducer,
  list: listReducer,
  sublist: sublistReducer,
  sublistTag: sublistTagReducer,
  tag: tagReducer,
  todo: todoReducer,
  todoTag: todoTagReducer,
})

export type IAppState = ReturnType<typeof appReducer>
