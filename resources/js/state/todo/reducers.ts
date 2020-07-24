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
  SET_TODOS,
  SET_TODOS_BY_LIST_ID,
  SET_VISIBLE_TODOS_BY_LIST_ID,
  UPDATE_TODO
} from '@/state/todo/actions'
import { resolveVisibleTodos } from './resolvers'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
const initialListData = typeof initialData !== 'undefined' ? initialData.lists : defaultInitialData.lists
const initialTodoData = typeof initialData !== 'undefined' ? initialData.todos : defaultInitialData.todos
const getInitialState = () => {
  let allTodos: ITodoState['allTodos'] = {}
  let todos: ITodoState['todos'] = []
  let todosByListId: ITodoState['todosByListId'] = {}
  let visibleTodosByListId: ITodoState['visibleTodosByListId'] = {}
  const initialList = initialListData[0]
  initialTodoData && initialTodoData.forEach((todo: ITodoFromDatabase) => {
    allTodos[todo.id] = {
      ...todo,
      tags: todo.tags.map(todoTag => todoTag.tagId)
    }
    todos.push(todo.id)
    todosByListId = {
      ...todosByListId,
      [todo.listId]: [
        ...(todosByListId[todo.listId] || []),
        todo.id
      ]
    }
  })
  visibleTodosByListId[initialList.id] = resolveVisibleTodos(false, (todosByListId[initialList.id] || []).map(todoId => allTodos[todoId]))
  return { allTodos, todos, todosByListId, visibleTodosByListId }
}
const { allTodos, todos, todosByListId, visibleTodosByListId } = getInitialState()

export type ITodoState = {
  allTodos: IAllTodos,
  todos: ITodo['id'][],
  todosByListId: { [listId: string]: ITodo['id'][] }
  visibleTodosByListId: { [listId: string]: ITodo['id'][] }
}

export const initialDraftState: ITodoState = {
  allTodos: allTodos,
  todos: todos,
  todosByListId: todosByListId,
  visibleTodosByListId: visibleTodosByListId
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

    case SET_TODOS: {
      const { nextTodos } = action
      return {
        ...state,
        todos: nextTodos
      }
    }

    case SET_TODOS_BY_LIST_ID: {
      const { nextTodosByListId } = action
      return {
        ...state,
        todosByListId: nextTodosByListId
      }
    }

    case SET_VISIBLE_TODOS_BY_LIST_ID: {
      const { nextVisibleTodosByListId } = action
      return {
        ...state,
        visibleTodosByListId: nextVisibleTodosByListId
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
