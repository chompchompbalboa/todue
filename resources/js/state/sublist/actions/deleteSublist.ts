//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { ISublist } from '@/state/sublist/types'

import { updateActiveSublistId } from '@/state/active/actions'
import { createHistoryStep } from '@/state/history/actions'
import { setSublistsByListId } from '@/state/sublist/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const deleteSublist = (sublistId: ISublist['id']) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {

    const {
      active: {
        listId: activeListId,
        sublistId: activeSublistId
      },
      sublist: {
        allSublists: {
          [sublistId]: sublist
        },
        sublistsByListId
      }
    } = getState()

    const nextSublistsByListId = {
      ...sublistsByListId,
      [sublist.listId]: sublistsByListId[sublist.listId].filter(currentSublistId => currentSublistId !== sublistId)
    }

    const actions = () => {
      dispatch(updateActiveSublistId(activeListId, null))
      dispatch(setSublistsByListId(nextSublistsByListId))
      mutation.deleteListSublist(sublistId)
    }

    const undoActions = () => {
      dispatch(updateActiveSublistId(activeListId, activeSublistId))
      dispatch(setSublistsByListId(sublistsByListId))
      mutation.restoreListSublist(sublistId)
    }

    dispatch(createHistoryStep({ actions, undoActions }))
    
    actions()
	}
}