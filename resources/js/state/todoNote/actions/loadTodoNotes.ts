//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { ITodoNote } from '@/state/todoNote/types'

import { 
  setAllTodoNotes,
  setTodoNotesByTodoId
} from '@/state/todoNote/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const loadTodoNotes = (
  todoNotes: ITodoNote[] = []
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      todoNote: {
        allTodoNotes,
        todoNotesByTodoId
      }
    } = getState()

    let nextAllTodoNotes = { ...allTodoNotes }
    let nextTodoNotesByTodoId = { ...todoNotesByTodoId }

    todoNotes.forEach((todoNote: ITodoNote) => {
      nextAllTodoNotes[todoNote.id] = todoNote
      nextTodoNotesByTodoId = {
        ...nextTodoNotesByTodoId,
        [todoNote.todoId]: [
          ...(nextTodoNotesByTodoId[todoNote.todoId] || []),
          todoNote.id
        ]
      }
    })

    dispatch(setAllTodoNotes(nextAllTodoNotes))
    dispatch(setTodoNotesByTodoId(nextTodoNotesByTodoId))
	}
}