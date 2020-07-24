//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import defaultInitialData from '@/state/initialData'
import {
  IAllLists,
  IList,
  IListFromDatabase
} from '@/state/list/types'

import { 
  IListActions,
  SET_ALL_LISTS,
  SET_LISTS,
  SET_SUBLISTS_BY_LIST_ID,
  UPDATE_LIST
} from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
const initialListData: IListFromDatabase[] = typeof initialData !== 'undefined' ? initialData.lists : defaultInitialData.lists
const getInitialState = () => {
  let allLists: IListState['allLists'] = {}
  let lists: IListState['lists'] = []
  let sublistsByListId: IListState['sublistsByListId'] = {}
  initialListData.map((list, index) => {
    allLists[list.id] = {
      id: list.id,
      listId: list.listId,
      rootListId: list.rootListId,
      name: list.name
    }
    lists.push(list.id)
    if(list.listId) {
      sublistsByListId = {
        ...sublistsByListId,
        [list.listId]: [
          ...(sublistsByListId[list.listId] || []),
          list.id
        ]
      }
    }
  })
  return { allLists, lists, sublistsByListId }
}
const { allLists, lists, sublistsByListId } = getInitialState()

export type IListState = {
  allLists: IAllLists,
  lists: IList['id'][],
  sublistsByListId: { [listId: string]: IList['id'][] }
}

export const initialDraftState: IListState = {
  allLists: allLists,
  lists: lists,
  sublistsByListId: sublistsByListId
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

    case SET_SUBLISTS_BY_LIST_ID: {
      const { nextSublistsByListId } = action
      return {
        ...state,
        sublistsByListId: nextSublistsByListId
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
