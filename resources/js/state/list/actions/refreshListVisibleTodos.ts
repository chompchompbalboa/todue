//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'

import { setVisibleTodosByListId } from '@/state/todo/actions'

import { resolveVisibleTodos } from '@/state/todo/resolvers'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const refreshListVisibleTodos = (
  listId: IList['id']
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {

    const {
      active: {
        isCompletedTodosVisible
      },
      todo: {
        allTodos,
        todosByListId,
        visibleTodosByListId
      }
    } = getState()

    dispatch(setVisibleTodosByListId({
      ...visibleTodosByListId,
      [listId]: resolveVisibleTodos(isCompletedTodosVisible, (todosByListId[listId] || []).map(currentTodoId => allTodos[currentTodoId]))
    }))
	}
}