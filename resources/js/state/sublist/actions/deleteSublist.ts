//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'

import { createHistoryStep } from '@/state/history/actions'
import { setSublistsByListId } from '@/state/sublist/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const deleteSublist = (sublistId: IList['id']) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {

    const {
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
      dispatch(setSublistsByListId(nextSublistsByListId))
      mutation.deleteListSublist(sublistId)
    }

    const undoActions = () => {
      dispatch(setSublistsByListId(sublistsByListId))
      mutation.restoreListSublist(sublistId)
    }

    dispatch(createHistoryStep({ actions, undoActions }))
    
    actions()
	}
}