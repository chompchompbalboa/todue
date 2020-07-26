//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import defaultInitialData from '@/state/initialData'
import {
  IAllSublists,
  ISublist
} from '@/state/sublist/types'

import { 
  ISublistActions,
  SET_ALL_SUBLISTS,
  SET_SUBLISTS_BY_LIST_ID,
  UPDATE_SUBLIST
} from '@/state/sublist/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
const initialSublistData: ISublist[] = typeof initialData !== 'undefined' ? initialData.sublists : defaultInitialData.sublists
const getInitialState = () => {
  let allSublists: ISublistState['allSublists'] = {}
  let sublistsByListId: ISublistState['sublistsByListId'] = {}
  initialSublistData.map(sublist => {
    allSublists[sublist.id] = sublist
    sublistsByListId = {
      ...sublistsByListId,
      [sublist.listId]: [
        ...(sublistsByListId[sublist.listId] || []),
        sublist.id
      ]
    }
  })
  return { allSublists, sublistsByListId }
}
const { allSublists, sublistsByListId } = getInitialState()

export type ISublistState = {
  allSublists: IAllSublists
  sublistsByListId: { [listId: string]: ISublist['id'][] }
}

export const initialState: ISublistState = {
  allSublists,
  sublistsByListId
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const example = (state = initialState, action: ISublistActions): ISublistState => {
	switch (action.type) {

    case SET_ALL_SUBLISTS: {
      const { nextAllLists } = action
      return {
        ...state,
        allSublists: nextAllLists
      }
    }

    case SET_SUBLISTS_BY_LIST_ID: {
      const { nextSublistsByListId } = action
      return {
        ...state,
        sublistsByListId: nextSublistsByListId
      }
    }

    case UPDATE_SUBLIST: {
      const { sublistId, updates } = action
      return {
        ...state,
        allSublists: {
          ...state.allSublists,
          [sublistId]: {
            ...state.allSublists[sublistId],
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
