//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { ITodo, ITodoUpdates } from '@/state/todo/types'

import { createHistoryStep } from '@/state/history/actions'
import { 
  refreshVisibleTodos,
  updateTodoReducer 
} from '@/state/todo/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const updateTodo = (
  todoId: ITodo['id'], 
  updates: ITodoUpdates,
  undoUpdates?: ITodoUpdates,
  updateVisibleTodos: boolean = false
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {

    const actions = () => {
      dispatch(updateTodoReducer(todoId, updates))
      updateVisibleTodos && dispatch(refreshVisibleTodos())
      mutation.updateTodo(todoId, updates)
    }

    const undoActions = () => {
      dispatch(updateTodoReducer(todoId, undoUpdates))
      updateVisibleTodos && dispatch(refreshVisibleTodos())
      mutation.updateTodo(todoId, undoUpdates)
    }

    undoUpdates && dispatch(createHistoryStep({ actions, undoActions }))
    
    actions()
	}
}