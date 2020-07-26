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
import { 
  setAllTodos,
  setTodosByListId,
  setVisibleTodos
} from '@/state/todo/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const createTodo = (
  listId: IList['id'],
  insertAfterTodoId?: ITodo['id']
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      todo: {
        allTodos,
        todosByListId,
        visibleTodos
      }
    } = getState()
    
    const insertIndex = insertAfterTodoId
      ? visibleTodos.findIndex(currentTodoId => currentTodoId === insertAfterTodoId) + 1
      : visibleTodos.length
    const newTodoDateCurrent = insertAfterTodoId
      ? allTodos[insertAfterTodoId].dateCurrent
      : allTodos[visibleTodos[visibleTodos.length - 1]]
        ? allTodos[visibleTodos[visibleTodos.length - 1]].dateCurrent
        : moment().format('YYYY-MM-DD HH:mm:ss')
          
    
    const newTodo: ITodo = {
      id: createUuid(),
      listId: listId,
      text: null,
      dateCreated: moment().format('YYYY-MM-DD HH:mm:ss'),
      dateCurrent: moment(newTodoDateCurrent).format('YYYY-MM-DD HH:mm:ss'),
      dateCompleted: null,
      timeStart: null,
      timeEnd: null,
      priority: null,
      tags: []
    }

    const nextAllTodos = {
      ...allTodos,
      [newTodo.id]: newTodo
    }
    const nextTodosByListId = {
      ...todosByListId,
      [listId]: [
        ...(todosByListId[listId] || []),
        newTodo.id
      ]
    }
    const nextVisibleTodos = [
      ...visibleTodos.slice(0, insertIndex),
      newTodo.id,
      ...visibleTodos.slice(insertIndex)
    ]

    const actions = (isHistoryStep?: boolean) => {
      dispatch(setAllTodos(nextAllTodos))
      dispatch(setTodosByListId(nextTodosByListId))
      dispatch(setVisibleTodos(nextVisibleTodos))
      if(!isHistoryStep) {
        mutation.createTodo(newTodo)
      }
      else {
        mutation.restoreTodo(newTodo.id)
      }
    }

    const undoActions = () => {
      dispatch(setAllTodos(allTodos))
      dispatch(setTodosByListId(todosByListId))
      dispatch(setVisibleTodos(visibleTodos))
      mutation.deleteTodo(newTodo.id)
    }

    dispatch(createHistoryStep({ actions, undoActions }))
    actions()
	}
}