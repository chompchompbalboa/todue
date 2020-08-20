//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { ISublistTag } from '@/state/sublistTag/types'

import { 
  setAllSublistTags,
  setSublistTagsBySublistId
} from '@/state/sublistTag/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const loadSublistTags = (
  sublistTags: ISublistTag[] = []
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      sublistTag: {
        allSublistTags,
        sublistTagsBySublistId
      }
    } = getState()
    
    let nextAllSublistTags = { ...allSublistTags }
    let nextSublistTagsBySublistId = { ...sublistTagsBySublistId }
    
    sublistTags.forEach((sublistTag: ISublistTag) => {
      nextAllSublistTags[sublistTag.id] = sublistTag
      nextSublistTagsBySublistId = {
        ...nextSublistTagsBySublistId,
        [sublistTag.sublistId]: [ ...nextSublistTagsBySublistId[sublistTag.sublistId] || [], sublistTag.id ]
      }
    })

    dispatch(setAllSublistTags(nextAllSublistTags))
    dispatch(setSublistTagsBySublistId(nextSublistTagsBySublistId))
	}
}