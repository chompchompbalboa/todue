//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import defaultInitialData from '@/state/initialData'
import { 
  IAllTags,
  ITag
} from '@/state/tag/types'

import { 
  ITagActions,
  SET_ALL_TAGS
} from '@/state/tag/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
const initialTagData = typeof initialData !== 'undefined' ? initialData.tags : defaultInitialData.tags
const getInitialState = () => {
  let allTags: ITagState['allTags'] = {}
  let tagsByListId: ITagState['tagsByListId'] = {}
  initialTagData && initialTagData.forEach((tag: ITag) => {
    allTags[tag.id] = tag
    tagsByListId = {
      ...tagsByListId,
      [tag.listId]: [ ...tagsByListId[tag.listId] || [], tag.id ]
    }
  })
  return { allTags, tagsByListId }
}
const { allTags, tagsByListId } = getInitialState()

export type ITagState = {
  allTags: IAllTags
  tagsByListId: { [listId: string]: ITag['id'][] }
}

export const initialState: ITagState = {
  allTags: allTags,
  tagsByListId: tagsByListId
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

		default:
			return state
	}
}

export default tag
