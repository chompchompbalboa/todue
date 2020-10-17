//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import {
  createTodoNote
} from '@/state/todoNote/actions'

import ReactAutosizeTextarea from 'react-autosize-textarea'

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
  const [ textareaValue, setTextareaValue ] = useState('')

  // Handle Create Todo Note
  const handleCreateTodoNote = () => {
    if(textareaValue) {
      setTextareaValue('')
      dispatch(createTodoNote(listId, todoId, textareaValue))
    }
  }

  // Handle Textarea Key Press
  const handleTextareaKeyPress = (e: KeyboardEvent) => {
    if(e.key === 'Enter') {
      e.preventDefault()
      handleCreateTodoNote()
    }
  }

  return (
    <Container>
      <StyledTextarea
        placeholder="Add a Note..."
        value={textareaValue}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(e.target.value)}
        onKeyPress={handleTextareaKeyPress}/>
      <SubmitButton
        onClick={handleCreateTodoNote}>
        +
      </SubmitButton>
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
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
  background-color: rgb(245, 245, 249);
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid rgb(230, 230, 235);
`

const StyledTextarea = styled(ReactAutosizeTextarea)`
  width: 100%;
  font-size: 0.9rem;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
`

const SubmitButton = styled.div`
  margin-left: 0.25rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  white-space: nowrap;
  color: rgb(150, 150, 150);
  font-size: 0.95rem;
  &:hover {
    background-color: rgb(80, 190, 110);
    color: white;
  }
`

export default TodoNotesCreateNote
