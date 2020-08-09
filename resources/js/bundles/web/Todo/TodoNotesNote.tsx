//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { TRASH_CAN } from '@/assets/icons'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import {
  deleteTodoNote
} from '@/state/todoNote/actions'

import Icon from '@/components/Icon'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoNotesNote = ({
  todoNoteId
}: ITodoNotesNote) => {

  // Redux
  const dispatch = useDispatch()
  const todoNoteCreatedAt = useSelector((state: IAppState) => state.todoNote.allTodoNotes[todoNoteId].createdAt)
  const todoNoteValue = useSelector((state: IAppState) => state.todoNote.allTodoNotes[todoNoteId].value)

  return (
    <Container>
      <Note>
        <NoteValue>
          {todoNoteValue}
        </NoteValue>
        <NoteCreatedAt>
          {moment(todoNoteCreatedAt).format('MMMM Do, YYYY / h:mm a')}
        </NoteCreatedAt>
      </Note>
      <DeleteButtonContainer>
        <DeleteButton
          onClick={() => dispatch(deleteTodoNote(todoNoteId))}>
          <Icon
            icon={TRASH_CAN}/>
        </DeleteButton>
      </DeleteButtonContainer>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoNotesNote {
  todoNoteId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;
  margin-bottom: 0.75rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Note = styled.div`
`

const NoteValue = styled.div``

const NoteCreatedAt = styled.div`
  font-size: 0.85rem;
  font-style: italic;
`

const DeleteButtonContainer = styled.div`
  padding-left: 0.25rem;
`

const DeleteButton = styled.div`
  cursor: pointer;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: rgb(150, 150, 150);
  &:hover {
    background-color: rgb(180, 0, 0);
    color: white;
  }
`

export default TodoNotesNote
