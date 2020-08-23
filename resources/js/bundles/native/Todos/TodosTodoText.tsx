//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { 
  createTodo, 
  deleteTodo,
  updateTodo 
} from '@/state/todo/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodosTodoText = ({ 
  todoId
}: IProps) => {

  // Redux
  const dispatch = useDispatch()
  const todoListId = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.listId)
  const todoText = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.text)
  const todoDateCompleted = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.dateCompleted)

  // State
  const [ textInputValue, setTextInputValue ] = useState(todoText as string | null)

  // Update textInputValue as needed
  useEffect(() => {
    setTextInputValue(todoText)
  }, [ todoText ])

  const isTodoCompleted = todoDateCompleted !== null

  return (
    <TextInput
      autoFocus={textInputValue === null}
      blurOnSubmit
      editable={!isTodoCompleted}
      isTodoCompleted={isTodoCompleted}
      multiline
      onBlur={() => {
        if(textInputValue) {
          dispatch(updateTodo(todoId, { text: textInputValue }))
        }
        else {
          dispatch(deleteTodo(todoId))
        }
      }}
      onChangeText={(nextValue: string) => setTextInputValue(nextValue)}
      onKeyPress={(e: any) => {
        if([null, ''].includes(textInputValue) && e.nativeEvent.key === 'Backspace') {
          dispatch(deleteTodo(todoId))
        }
      }}
      onSubmitEditing={() => {
        if(textInputValue) {
          dispatch(createTodo(todoListId, todoId))
          setTimeout(() => {
            dispatch(updateTodo(todoId, { text: textInputValue }))
          }, 100)
        }
        else {
          dispatch(deleteTodo(todoId))
        }
      }}
      scrollEnabled={false}
      value={textInputValue}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IProps {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const TextInput = styled.TextInput`
  flex: 1;
  padding-top: 0;
  font-size: 20px;
  font-family: OpenSans_400Regular;
  color: ${({ isTodoCompleted }: ITextInput) => isTodoCompleted ? 'rgb(150, 150, 150)' : 'rgb(0, 0, 0)'};
`
interface ITextInput {
  isTodoCompleted: boolean
}

export default TodosTodoText
