//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { ITag } from '@/state/tag/types'

import { 
  setAllTags,
  setTagsByListId
} from '@/state/tag/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const loadTags = (
  tags: ITag[] = []
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      tag: {
        allTags,
        tagsByListId
      }
    } = getState()

    let nextAllTags = { ...allTags }
    let nextTagsByListId = { ...tagsByListId }

    tags.forEach((tag: ITag) => {
      nextAllTags[tag.id] = tag
      nextTagsByListId = {
        ...nextTagsByListId,
        [tag.listId]: [ 
          ...(nextTagsByListId[tag.listId] || []).filter(currentTagId => currentTagId !== tag.id), 
          tag.id 
        ]
      }
    })

    dispatch(setAllTags(nextAllTags))
    dispatch(setTagsByListId(nextTagsByListId))
	}
}