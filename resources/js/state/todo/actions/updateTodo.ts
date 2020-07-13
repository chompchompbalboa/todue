//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { ITodo, ITodoUpdates } from '@/state/todo/types'

import { createHistoryStep } from '@/state/history/actions'
import { refreshListVisibleTodos } from '@/state/list/actions'
import { updateTodoReducer } from '@/state/todo/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const updateTodo = (
  todoId: ITodo['id'], 
  updates: ITodoUpdates,
  undoUpdates?: ITodoUpdates,
  updateListVisibleTodos: boolean = false
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {

    const {
      todo: {
        allTodos: {
          [todoId]: {
            listId
          }
        }
      }
    } = getState()

    const actions = () => {
      dispatch(updateTodoReducer(todoId, updates))
      updateListVisibleTodos && dispatch(refreshListVisibleTodos(listId))
      mutation.updateTodo(todoId, updates)
    }

    const undoActions = () => {
      dispatch(updateTodoReducer(todoId, undoUpdates))
      updateListVisibleTodos && dispatch(refreshListVisibleTodos(listId))
      mutation.updateTodo(todoId, undoUpdates)
    }

    undoUpdates && dispatch(createHistoryStep({ actions, undoActions }))
    
    actions()
	}
}