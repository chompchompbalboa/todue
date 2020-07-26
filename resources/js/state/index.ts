//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { combineReducers } from 'redux'
import activeReducer from '@/state/active/reducers'
import historyReducer from '@/state/history/reducers'
import sublistReducer from '@/state/sublist/reducers'
import listReducer from '@/state/list/reducers'
import tagReducer from '@/state/tag/reducers'
import todoReducer from '@/state/todo/reducers'

//-----------------------------------------------------------------------------
// Combine Reducers
//-----------------------------------------------------------------------------
export const appReducer = combineReducers({
  active: activeReducer,
  history: historyReducer,
  list: listReducer,
  sublist: sublistReducer,
  tag: tagReducer,
  todo: todoReducer,
})

export type IAppState = ReturnType<typeof appReducer>
