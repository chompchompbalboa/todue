//-----------------------------------------------------------------------------
// Initial
//-----------------------------------------------------------------------------
import { IList } from '@/state/list/types'

import { 
  IActiveActions,
  UPDATE_ACTIVE_LIST_ID
} from '@/state/active/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
export type IActiveState = {
  listId: IList['id']
}

export const initialState: IActiveState = {
  listId: null
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const active = (state = initialState, action: IActiveActions): IActiveState => {
	switch (action.type) {

    case UPDATE_ACTIVE_LIST_ID: {
      const { nextActiveListId } = action
      return {
        ...state,
        listId: nextActiveListId
      }
    }

		default:
			return state
	}
}

export default active
