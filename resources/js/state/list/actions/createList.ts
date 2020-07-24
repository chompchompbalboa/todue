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
  setSublistsByListId
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
        lists,
        sublistsByListId
      }
    } = getState()
    
    const newListRootListId = listId
      ? allLists[listId].rootListId
        ? allLists[listId].rootListId
        : allLists[listId].id
      : null
    
    const newList: IList = {
      id: createUuid(),
      listId: listId,
      rootListId: newListRootListId,
      name: null
    }

    const actions = (isHistoryStep?: boolean) => {
      dispatch(setAllLists({
        ...allLists,
        [newList.id]: newList
      }))
      if(listId) {
        dispatch(setSublistsByListId({
          ...sublistsByListId,
          [listId]: [
            ...(sublistsByListId[listId] || []),
            newList.id
          ]
        }))
      }
      else {
        dispatch(setLists([
          newList.id,
          ...lists
        ]))
      }
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
      dispatch(setSublistsByListId(sublistsByListId))
      dispatch(updateActiveListId(activeListId))
      mutation.deleteList(newList.id)
    }

    dispatch(createHistoryStep({ actions, undoActions }))
    actions()
	}
}