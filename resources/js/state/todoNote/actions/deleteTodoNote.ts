//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { ITodoNote } from '@/state/todoNote/types'

import { createHistoryStep } from '@/state/history/actions'
import { setTodoNotesByTodoId } from '@/state/todoNote/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const deleteTodoNote = (
  todoNoteId: ITodoNote['id']
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    
    const {
      todoNote: {
        allTodoNotes,
        todoNotesByTodoId
      }
    } = getState()

    const todoId = allTodoNotes[todoNoteId].todoId 

    const actions =  () => {
      dispatch(setTodoNotesByTodoId({
        ...todoNotesByTodoId,
        [todoId]: todoNotesByTodoId[todoId].filter(currentTodoNoteId => currentTodoNoteId !== todoNoteId)
      }))
      mutation.deleteTodoNote(todoNoteId)
    }

    const undoActions = () => {
      dispatch(setTodoNotesByTodoId(todoNotesByTodoId))
      mutation.restoreTodoNote(todoNoteId)
    }

    dispatch(createHistoryStep({ actions, undoActions }))

    actions()
	}
}