//-----------------------------------------------------------------------------
// Initial
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
  UPDATE_LIST
} from '@/state/list/actions'

import { resolveVisibleTodos } from '@/state/todo/resolvers'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
const initialListData: IListFromDatabase[] = typeof initialData !== 'undefined' ? initialData.lists : defaultInitialData.lists
const getInitialState = () => {
  let allLists: IListState['allLists'] = {}
  let lists: IListState['lists'] = []
  initialListData.map((list, index) => {
    const currentList = {
      ...list,
      todos: index === 0 && list.todos ? list.todos.map(todo => todo.id) : [],
      tags: index === 0 && list.tags ? list.tags.map(todo => todo.id) : [],
      visibleTodos: [] as IList['visibleTodos']
    }
    allLists[list.id] = {
      ...currentList,
      visibleTodos: index === 0 ? resolveVisibleTodos(currentList, list.todos) : [],
    }
    lists.push(list.id)
  })
  return { allLists, lists }
}
const { allLists, lists } = getInitialState()

export type IListState = {
  allLists: IAllLists,
  lists: IList['id'][]
}

export const initialDraftState: IListState = {
  allLists: allLists,
  lists: lists
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
