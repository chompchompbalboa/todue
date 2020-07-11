//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import {
  IAllLists,
  IList,
  IListUpdates
} from '@/state/list/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type IListActions = ISetAllLists | ISetLists | IUpdateList

export { createList } from '@/state/list/actions/createList'
export { deleteList } from '@/state/list/actions/deleteList'

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
// Set Lists
//-----------------------------------------------------------------------------
export const UPDATE_LIST = 'UPDATE_LIST'
interface IUpdateList {
  type: typeof UPDATE_LIST
  listId: IList['id']
  updates: IListUpdates
}

export const updateList = (listId: IList['id'], updates: IListUpdates): IListActions => {
	mutation.updateList(listId, updates)
	return {
		type: UPDATE_LIST,
		listId,
    updates
	}
}