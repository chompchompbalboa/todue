//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { v4 as createUuid } from 'uuid'

import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'
import { ITag } from '@/state/tag/types'
import { ITodo } from '@/state/todo/types'
import { ITodoTag } from '@/state/todoTag/types'

import { 
  setAllTags,
  setTagsByListId
} from '@/state/tag/actions'
import {
  setAllTodoTags,
  setTodoTagsByTodoId
} from '@/state/todoTag/actions'

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
      todoTag: {
        allTodoTags,
        todoTagsByTodoId
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
    
    dispatch(setAllTags({
      ...allTags,
      [newTag.id]: newTag
    }))
    
    dispatch(setAllTodoTags({
      ...allTodoTags,
      [newTodoTag.id]: newTodoTag
    }))
    
    dispatch(setTagsByListId({
      ...tagsByListId,
      [listId]: [
        ...(tagsByListId[listId] || []),
       newTag.id 
      ]
    }))
    
    dispatch(setTodoTagsByTodoId({
      ...todoTagsByTodoId,
      [todoId]: [ 
        ...(todoTagsByTodoId[todoId] || []),
        newTodoTag.id 
      ]
    }))

    mutation.createListTag(newTag).then(() => mutation.createTodoTag(newTodoTag))
	}
}