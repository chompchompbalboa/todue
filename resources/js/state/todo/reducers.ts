//-----------------------------------------------------------------------------
// Initial
//-----------------------------------------------------------------------------
import defaultInitialData from '@/state/initialData'
import {
  IAllTodos,
  ITodo
} from '@/state/todo/types'

import { 
  ITodoActions,
  SET_ALL_TODOS,
  SET_TODOS,
  UPDATE_TODO
} from '@/state/todo/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
const initialListData = typeof initialData !== 'undefined' ? initialData.lists : defaultInitialData.lists
const getInitialState = () => {
  let allTodos: ITodoState['allTodos'] = {}
  let todos: ITodoState['todos'] = []
  initialListData[0] && initialListData[0].todos.forEach((todo: ITodo) => {
    allTodos[todo.id] = todo
    todos.push(todo.id)
  })
  return { allTodos, todos }
}
const { allTodos, todos } = getInitialState()

export type ITodoState = {
  allTodos: IAllTodos,
  todos: ITodo['id'][]
}

export const initialDraftState: ITodoState = {
  allTodos: allTodos,
  todos: todos
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
