//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'

import { updateList } from '@/state/list/actions'

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
      list: {
        allLists: {
          [listId]: list
        }
      },
      todo: {
        allTodos
      }
    } = getState()

    const nextListVisibleTodos = resolveVisibleTodos(isCompletedTodosVisible, list.todos.map(currentTodoId => allTodos[currentTodoId]))

    dispatch(updateList(listId, { visibleTodos: nextListVisibleTodos }, null, true))
	}
}