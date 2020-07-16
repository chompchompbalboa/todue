//-----------------------------------------------------------------------------
// Initial
//-----------------------------------------------------------------------------
import { 
  IAllTags
} from '@/state/tag/types'

import { 
  ITagActions,
  SET_ALL_TAGS
} from '@/state/tag/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
export type ITagState = {
  allTags: IAllTags
}

export const initialState: ITagState = {
  allTags: {},
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
