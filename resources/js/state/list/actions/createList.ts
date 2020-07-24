//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { v4 as createUuid } from 'uuid'

import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'

import { updateActiveListId } from '@/state/active/actions'
import { createHistoryStep } from '@/state/history/actions'
import {
  setAllLists,
  setLists
} from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const createList = (
  listId: IList['id'] = null
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      active: {
        listId: activeListId
      },
      list: {
        allLists,
        lists
      }
    } = getState()
    
    const newList: IList = {
      id: createUuid(),
      listId: null,
      name: null
    }

    const actions = (isHistoryStep?: boolean) => {
      dispatch(setAllLists({
        ...allLists,
        [newList.id]: newList
      }))
      dispatch(setLists([
        newList.id,
        ...lists
      ]))
      dispatch(updateActiveListId(newList.id))
      if(isHistoryStep) {
        mutation.restoreList(newList.id)
      }
      else {
        mutation.createList(newList)
      }
    }

    const undoActions = () => {
      dispatch(setAllLists(allLists))
      dispatch(setLists(lists))
      dispatch(updateActiveListId(activeListId))
      mutation.deleteList(newList.id)
    }

    dispatch(createHistoryStep({ actions, undoActions }))
    actions()
	}
}