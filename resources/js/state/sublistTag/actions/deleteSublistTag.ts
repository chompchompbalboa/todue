//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { ISublist } from '@/state/sublist/types'
import { ISublistTag } from '@/state/sublistTag/types'

import { setSublistTagsBySublistId } from '@/state/sublistTag/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const deleteSublistTag = (
  sublistId: ISublist['id'],
  sublistTagId: ISublistTag['id']
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      sublistTag: {
        sublistTagsBySublistId
      }
    } = getState()

    dispatch(setSublistTagsBySublistId({
      ...sublistTagsBySublistId,
      [sublistId]: sublistTagsBySublistId[sublistId].filter(currentSublistTagId => currentSublistTagId !== sublistTagId)
    }))

    mutation.deleteListSublistTag(sublistTagId)
	}
}