//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import TodoNotesCreateNote from '@native/Todo/TodoNotesCreateNote'
import TodoNotesNote from '@native/Todo/TodoNotesNote'

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
      <TodoNotesCreateNote
        todoId={todoId}/>
      {todoNotes.map(todoNoteId => (
        <TodoNotesNote
          key={todoNoteId}
          todoNoteId={todoNoteId}/>
      ))}
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
const Container = styled.View`
  padding: 20px;
  padding-top: 0;
`

export default TodoNotes
