//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { 
  IAllSublistTags,
  ISublistTag
} from '@/state/sublistTag/types'

import { 
  ISublistTagActions,
  SET_ALL_SUBLIST_TAGS,
  SET_SUBLIST_TAGS_BY_SUBLIST_ID
} from '@/state/sublistTag/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
export type ISublistTagState = {
  allSublistTags: IAllSublistTags
  sublistTagsBySublistId: { [listId: string]: ISublistTag['id'][] }
}

export const initialState: ISublistTagState = {
  allSublistTags: {},
  sublistTagsBySublistId: {}
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const tag = (state = initialState, action: ISublistTagActions): ISublistTagState => {
	switch (action.type) {

    case SET_ALL_SUBLIST_TAGS: {
      const { nextAllSublistTags } = action
      return {
        ...state,
        allSublistTags: nextAllSublistTags
      }
    }

    case SET_SUBLIST_TAGS_BY_SUBLIST_ID: {
      const { nextSublistTagsBySublistId } = action
      return {
        ...state,
        sublistTagsBySublistId: nextSublistTagsBySublistId
      }
    }

		default:
			return state
	}
}

export default tag
