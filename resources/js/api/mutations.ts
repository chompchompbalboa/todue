//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import axios from '@/api/axios'

import { 
	IUserActive,
	IUserActiveUpdates 
} from '@/state/active/types'
import { 
	IList,
	IListUpdates 
} from '@/state/list/types'
import { 
	ISublist,
	ISublistUpdates 
} from '@/state/sublist/types'
import { ISublistTag } from '@/state/sublistTag/types'
import { 
	ITag,
	ITagUpdates
} from '@/state/tag/types'
import { 
	ITodo,
	ITodoUpdates 
} from '@/state/todo/types'
import { ITodoTag } from '@/state/todoTag/types'

//-----------------------------------------------------------------------------
// Lists
//-----------------------------------------------------------------------------
export const createList = async (list: IList) => {
	return axios.post('/api/list', list)
}

export const deleteList = async (listId: IList['id']) => {
	return axios.delete('/api/list/' + listId)
}

export const restoreList = async (listId: string) => {
	return axios.post('/api/list/restore/' + listId)
}

export const updateList = async (listId: IList['id'], updates: IListUpdates) => {
	return axios.patch('/api/list/' + listId, updates)
}

//-----------------------------------------------------------------------------
// List Sublists
//-----------------------------------------------------------------------------
export const createListSublist = async (sublist: ISublist) => {
	return axios.post('/api/list/sublist', sublist)
}

export const deleteListSublist = async (sublistId: ISublist['id']) => {
	return axios.delete('/api/list/sublist/' + sublistId)
}

export const restoreListSublist = async (sublistId: string) => {
	return axios.post('/api/list/sublist/restore/' + sublistId)
}

export const updateListSublist = async (sublistId: ISublist['id'], updates: ISublistUpdates) => {
	return axios.patch('/api/list/sublist/' + sublistId, updates)
}

//-----------------------------------------------------------------------------
// List Sublist Tags
//-----------------------------------------------------------------------------
export const createListSublistTag = async (sublistTag: ISublistTag) => {
	return axios.post('/api/list/sublist/tag', sublistTag)
}

export const deleteListSublistTag = async (sublistTagId: ISublistTag['id']) => {
	return axios.delete('/api/list/sublist/tag/'+ sublistTagId)
}

export const restoreListSublistTag = async (sublistTagId: ISublistTag['id']) => {
	return axios.post('/api/list/sublist/tag/restore/' + sublistTagId)
}

//-----------------------------------------------------------------------------
// List Tags
//-----------------------------------------------------------------------------
export const createListTag = async (tag: ITag) => {
	return axios.post('/api/list/tag', tag)
}

export const deleteListTag = async (tagId: ITag['id']) => {
	return axios.delete('/api/list/tag/' + tagId)
}

export const restoreListTag = async (tagId: string) => {
	return axios.post('/api/list/tag/restore/' + tagId)
}

export const updateListTag = async (tagId: ITag['id'], updates: ITagUpdates) => {
	return axios.patch('/api/list/tag/' + tagId, updates)
}

//-----------------------------------------------------------------------------
// Todos
//-----------------------------------------------------------------------------
export const createTodo = async (todo: ITodo) => {
	return axios.post('/api/todo', todo)
}

export const deleteTodo = async (todoId: ITodo['id']) => {
	return axios.delete('/api/todo/' + todoId)
}

export const restoreTodo = async (todoId: string) => {
	return axios.post('/api/todo/restore/' + todoId)
}

export const updateTodo = async (todoId: ITodo['id'], updates: ITodoUpdates) => {
	return axios.patch('/api/todo/' + todoId, updates)
}

//-----------------------------------------------------------------------------
// Todo Tags
//-----------------------------------------------------------------------------
export const createTodoTag = async (todoTag: ITodoTag) => {
	return axios.post('/api/todo/tag', todoTag)
}

export const deleteTodoTag = async (todoTagId: ITodoTag['id']) => {
	return axios.delete('/api/todo/tag/'+ todoTagId)
}

export const restoreTodoTag = async (todoTagId: ITodoTag['id']) => {
	return axios.post('/api/todo/tag/restore/' + todoTagId)
}

//-----------------------------------------------------------------------------
// User Active
//-----------------------------------------------------------------------------
export const updateUserActive = async (userActiveId: IUserActive['id'], updates: IUserActiveUpdates) => {
	return axios.patch('/api/user/active/' + userActiveId, updates)
}
