//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { query } from '@/api'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'

import { loadSublists } from '@/state/sublist/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const loadList = (
  listId: IList['id']
) => {
	return async (dispatch: IThunkDispatch) => {
    query.loadList(listId).then(response => {
      if(response.status === 200) {
        dispatch(loadSublists(response.data.sublists as ISublist[]))
      }
    })
	}
}