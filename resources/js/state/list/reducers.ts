//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import defaultInitialData from '@/state/initialData'
import {
  IAllLists,
  IList
} from '@/state/list/types'

import { 
  IListActions,
  SET_ALL_LISTS,
  SET_LISTS,
  SET_LOADED_LISTS,
  UPDATE_LIST
} from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
const initialListData: IList[] = typeof initialData !== 'undefined' ? initialData.lists : defaultInitialData.lists
const getInitialState = () => {
  let allLists: IListState['allLists'] = {}
  let lists: IListState['lists'] = []
  let loadedLists: IListState['loadedLists'] = new Set()
  initialListData.map(list => {
    allLists[list.id] = list
    lists.push(list.id)
  })
  return { allLists, lists, loadedLists }
}
const { allLists, lists, loadedLists } = getInitialState()

export type IListState = {
  allLists: IAllLists,
  lists: IList['id'][]
  loadedLists: Set<string>
}

export const initialState: IListState = {
  allLists: allLists,
  lists: lists,
  loadedLists: loadedLists
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const example = (state = initialState, action: IListActions): IListState => {
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

    case SET_LOADED_LISTS: {
      const { nextLoadedLists } = action
      return {
        ...state,
        loadedLists: nextLoadedLists
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
