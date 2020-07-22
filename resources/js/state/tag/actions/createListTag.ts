//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { v4 as createUuid } from 'uuid'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'
import { ITag, ITodoTag } from '@/state/tag/types'
import { ITodo } from '@/state/todo/types'

import { updateListReducer } from '@/state/list/actions'
import { setAllTags } from '@/state/tag/actions'
import { updateTodoReducer } from '@/state/todo/actions'
import { mutation } from '@/api'
//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const createListTag = (
  listId: IList['id'],
  todoId: ITodo['id'],
  text: string,
  backgroundColor: string
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      list: {
        allLists: {
          [listId]: {
            tags: listTags
          }
        }
      },
      tag: {
        allTags
      },
      todo: {
        allTodos: {
          [todoId]: {
            tags: todoTags
          }
        }
      }
    } = getState()
    
    const newTag: ITag = {
      id: createUuid(),
      listId: listId,
      text: text,
      backgroundColor: backgroundColor
    }
    const newTodoTag: ITodoTag = {
      id: createUuid(),
      listId: listId,
      todoId: todoId,
      tagId: newTag.id
    }
    
    const nextTodoTags = [ ...todoTags, newTag.id ]
    const nextListTags = [ ...listTags, newTag.id ]
    
    dispatch(setAllTags({
      ...allTags,
      [newTag.id]: newTag
    }))
    dispatch(updateTodoReducer(todoId, { tags: nextTodoTags }))
    dispatch(updateListReducer(listId, { tags: nextListTags }))

    mutation.createListTag(newTag).then(() => mutation.createTodoTag(newTodoTag))
	}
}