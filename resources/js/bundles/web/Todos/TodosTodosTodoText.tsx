//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateActiveTodoId } from '@/state/active/actions'
import { 
  createTodo,
  deleteTodo,
  updateTodo 
} from '@/state/todo/actions'

import ReactTextareaAutosize from 'react-autosize-textarea'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosTodosTodoCheckbox = ({
  todoId
}: ITodosTodosTodoCheckbox) => {

  // Redux
  const dispatch = useDispatch()
  const todoListId = useSelector((state: IAppState) => state.todo.allTodos[todoId].listId)
  const todoText = useSelector((state: IAppState) => state.todo.allTodos[todoId].text)

  // State
  const [ localTodoText, setLocalTodoText ] = useState(todoText)

  // Update text as needed
  useEffect(() => {
    if(todoText !== localTodoText) {
      setLocalTodoText(todoText)
    }
  }, [ todoText ])

  // Complete Editing
  const completeEditing = () => {
    if([ null, '' ].includes(localTodoText)) {
      dispatch(deleteTodo(todoId))
    }
    else {
      if(todoText !== localTodoText) {
        dispatch(updateTodo(todoId, { text: localTodoText }, { text: todoText }))
      }
    }
  }

  // Handle Key Down
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if(e.key === 'Enter' && localTodoText && localTodoText.length > 0) {
      e.preventDefault()
      completeEditing()
      dispatch(createTodo(todoListId, todoId))
    }
    if([ 'Backspace', 'Delete' ].includes(e.key) && !localTodoText) {
      dispatch(deleteTodo(todoId))
    }
  }

  return (
    <StyledTextarea
      async // Required for styled-components
      autoFocus={todoText === null}
      value={localTodoText || ''}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setLocalTodoText(e.target.value)}
      onKeyDown={handleKeyDown}
      onBlur={completeEditing}
      onFocus={() => dispatch(updateActiveTodoId(todoId))}
      spellCheck={false}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosTodosTodoCheckbox {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledTextarea = styled(ReactTextareaAutosize)`
  width: 100%;
  padding-right: 0.5rem;
  font-size: 0.95rem;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
`

export default TodosTodosTodoCheckbox
