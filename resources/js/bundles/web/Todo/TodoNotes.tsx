//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

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
      <Container>
        {todoNotes.map(todoNoteId => (
          <TodoNotesNote
            key={todoNoteId}
            todoNoteId={todoNoteId}/>
        ))}
        <TodoNotesCreateNote
          todoId={todoId}/>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoNotes {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: 0.5rem 1rem;
`

export default TodoNotes
