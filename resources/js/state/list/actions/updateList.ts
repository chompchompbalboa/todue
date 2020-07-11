//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IThunkDispatch } from '@/state/types'
import { IList, IListUpdates } from '@/state/list/types'

import { createHistoryStep } from '@/state/history/actions'
import { updateListReducer } from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const updateList = (
  listId: IList['id'], 
  updates: IListUpdates,
  undoUpdates?: IListUpdates
) => {
	return async (dispatch: IThunkDispatch) => {

    const actions = () => {
      dispatch(updateListReducer(listId, updates))
      mutation.updateList(listId, updates)
    }

    const undoActions = () => {
      dispatch(updateListReducer(listId, undoUpdates))
      mutation.updateList(listId, undoUpdates)
    }

    undoUpdates && dispatch(createHistoryStep({ actions, undoActions }))
    
    actions()
	}
}