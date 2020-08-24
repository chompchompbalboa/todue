//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import randomColor from 'randomcolor'
import { v4 as createUuid } from 'uuid'

import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'
import { ITag } from '@/state/tag/types'
import { ISublistTag } from '@/state/sublistTag/types'
import { ITodo } from '@/state/todo/types'

import {
  updateSublist
} from '@/state/sublist/actions'
import { 
  setAllSublistTags,
  setSublistTagsBySublistId 
} from '@/state/sublistTag/actions'
import { 
  setAllTags,
  setTagsByListId
} from '@/state/tag/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const createSublistDefaultTag = (
  listId: IList['id'],
  sublistId: ITodo['id'],
  newTagText: string
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      sublistTag: {
        allSublistTags,
        sublistTagsBySublistId
      },
      tag: {
        allTags,
        tagsByListId
      }
    } = getState()
    
    const newTag: ITag = {
      id: createUuid(),
      listId: listId,
      text: newTagText,
      backgroundColor: randomColor()
    }
    
    const newSublistTag: ISublistTag = {
      id: createUuid(),
      listId: listId,
      sublistId: sublistId,
      tagId: newTag.id,
      type: 'INCLUDE'
    }
    
    const nextSublistTags = [ ...(sublistTagsBySublistId[sublistId] || []), newSublistTag.id ]
    
    dispatch(setAllTags({
      ...allTags,
      [newTag.id]: newTag
    }))
    
    dispatch(setTagsByListId({
      ...tagsByListId,
      [listId]: [
        ...(tagsByListId[listId] || []),
       newTag.id 
      ]
    }))

    dispatch(setAllSublistTags({
      ...allSublistTags,
      [newSublistTag.id]: newSublistTag
    }))

    dispatch(setSublistTagsBySublistId({
      ...sublistTagsBySublistId,
      [sublistId]: nextSublistTags
    }))
    
    dispatch(updateSublist(sublistId, { defaultTagId: newTag.id }))

    mutation.createListTag(newTag).then(() => mutation.createListSublistTag(newSublistTag))
	}
}