//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { v4 as createUuid } from 'uuid'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'
import { ITag, ITodoTag } from '@/state/tag/types'
import { ITodo } from '@/state/todo/types'

import { updateTodoReducer } from '@/state/todo/actions'
import { mutation } from '@/api'
//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const createTodoTag = (
  listId: IList['id'],
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
    
    const newTodoTag: ITodoTag = {
      id: createUuid(),
      listId: listId,
      todoId: todoId,
      tagId: tagId
    }
    
    const nextTodoTags = [ ...todoTags, tagId ]

    dispatch(updateTodoReducer(todoId, { tags: nextTodoTags }))

    mutation.createTodoTag(newTodoTag)
	}
}