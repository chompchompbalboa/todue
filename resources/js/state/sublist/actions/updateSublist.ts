//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IThunkDispatch } from '@/state/types'
import { ISublist, ISublistUpdates } from '@/state/sublist/types'

import { createHistoryStep } from '@/state/history/actions'
import { updateSublistReducer } from '@/state/sublist/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const updateSublist = (
  sublistId: ISublist['id'], 
  updates: ISublistUpdates,
  undoUpdates: ISublistUpdates = null,
  skipDatabaseUpdate: boolean = false
) => {
	return async (dispatch: IThunkDispatch) => {

    const actions = () => {
      dispatch(updateSublistReducer(sublistId, updates))
      !skipDatabaseUpdate && mutation.updateListSublist(sublistId, updates)
    }

    const undoActions = () => {
      dispatch(updateSublistReducer(sublistId, undoUpdates))
      !skipDatabaseUpdate && mutation.updateListSublist(sublistId, undoUpdates)
    }

    undoUpdates && dispatch(createHistoryStep({ actions, undoActions }))
    
    actions()
	}
}