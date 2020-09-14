//-----------------------------------------------------------------------------
// Initial
//-----------------------------------------------------------------------------
import {
  IAllTodos,
  ITodo
} from '@/state/todo/types'

import { 
  ITodoActions,
  CLEAR_STATE,
  SET_ALL_TODOS,
  SET_TODOS_BY_LIST_ID,
  SET_VISIBLE_TODOS,
  UPDATE_TODO
} from '@/state/todo/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
export type ITodoState = {
  allTodos: IAllTodos
  todosByListId: { [listId: string]: ITodo['id'][] }
  visibleTodos: ITodo['id'][]
}

export const initialState: ITodoState = {
  allTodos: {},
  todosByListId: {},
  visibleTodos: []
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const example = (state = initialState, action: ITodoActions): ITodoState => {
	switch (action.type) {

    case CLEAR_STATE: {
      return initialState
    }

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
