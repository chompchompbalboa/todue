//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { ITodo } from '@/state/todo/types'

import { updateActiveTodoId } from '@/state/active/actions'
import { createHistoryStep } from '@/state/history/actions'
import { 
  setTodosByListId,
  setVisibleTodos
} from '@/state/todo/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const deleteTodo = (
  todoId: ITodo['id'],
  skipHistoryStep: boolean = false
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      active: {
        todoId: activeTodoId
      },
      todo: {
        allTodos,
        todosByListId,
        visibleTodos
      }
    } = getState()

    const listId = allTodos[todoId].listId

    const nextActiveTodoId = activeTodoId === todoId ? null : activeTodoId
    const nextListTodos = (todosByListId[listId] || []).filter(currentTodoId => currentTodoId !== todoId)
    const nextVisibleTodos = visibleTodos.filter(currentTodoId => currentTodoId !== todoId)
    const nextTodosByListId = {
      ...todosByListId,
      [listId]: nextListTodos
    }

    const actions = () => {
      dispatch(setTodosByListId(nextTodosByListId))
      dispatch(setVisibleTodos(nextVisibleTodos))
      dispatch(updateActiveTodoId(nextActiveTodoId))
      mutation.deleteTodo(todoId)
    }

    const undoActions = () => {
      dispatch(setTodosByListId(todosByListId))
      dispatch(setVisibleTodos(visibleTodos))
      dispatch(updateActiveTodoId(activeTodoId))
      mutation.restoreTodo(todoId)
    }

    !skipHistoryStep && dispatch(createHistoryStep({ actions, undoActions }))
    
    actions()
	}
}