//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import {
  createTodoNote
} from '@/state/todoNote/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoNotesCreateNote = ({
  todoId
}: ITodoNotesCreateNote) => {

  // Redux
  const dispatch = useDispatch()
  const listId = useSelector((state: IAppState) => state.active.listId)

  // State
  const [ textInputValue, setTextInputValue ] = useState('')

  // Handle Create Todo Note
  const handleCreateTodoNote = () => {
    if(textInputValue) {
      setTextInputValue('')
      dispatch(createTodoNote(listId, todoId, textInputValue))
    }
  }

  return (
    <Container>
      <StyledTextInput
        blurOnSubmit
        multiline
        placeholder="Press Here To Add a Note..."
        onChangeText={(nextText) => setTextInputValue(nextText)}
        onSubmitEditing={handleCreateTodoNote}
        scrollEnabled={false}
        value={textInputValue}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoNotesCreateNote {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`

const StyledTextInput = styled.TextInput`
  width: 100%;
  font-size: 20px;
  font-family: OpenSans_400Regular;
`

export default TodoNotesCreateNote
