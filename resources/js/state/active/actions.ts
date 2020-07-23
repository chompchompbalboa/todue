//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IList } from '@/state/list/types'
import { ITodo } from '@/state/todo/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type IActiveActions = 
  IUpdateActiveIsCompletedTodosVisible |
  IUpdateActiveListId | 
  IUpdateActiveTodoId

//-----------------------------------------------------------------------------
// Update Active Is Completed Todos Visible
//-----------------------------------------------------------------------------
export const UPDATE_ACTIVE_IS_COMPLETED_TODOS_VISIBLE = 'UPDATE_ACTIVE_IS_COMPLETED_TODOS_VISIBLE'
interface IUpdateActiveIsCompletedTodosVisible {
  type: typeof UPDATE_ACTIVE_IS_COMPLETED_TODOS_VISIBLE
  nextActiveIsCompletedTodosVisible: boolean
}

export const updateActiveIsCompletedTodosVisible = (nextActiveIsCompletedTodosVisible: boolean): IActiveActions => {
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

export const updateActiveListId = (nextActiveListId: IList['id']): IActiveActions => {
	return {
		type: UPDATE_ACTIVE_LIST_ID,
		nextActiveListId
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