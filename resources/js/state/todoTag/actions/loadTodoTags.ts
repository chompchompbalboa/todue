//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { ITodoTag } from '@/state/todoTag/types'

import { 
  setAllTodoTags,
  setTodoTagsByTodoId
} from '@/state/todoTag/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const loadTodoTags = (
  todoTags: ITodoTag[] = []
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      todoTag: {
        allTodoTags,
        todoTagsByTodoId
      }
    } = getState()

    let nextAllTodoTags = { ...allTodoTags }
    let nextTodoTagsByTodoId = { ...todoTagsByTodoId }

    todoTags.forEach((todoTag: ITodoTag) => {
      nextAllTodoTags[todoTag.id] = todoTag
      nextTodoTagsByTodoId = {
        ...nextTodoTagsByTodoId,
        [todoTag.todoId]: [
          ...(nextTodoTagsByTodoId[todoTag.todoId] || []).filter(currentTodoTagId => currentTodoTagId !== todoTag.id),
          todoTag.id
        ]
      }
    })

    dispatch(setAllTodoTags(nextAllTodoTags))
    dispatch(setTodoTagsByTodoId(nextTodoTagsByTodoId))
	}
}