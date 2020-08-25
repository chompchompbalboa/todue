//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IThunkDispatch } from '@/state/types'
import { ITag, ITagUpdates } from '@/state/tag/types'

import { createHistoryStep } from '@/state/history/actions'
import { updateTagReducer } from '@/state/tag/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const updateTag = (
  tagId: ITag['id'], 
  updates: ITagUpdates,
  undoUpdates: ITagUpdates = null,
  skipDatabaseUpdate: boolean = false
) => {
	return async (dispatch: IThunkDispatch) => {

    const actions = () => {
      dispatch(updateTagReducer(tagId, updates))
      !skipDatabaseUpdate && mutation.updateListTag(tagId, updates)
    }

    const undoActions = () => {
      dispatch(updateTagReducer(tagId, undoUpdates))
      !skipDatabaseUpdate && mutation.updateListTag(tagId, undoUpdates)
    }

    undoUpdates && dispatch(createHistoryStep({ actions, undoActions }))
    
    actions()
	}
}