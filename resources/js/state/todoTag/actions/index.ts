//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { ITodoTagState } from '@/state/todoTag/reducers'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type ITodoTagActions = 
IClearState |
ISetAllTodoTags |
ISetTodoTagsByTodoId

export { createTodoTag } from '@/state/todoTag/actions/createTodoTag'
export { deleteTodoTag } from '@/state/todoTag/actions/deleteTodoTag'
export { loadTodoTags } from '@/state/todoTag/actions/loadTodoTags'

//-----------------------------------------------------------------------------
// Clear State
//-----------------------------------------------------------------------------
export const CLEAR_STATE = 'CLEAR_STATE'
interface IClearState {
  type: typeof CLEAR_STATE
}

export const clearState = (): ITodoTagActions => {
	return {
		type: CLEAR_STATE
	}
}

//-----------------------------------------------------------------------------
// Set All Todo Tags
//-----------------------------------------------------------------------------
export const SET_ALL_TODO_TAGS = 'SET_ALL_TODO_TAGS'
interface ISetAllTodoTags {
  type: typeof SET_ALL_TODO_TAGS
  nextAllTodoTags: ITodoTagState['allTodoTags']
}

export const setAllTodoTags = (nextAllTodoTags: ITodoTagState['allTodoTags']): ITodoTagActions => {
	return {
		type: SET_ALL_TODO_TAGS,
		nextAllTodoTags
	}
}

//-----------------------------------------------------------------------------
// Set Todo Tags By Todo Id
//-----------------------------------------------------------------------------
export const SET_TODO_TAGS_BY_TODO_ID = 'SET_TODO_TAGS_BY_TODO_ID'
interface ISetTodoTagsByTodoId {
  type: typeof SET_TODO_TAGS_BY_TODO_ID
  nextTodoTagsByTodoId: ITodoTagState['todoTagsByTodoId']
}

export const setTodoTagsByTodoId = (nextTodoTagsByTodoId: ITodoTagState['todoTagsByTodoId']): ITodoTagActions => {
	return {
		type: SET_TODO_TAGS_BY_TODO_ID,
		nextTodoTagsByTodoId
	}
}