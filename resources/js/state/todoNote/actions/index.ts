//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { ITodoNoteState } from '@/state/todoNote/reducers'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type ITodoNoteActions = 
ISetAllTodoNotes |
ISetTodoNotesByTodoId

export { createTodoNote } from '@/state/todoNote/actions/createTodoNote'
export { deleteTodoNote } from '@/state/todoNote/actions/deleteTodoNote'
export { loadTodoNotes } from '@/state/todoNote/actions/loadTodoNotes'

//-----------------------------------------------------------------------------
// Set All Todo Notes
//-----------------------------------------------------------------------------
export const SET_ALL_TODO_NOTES = 'SET_ALL_TODO_NOTES'
interface ISetAllTodoNotes {
  type: typeof SET_ALL_TODO_NOTES
  nextAllTodoNotes: ITodoNoteState['allTodoNotes']
}

export const setAllTodoNotes = (nextAllTodoNotes: ITodoNoteState['allTodoNotes']): ITodoNoteActions => {
	return {
		type: SET_ALL_TODO_NOTES,
		nextAllTodoNotes
	}
}

//-----------------------------------------------------------------------------
// Set Todo Notes By Todo Id
//-----------------------------------------------------------------------------
export const SET_TODO_NOTES_BY_TODO_ID = 'SET_TODO_NOTES_BY_TODO_ID'
interface ISetTodoNotesByTodoId {
  type: typeof SET_TODO_NOTES_BY_TODO_ID
  nextTodoNotesByTodoId: ITodoNoteState['todoNotesByTodoId']
}

export const setTodoNotesByTodoId = (nextTodoNotesByTodoId: ITodoNoteState['todoNotesByTodoId']): ITodoNoteActions => {
	return {
		type: SET_TODO_NOTES_BY_TODO_ID,
		nextTodoNotesByTodoId
	}
}