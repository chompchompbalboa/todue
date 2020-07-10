//-----------------------------------------------------------------------------
// Initial
//-----------------------------------------------------------------------------
import {
  IAllLists,
  IList
} from '@/state/list/types'

import { 
  IListActions,
  SET_ALL_LISTS,
  SET_LISTS,
  UPDATE_LIST
} from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
export type IListState = {
  allLists: IAllLists,
  lists: IList['id'][]
}

export const initialDraftState: IListState = {
  allLists: {},
  lists: []
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const example = (state = initialDraftState, action: IListActions): IListState => {
	switch (action.type) {

    case SET_ALL_LISTS: {
      const { nextAllLists } = action
      return {
        ...state,
        allLists: nextAllLists
      }
    }

    case SET_LISTS: {
      const { nextLists } = action
      return {
        ...state,
        lists: nextLists
      }
    }

    case UPDATE_LIST: {
      const { listId, updates } = action
      return {
        ...state,
        allLists: {
          ...state.allLists,
          [listId]: {
            ...state.allLists[listId],
            ...updates
          }
        }
      }
    }

		default:
			return state
	}
}

export default example
