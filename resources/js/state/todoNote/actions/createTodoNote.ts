//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import moment from 'moment'
import { v4 as createUuid } from 'uuid'

import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'
import { ITodoNote } from '@/state/todoNote/types'
import { ITodo } from '@/state/todo/types'

import { 
  setAllTodoNotes,
  setTodoNotesByTodoId 
} from '@/state/todoNote/actions'
//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const createTodoNote = (
  listId: IList['id'],
  todoId: ITodo['id'],
  value: string
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      todoNote: {
        allTodoNotes,
        todoNotesByTodoId
      }
    } = getState()
    
    const newTodoNote: ITodoNote = {
      id: createUuid(),
      listId: listId,
      todoId: todoId,
      value: value,
      createdAt: moment().format()
    }
    
    const nextTodoNotes = [ ...(todoNotesByTodoId[todoId] || []), newTodoNote.id ]

    dispatch(setAllTodoNotes({
      ...allTodoNotes,
      [newTodoNote.id]: newTodoNote
    }))

    dispatch(setTodoNotesByTodoId({
      ...todoNotesByTodoId,
      [todoId]: nextTodoNotes
    }))

    mutation.createTodoNote(newTodoNote)
	}
}