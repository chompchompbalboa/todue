//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IList } from '@/state/list/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type IActiveActions = IUpdateActiveListId

//-----------------------------------------------------------------------------
// Example Action

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