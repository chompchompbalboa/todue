//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import {
  IAllTodos,
  ITodo,
  ITodoUpdates
} from '@/state/todo/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type ITodoActions = ISetAllTodos | ISetTodos | IUpdateTodo

export { createTodo } from '@/state/todo/actions/createTodo'
export { deleteTodo } from '@/state/todo/actions/deleteTodo'
export { updateTodo } from '@/state/todo/actions/updateTodo'

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
export const SET_TODOS = 'SET_TODOS'
interface ISetTodos {
  type: typeof SET_TODOS
  nextTodos: ITodo['id'][]
}

export const setTodos = (nextTodos: ITodo['id'][]): ITodoActions => {
	return {
		type: SET_TODOS,
		nextTodos
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