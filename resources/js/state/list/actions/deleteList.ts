//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'

import { updateActiveListId } from '@/state/active/actions'
import { createHistoryStep } from '@/state/history/actions'
import { 
  setLists
} from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const deleteList = (listId: IList['id']) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      active: {
        listId: activeListId
      },
      list: {
        lists
      }
    } = getState()

    const listIndex = lists.findIndex(currentListId => currentListId === listId)

    const nextLists = lists.filter(currentListId => currentListId !== listId)

    const nextActiveListId = listId === activeListId
      ? listIndex === lists.length - 1
        ? nextLists[nextLists.length - 1]
        : nextLists[listIndex]
      : activeListId

    const actions = () => {
      dispatch(setLists(nextLists))
      dispatch(updateActiveListId(nextLists.length > 0 ? nextActiveListId : null))
      mutation.deleteList(listId)
    }

    const undoActions = () => {
      dispatch(setLists(lists))
      dispatch(updateActiveListId(activeListId))
      mutation.restoreList(listId)
    }

    dispatch(createHistoryStep({ actions, undoActions }))
    
    actions()
	}
}