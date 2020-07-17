//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { ITag } from '@/state/tag/types'
import { ITodo } from '@/state/todo/types'

import { updateTodoReducer } from '@/state/todo/actions'
import { mutation } from '@/api'
//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const deleteTodoTag = (
  todoId: ITodo['id'],
  tagId: ITag['id']
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      todo: {
        allTodos: {
          [todoId]: {
            tags: todoTags
          }
        }
      }
    } = getState()
    
    const nextTodoTags = todoTags.filter(currentTagId => currentTagId !== tagId)

    dispatch(updateTodoReducer(todoId, { tags: nextTodoTags }))

    mutation.deleteTodoTag(todoId, tagId)
	}
}