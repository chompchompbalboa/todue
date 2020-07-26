//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'

import { setVisibleTodos } from '@/state/todo/actions'

import { resolveVisibleTodos } from '@/state/todo/resolvers'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const refreshVisibleTodos = () => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    dispatch(setVisibleTodos(resolveVisibleTodos(getState)))
	}
}