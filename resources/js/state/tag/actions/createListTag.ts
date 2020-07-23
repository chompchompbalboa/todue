//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { v4 as createUuid } from 'uuid'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'
import { ITag, ITodoTag } from '@/state/tag/types'
import { ITodo } from '@/state/todo/types'

import { 
  setAllTags,
  setTagsByListId
} from '@/state/tag/actions'
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
      tag: {
        allTags,
        tagsByListId
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
    
    dispatch(setAllTags({
      ...allTags,
      [newTag.id]: newTag
    }))
    
    dispatch(setTagsByListId({
      ...tagsByListId,
      [listId]: [
        ...(tagsByListId[listId] || []),
       newTag.id 
      ]
    }))
    dispatch(updateTodoReducer(todoId, { tags: nextTodoTags }))

    mutation.createListTag(newTag).then(() => mutation.createTodoTag(newTodoTag))
	}
}