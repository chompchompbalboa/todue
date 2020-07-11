//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { combineReducers } from 'redux'
import activeReducer from '@/state/active/reducers'
import historyReducer from '@/state/history/reducers'
import listReducer from '@/state/list/reducers'

//-----------------------------------------------------------------------------
// Combine Reducers
//-----------------------------------------------------------------------------
export const appReducer = combineReducers({
  active: activeReducer,
  history: historyReducer,
  list: listReducer,
})

export type IAppState = ReturnType<typeof appReducer>
