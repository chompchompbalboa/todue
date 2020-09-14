//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IThunkDispatch } from '@/state/types'

import { clearState as clearActiveState } from '@/state/active/actions'
import { clearState as clearListState } from '@/state/list/actions'
import { clearState as clearSublistState } from '@/state/sublist/actions'
import { clearState as clearSublistTagState } from '@/state/sublistTag/actions'
import { clearState as clearTagState } from '@/state/tag/actions'
import { clearState as clearTodoState } from '@/state/todo/actions'
import { clearState as clearTodoNoteState } from '@/state/todoNote/actions'
import { clearState as clearTodoTagState } from '@/state/todoTag/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const clearLoadedLists = () => {
	return async (dispatch: IThunkDispatch) => {
    dispatch(clearActiveState())
    dispatch(clearListState())
    dispatch(clearSublistState())
    dispatch(clearSublistTagState())
    dispatch(clearTagState())
    dispatch(clearTodoState())
    dispatch(clearTodoNoteState())
    dispatch(clearTodoTagState())
	}
}