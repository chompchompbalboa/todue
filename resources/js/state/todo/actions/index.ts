//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { ITodoState } from '@/state/todo/reducers'
import {
  IAllTodos,
  ITodo,
  ITodoUpdates
} from '@/state/todo/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type ITodoActions = 
ISetAllTodos | 
ISetTodosByListId |
ISetVisibleTodos |
IUpdateTodo

export { createTodo } from '@/state/todo/actions/createTodo'
export { deleteTodo } from '@/state/todo/actions/deleteTodo'
export { updateTodo } from '@/state/todo/actions/updateTodo'

export { refreshVisibleTodos } from '@/state/todo/actions/refreshVisibleTodos'

//-----------------------------------------------------------------------------
// Set All Todos
//-----------------------------------------------------------------------------
export const SET_ALL_TODOS = 'SET_ALL_TODOS'
interface ISetAllTodos {
  type: typeof SET_ALL_TODOS
  nextAllTodos: IAllTodos
}

export const setAllTodos = (nextAllTodos: IAllTodos): ITodoActions => {
	return {
		type: SET_ALL_TODOS,
		nextAllTodos
	}
}

//-----------------------------------------------------------------------------
// Set Todos
//-----------------------------------------------------------------------------
export const SET_TODOS_BY_LIST_ID = 'SET_TODOS_BY_LIST_ID'
interface ISetTodosByListId {
  type: typeof SET_TODOS_BY_LIST_ID
  nextTodosByListId: ITodoState['todosByListId']
}

export const setTodosByListId = (nextTodosByListId: ITodoState['todosByListId']): ITodoActions => {
	return {
		type: SET_TODOS_BY_LIST_ID,
		nextTodosByListId
	}
}

//-----------------------------------------------------------------------------
// Set Todos
//-----------------------------------------------------------------------------
export const SET_VISIBLE_TODOS = 'SET_VISIBLE_TODOS'
interface ISetVisibleTodos {
  type: typeof SET_VISIBLE_TODOS
  nextVisibleTodos: ITodoState['visibleTodos']
}

export const setVisibleTodos = (nextVisibleTodos: ITodoState['visibleTodos']): ITodoActions => {
	return {
		type: SET_VISIBLE_TODOS,
		nextVisibleTodos
	}
}

//-----------------------------------------------------------------------------
// Set Todos
//-----------------------------------------------------------------------------
export const UPDATE_TODO = 'UPDATE_TODO'
interface IUpdateTodo {
  type: typeof UPDATE_TODO
  todoId: ITodo['id']
  updates: ITodoUpdates
}

export const updateTodoReducer = (todoId: ITodo['id'], updates: ITodoUpdates): ITodoActions => {
	return {
		type: UPDATE_TODO,
		todoId,
    updates
	}
}