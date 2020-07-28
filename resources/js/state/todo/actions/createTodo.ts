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
import { ITodoTag } from '@/state/todoTag/types'

import { createHistoryStep } from '@/state/history/actions'
import { 
  setAllTodos,
  setTodosByListId,
  setVisibleTodos
} from '@/state/todo/actions'
import {
  setAllTodoTags,
  setTodoTagsByTodoId
} from '@/state/todoTag/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const createTodo = (
  listId: IList['id'],
  insertAfterTodoId?: ITodo['id']
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      active: {
        sublistId: activeSublistId
      },
      sublistTag: {
        allSublistTags,
        sublistTagsBySublistId
      },
      todo: {
        allTodos,
        todosByListId,
        visibleTodos
      },
      todoTag: {
        allTodoTags,
        todoTagsByTodoId,
      }
    } = getState()
    
    // Get the visibleTodos index to insert the todo at
    const insertIndex = insertAfterTodoId
      ? visibleTodos.findIndex(currentTodoId => currentTodoId === insertAfterTodoId) + 1
      : visibleTodos.length
    
    // Get the date for the new todo
    const newTodoDateCurrent = insertAfterTodoId
      ? allTodos[insertAfterTodoId].dateCurrent
      : allTodos[visibleTodos[visibleTodos.length - 1]]
        ? allTodos[visibleTodos[visibleTodos.length - 1]].dateCurrent
        : moment().format('YYYY-MM-DD HH:mm:ss')
    
    // New Todo
    const newTodo: ITodo = {
      id: createUuid(),
      listId: listId,
      text: null,
      dateCreated: moment().format('YYYY-MM-DD HH:mm:ss'),
      dateCurrent: moment(newTodoDateCurrent).format('YYYY-MM-DD HH:mm:ss'),
      dateCompleted: null,
      timeStart: null,
      timeEnd: null,
      priority: null
    }

    // Next All Todos
    const nextAllTodos = {
      ...allTodos,
      [newTodo.id]: newTodo
    }
    
    // Next Todos By List Id
    const nextTodosByListId = {
      ...todosByListId,
      [listId]: [
        ...(todosByListId[listId] || []),
        newTodo.id
      ]
    }
    
    // Next Visible Todos
    const nextVisibleTodos = [
      ...visibleTodos.slice(0, insertIndex),
      newTodo.id,
      ...visibleTodos.slice(insertIndex)
    ]
    
    // Get the active sublist's tags
    const sublistTags = activeSublistId
      ? sublistTagsBySublistId[activeSublistId]
      : []
    
    // Get the new todo tags
    const newTodoTags = sublistTags.map(sublistTagId => {
      const sublistTag = allSublistTags[sublistTagId]
      const newTodoTag: ITodoTag = {
        id: createUuid(),
        listId: listId,
        todoId: newTodo.id,
        tagId: sublistTag.tagId
      }
      return newTodoTag
    })
    
    // Build the new todo
    let nextTodoTagsByTodoId = { ...todoTagsByTodoId }
    let nextAllTodoTags = { ...allTodoTags }
    newTodoTags.forEach(newTodoTag => {
      nextAllTodoTags = {
        ...nextAllTodoTags,
        [newTodoTag.id]: newTodoTag
      }
      nextTodoTagsByTodoId = {
        ...todoTagsByTodoId,
        [newTodo.id]: [ ...(nextTodoTagsByTodoId[newTodo.id] || []), newTodoTag.id ]
      }
    })

    // Actions
    const actions = (isHistoryStep?: boolean) => {
      dispatch(setAllTodos(nextAllTodos))
      dispatch(setAllTodoTags(nextAllTodoTags))
      dispatch(setTodoTagsByTodoId(nextTodoTagsByTodoId))
      dispatch(setTodosByListId(nextTodosByListId))
      dispatch(setVisibleTodos(nextVisibleTodos))
      if(!isHistoryStep) {
        mutation.createTodo(newTodo)
        newTodoTags.forEach(newTodoTag => {
          mutation.createTodoTag(newTodoTag)
        })
      }
      else {
        mutation.restoreTodo(newTodo.id)
        newTodoTags.forEach(newTodoTag => {
          mutation.restoreTodoTag(newTodoTag.id)
        })
      }
    }

    // Undo actions
    const undoActions = () => {
      dispatch(setVisibleTodos(visibleTodos))
      dispatch(setTodosByListId(todosByListId))
      dispatch(setTodoTagsByTodoId(todoTagsByTodoId))
      dispatch(setAllTodoTags(allTodoTags))
      dispatch(setAllTodos(allTodos))
      mutation.deleteTodo(newTodo.id)
      newTodoTags.forEach(newTodoTag => {
        mutation.deleteTodoTag(newTodoTag.id)
      })
    }

    // Create the history step
    dispatch(createHistoryStep({ actions, undoActions }))
    
    // Call the actions
    actions()
	}
}