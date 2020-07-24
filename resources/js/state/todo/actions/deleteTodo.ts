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
  setVisibleTodosByListId
} from '@/state/todo/actions'
import { resolveVisibleTodos } from '../resolvers'

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
        isCompletedTodosVisible,
        todoId: activeTodoId
      },
      todo: {
        allTodos,
        todosByListId,
        visibleTodosByListId
      }
    } = getState()

    const listId = allTodos[todoId].listId

    const nextActiveTodoId = activeTodoId === todoId ? null : activeTodoId
    const nextListTodos = (todosByListId[listId] || []).filter(currentTodoId => currentTodoId !== todoId)
    const nextListVisibleTodos = resolveVisibleTodos(isCompletedTodosVisible, nextListTodos.map(currentTodoId => allTodos[currentTodoId]))
    const nextTodosByListId = {
      ...todosByListId,
      [listId]: nextListTodos
    }
    const nextVisibleTodosByListId = {
      ...visibleTodosByListId,
      [listId]: nextListVisibleTodos
    }

    const actions = () => {
      dispatch(setTodosByListId(nextTodosByListId))
      dispatch(setVisibleTodosByListId(nextVisibleTodosByListId))
      dispatch(updateActiveTodoId(nextActiveTodoId))
      mutation.deleteTodo(todoId)
    }

    const undoActions = () => {
      dispatch(setTodosByListId(todosByListId))
      dispatch(setVisibleTodosByListId(visibleTodosByListId))
      dispatch(updateActiveTodoId(activeTodoId))
      mutation.restoreTodo(todoId)
    }

    !skipHistoryStep && dispatch(createHistoryStep({ actions, undoActions }))
    
    actions()
	}
}