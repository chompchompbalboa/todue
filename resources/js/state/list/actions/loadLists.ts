//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'
import { IListState } from '@/state/list/reducers'

import { 
  setAllLists,
  setLists,
  setLoadedLists 
} from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const loadLists = (
  listsToLoad: IList[]
) => {
	return async (dispatch: IThunkDispatch) => {

    let allLists: IListState['allLists'] = {}
    let lists: IListState['lists'] = []
    let loadedLists: IListState['loadedLists'] = new Set()
    listsToLoad.map(list => {
      allLists[list.id] = list
      lists.push(list.id)
    })

    dispatch(setAllLists(allLists))
    dispatch(setLists(lists))
    dispatch(setLoadedLists(loadedLists))

	}
}