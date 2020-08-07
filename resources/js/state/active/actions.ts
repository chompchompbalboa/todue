//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'
import { ITodo } from '@/state/todo/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type IActiveActions = 
  IUpdateActiveIsCompletedTodosVisible |
	IUpdateActiveListId | 
	IUpdateActiveSublistId |
  IUpdateActiveTodoId

//-----------------------------------------------------------------------------
// Update Active Is Completed Todos Visible
//-----------------------------------------------------------------------------
export const UPDATE_ACTIVE_IS_COMPLETED_TODOS_VISIBLE = 'UPDATE_ACTIVE_IS_COMPLETED_TODOS_VISIBLE'
interface IUpdateActiveIsCompletedTodosVisible {
  type: typeof UPDATE_ACTIVE_IS_COMPLETED_TODOS_VISIBLE
  nextActiveIsCompletedTodosVisible: boolean
}

export const updateActiveIsCompletedTodosVisible = (nextActiveIsCompletedTodosVisible: boolean) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    const {
      active: {
        id: userActiveId
      }
    } = getState()
    dispatch(updateActiveIsCompletedTodosVisibleReducer(nextActiveIsCompletedTodosVisible))
    mutation.updateUserActive(userActiveId, { isCompletedTodosVisible: nextActiveIsCompletedTodosVisible })
	}
}

export const updateActiveIsCompletedTodosVisibleReducer = (nextActiveIsCompletedTodosVisible: boolean): IActiveActions => {
	return {
		type: UPDATE_ACTIVE_IS_COMPLETED_TODOS_VISIBLE,
		nextActiveIsCompletedTodosVisible
	}
}


//-----------------------------------------------------------------------------
// Update Active List Id
//-----------------------------------------------------------------------------
export const UPDATE_ACTIVE_LIST_ID = 'UPDATE_ACTIVE_LIST_ID'
interface IUpdateActiveListId {
  type: typeof UPDATE_ACTIVE_LIST_ID
  nextActiveListId: IList['id']
}

export const updateActiveListId = (nextActiveListId: IList['id']) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    const {
      active: {
        id: userActiveId
      }
    } = getState()
    dispatch(updateActiveListIdReducer(nextActiveListId))
    mutation.updateUserActive(userActiveId, { listId: nextActiveListId, sublistId: null })
	}
}

export const updateActiveListIdReducer = (nextActiveListId: IList['id']): IActiveActions => {
	return {
		type: UPDATE_ACTIVE_LIST_ID,
		nextActiveListId
	}
}


//-----------------------------------------------------------------------------
// Update Active Sublist Id
//-----------------------------------------------------------------------------
export const UPDATE_ACTIVE_SUBLIST_ID = 'UPDATE_ACTIVE_SUBLIST_ID'
interface IUpdateActiveSublistId {
  type: typeof UPDATE_ACTIVE_SUBLIST_ID
  nextActiveSublistId: ISublist['id']
}

export const updateActiveSublistId = (nextActiveSublistId: ISublist['id']) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    const {
      active: {
        id: userActiveId
      }
    } = getState()
    dispatch(updateActiveSublistIdReducer(nextActiveSublistId))
    mutation.updateUserActive(userActiveId, { sublistId: nextActiveSublistId })
	}
}

export const updateActiveSublistIdReducer = (nextActiveSublistId: ISublist['id']): IActiveActions => {
	return {
		type: UPDATE_ACTIVE_SUBLIST_ID,
		nextActiveSublistId
	}
}

//-----------------------------------------------------------------------------
// Update Active Todo Id
//-----------------------------------------------------------------------------
export const UPDATE_ACTIVE_TODO_ID = 'UPDATE_ACTIVE_TODO_ID'
interface IUpdateActiveTodoId {
  type: typeof UPDATE_ACTIVE_TODO_ID
  nextActiveTodoId: ITodo['id']
}

export const updateActiveTodoId = (nextActiveTodoId: ITodo['id']): IActiveActions => {
	return {
		type: UPDATE_ACTIVE_TODO_ID,
		nextActiveTodoId
	}
}