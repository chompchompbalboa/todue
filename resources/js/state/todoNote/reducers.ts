//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import defaultInitialData from '@/state/initialData'
import { 
  IAllTodoNotes,
  ITodoNote
} from '@/state/todoNote/types'

import { 
  ITodoNoteActions,
  SET_ALL_TODO_NOTES,
  SET_TODO_NOTES_BY_TODO_ID
} from '@/state/todoNote/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
const initialTodoNoteData = typeof initialData !== 'undefined' ? initialData.todoNotes : defaultInitialData.todoNotes
const getInitialState = () => {
  let allTodoNotes: ITodoNoteState['allTodoNotes'] = {}
  let todoNotesByTodoId: ITodoNoteState['todoNotesByTodoId'] = {}
  initialTodoNoteData && initialTodoNoteData.forEach((todoNote: ITodoNote) => {
    allTodoNotes[todoNote.id] = todoNote
    todoNotesByTodoId = {
      ...todoNotesByTodoId,
      [todoNote.todoId]: [ ...todoNotesByTodoId[todoNote.todoId] || [], todoNote.id ]
    }
  })
  return { allTodoNotes, todoNotesByTodoId }
}
const { allTodoNotes, todoNotesByTodoId } = getInitialState()

export type ITodoNoteState = {
  allTodoNotes: IAllTodoNotes
  todoNotesByTodoId: { [todoId: string]: ITodoNote['id'][] }
}

export const initialState: ITodoNoteState = {
  allTodoNotes: allTodoNotes,
  todoNotesByTodoId: todoNotesByTodoId
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const todoNote = (state = initialState, action: ITodoNoteActions): ITodoNoteState => {
	switch (action.type) {

    case SET_ALL_TODO_NOTES: {
      const { nextAllTodoNotes } = action
      return {
        ...state,
        allTodoNotes: nextAllTodoNotes
      }
    }

    case SET_TODO_NOTES_BY_TODO_ID: {
      const { nextTodoNotesByTodoId } = action
      return {
        ...state,
        todoNotesByTodoId: nextTodoNotesByTodoId
      }
    }

		default:
			return state
	}
}

export default todoNote
