//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { v4 as createUuid } from 'uuid'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'

import { initialState as initialActiveState } from '@/state/active/reducers'
import { initialState as initialHistoryState } from '@/state/history/reducers'
import { initialState as initialListState } from '@/state/list/reducers'
import { initialState as initialSublistState } from '@/state/sublist/reducers'
import { initialState as initialSublistTagState } from '@/state/sublistTag/reducers'
import { initialState as initialTagState } from '@/state/tag/reducers'
import { initialState as initialTodoState } from '@/state/todo/reducers'
import { initialState as initialTodoNoteState } from '@/state/todoNote/reducers'
import { initialState as initialTodoTagState } from '@/state/todoTag/reducers'
import { initialState as initialUserState } from '@/state/user/reducers'

//-----------------------------------------------------------------------------
// Initial App State
//-----------------------------------------------------------------------------
export const initialAppState: IAppState = {
  active: initialActiveState,
  history: initialHistoryState,
  list: initialListState,
  sublist: initialSublistState,
  sublistTag: initialSublistTagState,
  tag: initialTagState,
  todo: initialTodoState,
  todoNote: initialTodoNoteState,
  todoTag: initialTodoTagState,
  user: initialUserState
}

//-----------------------------------------------------------------------------
// Get Mock App State
//-----------------------------------------------------------------------------
export const getMockAppState = ({
  numberOfLists = 0
}: IMockAppStateInput = {}) => {
  
  // Lists
  let lists: IAppState['list']['lists'] = []
  let allLists: IAppState['list']['allLists'] = {}
  for(let currentListNumber = 0; currentListNumber < numberOfLists; currentListNumber++) {
    const newList: IList = {
      id: createUuid(),
      name: 'List ' + (currentListNumber + 1)
    }
    allLists = {
      ...allLists,
      [newList.id]: newList
    }
    lists.push(newList.id)
  }
  
  return {
    ...initialAppState,
    list: {
      ...initialAppState['list'],
      lists,
      allLists
    }
  }
}

export interface IMockAppStateInput {
  numberOfLists?: number
}

//-----------------------------------------------------------------------------
// Mock App State Factory
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// Mock App State
//-----------------------------------------------------------------------------
export const mockAppState = getMockAppState()