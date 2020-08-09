//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import TodoSection from '@web/Todo/TodoSection'
import TodoNotesCreateNote from '@web/Todo/TodoNotesCreateNote'
import TodoNotesNote from '@web/Todo/TodoNotesNote'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoNotes = ({
  todoId
}: ITodoNotes) => {

  // Redux
  const todoNotes = useSelector((state: IAppState) => state.todoNote.todoNotesByTodoId[todoId] || [])

  return (
      <TodoSection
        alignItems="flex-start"
        flexDirection="column"
        header="Notes"
        headerMarginBottom="0">
        <TodoNotesCreateNote
          todoId={todoId}/>
        {todoNotes.map(todoNoteId => (
          <TodoNotesNote
            key={todoNoteId}
            todoNoteId={todoNoteId}/>
        ))}
      </TodoSection>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoNotes {
  todoId: ITodo['id']
}

export default TodoNotes
