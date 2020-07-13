//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import moment from 'moment'
import { v4 as createUuid } from 'uuid'

import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'
import { ITodo } from '@/state/todo/types'

import { createHistoryStep } from '@/state/history/actions'
import { updateList } from '@/state/list/actions'
import { setAllTodos } from '@/state/todo/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const createTodo = (
  listId: IList['id'],
  insertAfterTodoId?: ITodo['id']
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      list: {
        allLists: {
          [listId]: {
            todos: listTodos,
            visibleTodos: listVisibleTodos
          }
        }
      },
      todo: {
        allTodos
      }
    } = getState()
    
    const insertIndex = insertAfterTodoId
      ? listVisibleTodos.findIndex(currentTodoId => currentTodoId === insertAfterTodoId) + 1
      : listVisibleTodos.length
    const newTodoDateCurrent = insertAfterTodoId
      ? allTodos[insertAfterTodoId].dateCurrent
      : allTodos[listVisibleTodos[listVisibleTodos.length - 1]].dateCurrent
          
    
    const newTodo: ITodo = {
      id: createUuid(),
      listId: listId,
      text: null,
      dateCreated: moment().format('YYYY-MM-DD HH:mm:ss'),
      dateCurrent: moment(newTodoDateCurrent).format('YYYY-MM-DD HH:mm:ss'),
      dateCompleted: null,
    }

    const nextAllTodos = {
      ...allTodos,
      [newTodo.id]: newTodo
    }

    const nextListTodos = [ ...listTodos, newTodo.id ]
    const nextListVisibleTodos = [
      ...listVisibleTodos.slice(0, insertIndex),
      newTodo.id,
      ...listVisibleTodos.slice(insertIndex)
    ]

    const actions = (isHistoryStep?: boolean) => {
      dispatch(setAllTodos(nextAllTodos))
      dispatch(updateList(listId, {
        todos: nextListTodos,
        visibleTodos: nextListVisibleTodos
      }, null, true))
      if(!isHistoryStep) {
        mutation.createTodo(newTodo)
      }
      else {
        mutation.restoreTodo(newTodo.id)
      }
    }

    const undoActions = () => {
      dispatch(setAllTodos(allTodos))
      dispatch(updateList(listId, {
        todos: listTodos,
        visibleTodos: listVisibleTodos
      }, null, true))
      mutation.deleteTodo(newTodo.id)
    }

    dispatch(createHistoryStep({ actions, undoActions }))
    actions()
	}
}