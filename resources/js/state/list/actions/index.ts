//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IListState } from '@/state/list/reducers'
import {
  IAllLists,
  IList,
  IListUpdates
} from '@/state/list/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type IListActions = 
  ISetAllLists | 
  ISetLists | 
  ISetSublistsByListId |
  IUpdateList

export { createList } from '@/state/list/actions/createList'
export { deleteList } from '@/state/list/actions/deleteList'
export { updateList } from '@/state/list/actions/updateList'

export { refreshListVisibleTodos } from '@/state/list/actions/refreshListVisibleTodos'

//-----------------------------------------------------------------------------
// Set All Lists
//-----------------------------------------------------------------------------
export const SET_ALL_LISTS = 'SET_ALL_LISTS'
interface ISetAllLists {
  type: typeof SET_ALL_LISTS
  nextAllLists: IAllLists
}

export const setAllLists = (nextAllLists: IAllLists): IListActions => {
	return {
		type: SET_ALL_LISTS,
		nextAllLists
	}
}

//-----------------------------------------------------------------------------
// Set Lists
//-----------------------------------------------------------------------------
export const SET_LISTS = 'SET_LISTS'
interface ISetLists {
  type: typeof SET_LISTS
  nextLists: IList['id'][]
}

export const setLists = (nextLists: IList['id'][]): IListActions => {
	return {
		type: SET_LISTS,
		nextLists
	}
}

//-----------------------------------------------------------------------------
// Set Sublists By List Id
//-----------------------------------------------------------------------------
export const SET_SUBLISTS_BY_LIST_ID = 'SET_SUBLISTS_BY_LIST_ID'
interface ISetSublistsByListId {
  type: typeof SET_SUBLISTS_BY_LIST_ID
  nextSublistsByListId: IListState['sublistsByListId']
}

export const setSublistsByListId = (nextSublistsByListId: IListState['sublistsByListId']): IListActions => {
	return {
		type: SET_SUBLISTS_BY_LIST_ID,
		nextSublistsByListId
	}
}

//-----------------------------------------------------------------------------
// Set Lists
//-----------------------------------------------------------------------------
export const UPDATE_LIST = 'UPDATE_LIST'
interface IUpdateList {
  type: typeof UPDATE_LIST
  listId: IList['id']
  updates: IListUpdates
}

export const updateListReducer = (listId: IList['id'], updates: IListUpdates): IListActions => {
	return {
		type: UPDATE_LIST,
		listId,
    updates
	}
}