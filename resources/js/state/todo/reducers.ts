//-----------------------------------------------------------------------------
// Initial
//-----------------------------------------------------------------------------
import defaultInitialData from '@/state/initialData'
import {
  IAllTodos,
  ITodo,
  ITodoFromDatabase
} from '@/state/todo/types'

import { 
  ITodoActions,
  SET_ALL_TODOS,
  SET_TODOS_BY_LIST_ID,
  SET_VISIBLE_TODOS,
  UPDATE_TODO
} from '@/state/todo/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
const initialTodoData = typeof initialData !== 'undefined' ? initialData.todos : defaultInitialData.todos
const getInitialState = () => {
  // Variables
  let allTodos: ITodoState['allTodos'] = {}
  let todosByListId: ITodoState['todosByListId'] = {}
  // For each todo
  initialTodoData && initialTodoData.forEach((todo: ITodoFromDatabase) => {
    // All Todos
    allTodos[todo.id] = {
      ...todo,
      tags: todo.tags.map(todoTag => todoTag.tagId)
    }
    // Todos By List Id
    todosByListId = {
      ...todosByListId,
      [todo.listId]: [
        ...(todosByListId[todo.listId] || []),
        todo.id
      ]
    }
  })
  return { allTodos, todosByListId }
}
const { allTodos, todosByListId } = getInitialState()
export type ITodoState = {
  allTodos: IAllTodos
  todosByListId: { [listId: string]: ITodo['id'][] }
  visibleTodos: ITodo['id'][]
}

export const initialDraftState: ITodoState = {
  allTodos: allTodos,
  todosByListId: todosByListId,
  visibleTodos: []
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const example = (state = initialDraftState, action: ITodoActions): ITodoState => {
	switch (action.type) {

    case SET_ALL_TODOS: {
      const { nextAllTodos } = action
      return {
        ...state,
        allTodos: nextAllTodos
      }
    }

    case SET_TODOS_BY_LIST_ID: {
      const { nextTodosByListId } = action
      return {
        ...state,
        todosByListId: nextTodosByListId
      }
    }

    case SET_VISIBLE_TODOS: {
      const { nextVisibleTodos } = action
      return {
        ...state,
        visibleTodos: nextVisibleTodos
      }
    }

    case UPDATE_TODO: {
      const { todoId, updates } = action
      return {
        ...state,
        allTodos: {
          ...state.allTodos,
          [todoId]: {
            ...state.allTodos[todoId],
            ...updates
          }
        }
      }
    }

		default:
			return state
	}
}

export default example
