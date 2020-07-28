//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { v4 as createUuid } from 'uuid'

import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'
import { ITag } from '@/state/tag/types'
import { ISublistTag } from '@/state/sublistTag/types'
import { ITodo } from '@/state/todo/types'

import { 
  setAllSublistTags,
  setSublistTagsBySublistId 
} from '@/state/sublistTag/actions'
//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const createSublistTag = (
  listId: IList['id'],
  sublistId: ITodo['id'],
  tagId: ITag['id']
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      sublistTag: {
        allSublistTags,
        sublistTagsBySublistId
      }
    } = getState()
    
    const newSublistTag: ISublistTag = {
      id: createUuid(),
      listId: listId,
      sublistId: sublistId,
      tagId: tagId,
      type: 'INCLUDE'
    }
    
    const nextSublistTags = [ ...(sublistTagsBySublistId[sublistId] || []), newSublistTag.id ]

    dispatch(setAllSublistTags({
      ...allSublistTags,
      [newSublistTag.id]: newSublistTag
    }))

    dispatch(setSublistTagsBySublistId({
      ...sublistTagsBySublistId,
      [sublistId]: nextSublistTags
    }))

    mutation.createListSublistTag(newSublistTag)
	}
}