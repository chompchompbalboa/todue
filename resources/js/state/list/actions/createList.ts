//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { v4 as createUuid } from 'uuid'

import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'

import {
  updateActiveListId
} from '@/state/active/actions'
import {
  setAllLists,
  setLists
} from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const createList = () => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      allLists,
      lists
    } = getState().list
    
    const newList: IList = {
      id: createUuid(),
      name: null
    }
    
    dispatch(setAllLists({
      ...allLists,
      [newList.id]: newList
    }))
    
    dispatch(setLists([
      newList.id,
      ...lists
    ]))
    
    dispatch(updateActiveListId(newList.id))
    mutation.createList()
	}
}