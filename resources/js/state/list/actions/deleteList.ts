//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'

import {
  updateActiveListId
} from '@/state/active/actions'
import {
  setLists
} from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const deleteList = (listId: IList['id']) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      lists
    } = getState().list

    const nextLists = lists.filter(currentListId => currentListId !== listId)

    const listIndex = lists.findIndex(currentListId => currentListId === listId)
    const nextActiveListId = listIndex === lists.length - 1
      ? nextLists[nextLists.length - 1]
      : nextLists[listIndex]
    
    dispatch(setLists(nextLists))
    dispatch(updateActiveListId(nextLists.length > 0 ? nextActiveListId : null))
    mutation.deleteList(listId)
	}
}