//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'

import { updateActiveTodoId } from '@/state/active/actions'
import { setVisibleTodos } from '@/state/todo/actions'

import { resolveVisibleTodos } from '@/state/todo/resolvers'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const refreshVisibleTodos = () => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    // Refresh the visible todos
    dispatch(setVisibleTodos(resolveVisibleTodos(getState)))
    
    // Update the active todo if needed
    const {
      active: {
        todoId: activeTodoId
      },
      todo: {
        visibleTodos
      }
    } = getState()
    if(activeTodoId === null && visibleTodos.length > 0) {
      dispatch(updateActiveTodoId(visibleTodos[1]))
    }
	}
}