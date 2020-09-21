//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { ITodo } from '@/state/todo/types'

import { 
  setAllTodos,
  setTodosByListId
} from '@/state/todo/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const loadTodos = (
  todos: ITodo[] = []
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      todo: {
        allTodos,
        todosByListId
      }
    } = getState()

    let nextAllTodos = { ...allTodos }
    let nextTodosByListId = { ...todosByListId }

    todos.forEach((todo: ITodo) => {
      nextAllTodos[todo.id] = todo
      nextTodosByListId = {
        ...nextTodosByListId,
        [todo.listId]: [
          ...(nextTodosByListId[todo.listId] || []).filter(currentTodoId => currentTodoId !== todo.id),
          todo.id
        ]
      }
    })

    dispatch(setAllTodos(nextAllTodos))
    dispatch(setTodosByListId(nextTodosByListId))
	}
}