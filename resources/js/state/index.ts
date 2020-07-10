//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { combineReducers } from 'redux'
import activeReducer from '@/state/active/reducers'
import listReducer from '@/state/list/reducers'

//-----------------------------------------------------------------------------
// Combine Reducers
//-----------------------------------------------------------------------------
export const appReducer = combineReducers({
  active: activeReducer,
  list: listReducer,
})

export type IAppState = ReturnType<typeof appReducer>
