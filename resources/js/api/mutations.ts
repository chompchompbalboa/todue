//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import axios from '@/api/axios'

import { 
	IList,
	IListUpdates 
} from '@/state/list/types'
import { 
	ITodo,
	ITodoUpdates 
} from '@/state/todo/types'

//-----------------------------------------------------------------------------
// Lists
//-----------------------------------------------------------------------------
export const createList = async (list: IList) => {
	return axios.post('api/list', list)
}

export const deleteList = async (listId: IList['id']) => {
	return axios.delete('api/list/' + listId)
}

export const restoreList = async (listId: string) => {
	return axios.post('/api/list/restore/' + listId)
}

export const updateList = async (listId: IList['id'], updates: IListUpdates) => {
	return axios.patch('api/list/' + listId, updates)
}

//-----------------------------------------------------------------------------
// Todos
//-----------------------------------------------------------------------------
export const createTodo = async (todo: ITodo) => {
	return axios.post('api/todo', todo)
}

export const deleteTodo = async (todoId: ITodo['id']) => {
	return axios.delete('api/todo/' + todoId)
}

export const restoreTodo = async (todoId: string) => {
	return axios.post('/api/todo/restore/' + todoId)
}

export const updateTodo = async (todoId: ITodo['id'], updates: ITodoUpdates) => {
	return axios.patch('api/todo/' + todoId, updates)
}
