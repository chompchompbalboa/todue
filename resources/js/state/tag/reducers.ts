//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { 
  IAllTags,
  ITag
} from '@/state/tag/types'

import { 
  ITagActions,
  SET_ALL_TAGS,
  SET_TAGS_BY_LIST_ID
} from '@/state/tag/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
export type ITagState = {
  allTags: IAllTags
  tagsByListId: { [listId: string]: ITag['id'][] }
}

export const initialState: ITagState = {
  allTags: {},
  tagsByListId: {}
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const tag = (state = initialState, action: ITagActions): ITagState => {
	switch (action.type) {

    case SET_ALL_TAGS: {
      const { nextAllTags } = action
      return {
        ...state,
        allTags: nextAllTags
      }
    }

    case SET_TAGS_BY_LIST_ID: {
      const { nextTagsByListId } = action
      return {
        ...state,
        tagsByListId: nextTagsByListId
      }
    }

		default:
			return state
	}
}

export default tag
