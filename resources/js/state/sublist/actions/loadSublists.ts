//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { ISublist } from '@/state/sublist/types'

import { 
  setAllSublists,
  setSublistsByListId
} from '@/state/sublist/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const loadSublists = (
  sublists: ISublist[]
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      sublist: {
        allSublists,
        sublistsByListId
      }
    } = getState()
    
    let nextAllSublists = { ...allSublists }
    let nextSublistsByListId = { ...sublistsByListId }
    sublists.map(sublist => {
      nextAllSublists[sublist.id] = sublist
      nextSublistsByListId = {
        ...nextSublistsByListId,
        [sublist.listId]: [
          ...(sublistsByListId[sublist.listId] || []),
          sublist.id
        ]
      }
    })
    console.log(nextAllSublists)
    console.log(nextSublistsByListId)
    dispatch(setAllSublists(nextAllSublists))
    dispatch(setSublistsByListId(nextSublistsByListId))
	}
}