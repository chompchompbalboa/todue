//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { ISublistState } from '@/state/sublist/reducers'
import {
  IAllSublists,
  ISublist,
  ISublistUpdates
} from '@/state/sublist/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type ISublistActions = 
  ISetAllSublists | 
  ISetSublistsByListId |
  IUpdateSublist

export { createSublist } from '@/state/sublist/actions/createSublist'
export { deleteSublist } from '@/state/sublist/actions/deleteSublist'
export { loadSublists } from '@/state/sublist/actions/loadSublists'
export { updateSublist } from '@/state/sublist/actions/updateSublist'

//-----------------------------------------------------------------------------
// Set All Lists
//-----------------------------------------------------------------------------
export const SET_ALL_SUBLISTS = 'SET_ALL_SUBLISTS'
interface ISetAllSublists {
  type: typeof SET_ALL_SUBLISTS
  nextAllLists: IAllSublists
}

export const setAllSublists = (nextAllLists: IAllSublists): ISublistActions => {
	return {
		type: SET_ALL_SUBLISTS,
		nextAllLists
	}
}

//-----------------------------------------------------------------------------
// Set Sublists By List Id
//-----------------------------------------------------------------------------
export const SET_SUBLISTS_BY_LIST_ID = 'SET_SUBLISTS_BY_LIST_ID'
interface ISetSublistsByListId {
  type: typeof SET_SUBLISTS_BY_LIST_ID
  nextSublistsByListId: ISublistState['sublistsByListId']
}

export const setSublistsByListId = (nextSublistsByListId: ISublistState['sublistsByListId']): ISublistActions => {
	return {
		type: SET_SUBLISTS_BY_LIST_ID,
		nextSublistsByListId
	}
}

//-----------------------------------------------------------------------------
// Set Lists
//-----------------------------------------------------------------------------
export const UPDATE_SUBLIST = 'UPDATE_SUBLIST'
interface IUpdateSublist {
  type: typeof UPDATE_SUBLIST
  sublistId: ISublist['id']
  updates: ISublistUpdates
}

export const updateSublistReducer = (sublistId: ISublist['id'], updates: ISublistUpdates): ISublistActions => {
	return {
		type: UPDATE_SUBLIST,
		sublistId,
    updates
	}
}