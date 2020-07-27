//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { ITodoTag } from '@/state/todoTag/types'

import { setTodoTagsByTodoId } from '@/state/todoTag/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const deleteTodoTag = (
  todoTagId: ITodoTag['id']
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      todoTag: {
        allTodoTags,
        todoTagsByTodoId
      }
    } = getState()

    const todoId = allTodoTags[todoTagId].todoId 
    
    dispatch(setTodoTagsByTodoId({
      ...todoTagsByTodoId,
      [todoId]: todoTagsByTodoId[todoId].filter(currentTodoTagId => currentTodoTagId !== todoTagId)
    }))

    mutation.deleteTodoTag(todoTagId)
	}
}