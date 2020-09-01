//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { deleteTodoNote } from '@/state/todoNote/actions'

import { AntDesign } from '@expo/vector-icons'

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
      <DeleteButtonTouchable
        hitSlop={{top: 10, bottom: 10, left: 10, right: 20}}
        onPress={() => dispatch(deleteTodoNote(todoNoteId))}>
        <DeleteButton>
          <AntDesign name="delete" size={18} color="black" />
        </DeleteButton>
      </DeleteButtonTouchable>
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
const Container = styled.View`
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Note = styled.View`
  width: 90%;
`

const NoteValue = styled.Text`
  font-size: 20px;
  font-family: OpenSans_400Regular;
`

const NoteCreatedAt = styled.Text`
  font-size: 16px;
  font-family: OpenSans_400Regular_Italic;
  font-style: italic;
`

const DeleteButtonTouchable = styled.TouchableWithoutFeedback``
const DeleteButton = styled.View`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(150, 150, 150);
`

export default TodoNotesNote
