//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import defaultInitialData from '@/state/initialData'
import { 
  IAllTodoTags,
  ITodoTag
} from '@/state/todoTag/types'

import { 
  ITodoTagActions,
  SET_ALL_TODO_TAGS,
  SET_TODO_TAGS_BY_TODO_ID
} from '@/state/todoTag/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
const initialTodoTagData = typeof initialData !== 'undefined' ? initialData.todoTags : defaultInitialData.todoTags
const getInitialState = () => {
  let allTodoTags: ITodoTagState['allTodoTags'] = {}
  let todoTagsByTodoId: ITodoTagState['todoTagsByTodoId'] = {}
  initialTodoTagData && initialTodoTagData.forEach((todoTag: ITodoTag) => {
    allTodoTags[todoTag.id] = todoTag
    todoTagsByTodoId = {
      ...todoTagsByTodoId,
      [todoTag.todoId]: [ ...todoTagsByTodoId[todoTag.todoId] || [], todoTag.id ]
    }
  })
  return { allTodoTags, todoTagsByTodoId }
}
const { allTodoTags, todoTagsByTodoId } = getInitialState()

export type ITodoTagState = {
  allTodoTags: IAllTodoTags
  todoTagsByTodoId: { [todoId: string]: ITodoTag['id'][] }
}

export const initialState: ITodoTagState = {
  allTodoTags: allTodoTags,
  todoTagsByTodoId: todoTagsByTodoId
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const tag = (state = initialState, action: ITodoTagActions): ITodoTagState => {
	switch (action.type) {

    case SET_ALL_TODO_TAGS: {
      const { nextAllTodoTags } = action
      return {
        ...state,
        allTodoTags: nextAllTodoTags
      }
    }

    case SET_TODO_TAGS_BY_TODO_ID: {
      const { nextTodoTagsByTodoId } = action
      return {
        ...state,
        todoTagsByTodoId: nextTodoTagsByTodoId
      }
    }

		default:
			return state
	}
}

export default tag
