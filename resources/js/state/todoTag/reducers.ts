//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
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
export type ITodoTagState = {
  allTodoTags: IAllTodoTags
  todoTagsByTodoId: { [todoId: string]: ITodoTag['id'][] }
}

export const initialState: ITodoTagState = {
  allTodoTags: {},
  todoTagsByTodoId: {}
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
