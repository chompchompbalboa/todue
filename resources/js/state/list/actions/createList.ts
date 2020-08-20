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
  setLists,
  setLoadedLists
} from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const createList = () => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      active: {
        listId: activeListId
      },
      list: {
        allLists,
        lists,
        loadedLists
      }
    } = getState()
    
    const newList: IList = {
      id: createUuid(),
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
      dispatch(setLoadedLists(new Set([ ...loadedLists, newList.id ])))
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
      dispatch(setLoadedLists(loadedLists))
      dispatch(updateActiveListId(activeListId))
      mutation.deleteList(newList.id)
    }

    dispatch(createHistoryStep({ actions, undoActions }))
    actions()
	}
}