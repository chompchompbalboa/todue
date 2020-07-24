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
  setVisibleTodosByListId
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
        visibleTodosByListId
      }
    } = getState()
    
    const listVisibleTodos = visibleTodosByListId[listId]
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
    const nextVisibleTodosByListId = {
      ...visibleTodosByListId,
      [listId]: [
        ...listVisibleTodos.slice(0, insertIndex),
        newTodo.id,
        ...listVisibleTodos.slice(insertIndex)
      ]
    }

    const actions = (isHistoryStep?: boolean) => {
      dispatch(setAllTodos(nextAllTodos))
      dispatch(setTodosByListId(nextTodosByListId))
      dispatch(setVisibleTodosByListId(nextVisibleTodosByListId))
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
      dispatch(setVisibleTodosByListId(visibleTodosByListId))
      mutation.deleteTodo(newTodo.id)
    }

    dispatch(createHistoryStep({ actions, undoActions }))
    actions()
	}
}