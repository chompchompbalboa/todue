//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import {
  IAllLists,
  IList,
  IListUpdates
} from '@/state/list/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type IListActions = 
  IClearState |
  ISetAllLists | 
  ISetLists | 
  ISetLoadedLists |
  IUpdateList

export { createList } from '@/state/list/actions/createList'
export { deleteList } from '@/state/list/actions/deleteList'
export { loadList } from '@/state/list/actions/loadList'
export { loadLists } from '@/state/list/actions/loadLists'
export { updateList } from '@/state/list/actions/updateList'

export { clearLoadedLists } from '@/state/list/actions/clearLoadedLists'

//-----------------------------------------------------------------------------
// Clear State
//-----------------------------------------------------------------------------
export const CLEAR_STATE = 'CLEAR_STATE'
interface IClearState {
  type: typeof CLEAR_STATE
}

export const clearState = (): IListActions => {
	return {
		type: CLEAR_STATE
	}
}

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
// Set Loaded Lists
//-----------------------------------------------------------------------------
export const SET_LOADED_LISTS = 'SET_LOADED_LISTS'
interface ISetLoadedLists {
  type: typeof SET_LOADED_LISTS
  nextLoadedLists: Set<string>
}

export const setLoadedLists = (nextLoadedLists: Set<string>): IListActions => {
	return {
		type: SET_LOADED_LISTS,
		nextLoadedLists
	}
}

//-----------------------------------------------------------------------------
// Update List
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