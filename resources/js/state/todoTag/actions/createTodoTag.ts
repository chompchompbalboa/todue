//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { v4 as createUuid } from 'uuid'

import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'
import { ITag } from '@/state/tag/types'
import { ITodoTag } from '@/state/todoTag/types'
import { ITodo } from '@/state/todo/types'

import { 
  setAllTodoTags,
  setTodoTagsByTodoId 
} from '@/state/todoTag/actions'
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
      todoTag: {
        allTodoTags,
        todoTagsByTodoId
      }
    } = getState()
    
    const newTodoTag: ITodoTag = {
      id: createUuid(),
      listId: listId,
      todoId: todoId,
      tagId: tagId
    }
    
    const nextTodoTags = [ ...(todoTagsByTodoId[todoId] || []), newTodoTag.id ]

    dispatch(setAllTodoTags({
      ...allTodoTags,
      [newTodoTag.id]: newTodoTag
    }))

    dispatch(setTodoTagsByTodoId({
      ...todoTagsByTodoId,
      [todoId]: nextTodoTags
    }))

    mutation.createTodoTag(newTodoTag)
	}
}