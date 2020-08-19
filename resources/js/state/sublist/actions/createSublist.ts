//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { v4 as createUuid } from 'uuid'

import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'

import { updateActiveSublistId } from '@/state/active/actions'
import { 
  setAllSublists,
  setSublistsByListId
} from '@/state/sublist/actions'
import { createHistoryStep } from '@/state/history/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const createSublist = (
  listId: IList['id']
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {

    const {
      active: {
        listId: activeListId,
        sublistId: activeSublistId
      },
      sublist: {
        allSublists,
        sublistsByListId
      }
    } = getState()
    
    const newSublist: ISublist = {
      id: createUuid(),
      listId: listId,
      name: null
    }

    const nextAllSublists = {
      ...allSublists,
      [newSublist.id]: newSublist
    }

    const nextSublistsByListId = {
      ...sublistsByListId,
      [listId]: [
        ...(sublistsByListId[listId] || []),
        newSublist.id
      ]
    }

    const actions = (isHistoryStep?: boolean) => {
      dispatch(setAllSublists(nextAllSublists))
      dispatch(setSublistsByListId(nextSublistsByListId))
      dispatch(updateActiveSublistId(listId, newSublist.id))
      if(isHistoryStep) {
        mutation.restoreListSublist(newSublist.id)
      }
      else {
        mutation.createListSublist(newSublist)
      }
    }

    const undoActions = () => {
      dispatch(setAllSublists(allSublists))
      dispatch(setSublistsByListId(sublistsByListId))
      dispatch(updateActiveSublistId(activeListId, activeSublistId))
      mutation.deleteListSublist(newSublist.id)
    }

    dispatch(createHistoryStep({ actions, undoActions }))
    actions()
	}
}