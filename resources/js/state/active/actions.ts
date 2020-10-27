//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IActiveState } from '@/state/active/reducers'
import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'
import { ITodo } from '@/state/todo/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type IActiveActions = 
  IClearState |
  ILoadActive |
  IUpdateActiveIsCompletedTodosVisible |
  IUpdateActiveIsTodoTagsVisible |
	IUpdateActiveListId | 
	IUpdateActiveSublistId |
  IUpdateActiveTodoId

  //-----------------------------------------------------------------------------
  // Clear State
  //-----------------------------------------------------------------------------
  export const CLEAR_STATE = 'CLEAR_STATE'
  interface IClearState {
    type: typeof CLEAR_STATE
  }
  
  export const clearState = (): IActiveActions => {
    return {
      type: CLEAR_STATE
    }
  }
  

//-----------------------------------------------------------------------------
// Load Active
//-----------------------------------------------------------------------------
export const LOAD_ACTIVE = 'LOAD_ACTIVE'
interface ILoadActive {
  type: typeof LOAD_ACTIVE
  nextActive: IActiveState
}

export const loadActive = (nextActive: IActiveState): IActiveActions => {
  return {
    type: LOAD_ACTIVE,
    nextActive
  }
}

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
// Update Active Is Todo Tags Visible
//-----------------------------------------------------------------------------
export const UPDATE_ACTIVE_IS_TODO_TAGS_VISIBLE = 'UPDATE_ACTIVE_IS_TODO_TAGS_VISIBLE'
interface IUpdateActiveIsTodoTagsVisible {
  type: typeof UPDATE_ACTIVE_IS_TODO_TAGS_VISIBLE
  nextActiveIsTodoTagsVisible: boolean
}

export const updateActiveIsTodoTagsVisible = (nextActiveIsTodoTagsVisible: boolean): IActiveActions => {
	return {
		type: UPDATE_ACTIVE_IS_TODO_TAGS_VISIBLE,
		nextActiveIsTodoTagsVisible
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

let updateActiveListIdMutationTimeout: any = null
export const updateActiveListId = (nextActiveListId: IList['id']) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    const {
      active: {
        id: userActiveId
      }
    } = getState()
    clearTimeout(updateActiveListIdMutationTimeout)
    clearTimeout(updateActiveSublistIdMutationTimeout)
    dispatch(updateActiveListIdReducer(nextActiveListId))
    updateActiveListIdMutationTimeout = setTimeout(() => {
      mutation.updateUserActive(userActiveId, { listId: nextActiveListId, sublistId: null })
    }, 10000)
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
  nextActiveListId: IList['id']
  nextActiveSublistId: ISublist['id']
}

let updateActiveSublistIdMutationTimeout: any = null
export const updateActiveSublistId = (nextActiveListId: IList['id'], nextActiveSublistId: ISublist['id']) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    const {
      active: {
        id: userActiveId
      }
    } = getState()
    clearTimeout(updateActiveListIdMutationTimeout)
    clearTimeout(updateActiveSublistIdMutationTimeout)
    dispatch(updateActiveSublistIdReducer(nextActiveListId, nextActiveSublistId))
    updateActiveSublistIdMutationTimeout = setTimeout(() => {
      mutation.updateUserActive(userActiveId, { listId: nextActiveListId, sublistId: nextActiveSublistId })
    }, 10000)
	}
}

export const updateActiveSublistIdReducer = (nextActiveListId: IList['id'], nextActiveSublistId: ISublist['id']): IActiveActions => {
	return {
		type: UPDATE_ACTIVE_SUBLIST_ID,
    nextActiveListId,
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