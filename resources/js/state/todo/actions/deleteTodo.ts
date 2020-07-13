//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { ITodo } from '@/state/todo/types'

import { updateActiveTodoId } from '@/state/active/actions'
import { createHistoryStep } from '@/state/history/actions'
import { updateList } from '@/state/list/actions'
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
        todoId: activeTodoId
      },
      list: {
        allLists
      },
      todo: {
        allTodos
      }
    } = getState()

    const listId = allTodos[todoId].listId
    const listTodos = allLists[listId].todos
    const listVisibleTodos = allLists[listId].visibleTodos

    const nextActiveTodoId = activeTodoId === todoId ? null : activeTodoId
    const nextListTodos = listTodos.filter(currentTodoId => currentTodoId !== todoId)
    const nextListVisibleTodos = resolveVisibleTodos(nextListTodos.map(currentTodoId => allTodos[currentTodoId]))

    const actions = () => {
      dispatch(updateActiveTodoId(nextActiveTodoId))
      dispatch(updateList(listId, { 
        todos: nextListTodos, 
        visibleTodos: nextListVisibleTodos
      }, null, true))
      mutation.deleteTodo(todoId)
    }

    const undoActions = () => {
      dispatch(updateActiveTodoId(activeTodoId))
      dispatch(updateList(listId, { 
        todos: listTodos, 
        visibleTodos: listVisibleTodos 
      }, null, true))
      mutation.restoreTodo(todoId)
    }

    !skipHistoryStep && dispatch(createHistoryStep({ actions, undoActions }))
    
    actions()
	}
}