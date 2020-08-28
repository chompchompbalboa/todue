//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'

import { ITodo } from '@/state/todo/types'

import { Ionicons } from '@expo/vector-icons'

import { updateActiveTodoId } from '@/state/active/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodosTodoOpenTodoButton = ({ 
  todoId,
  setIsTodoVisible
}: IProps) => {

  // Redux
  const dispatch = useDispatch()

  return (
    <OpenTodoTouchable
      onPress={() => {
        dispatch(updateActiveTodoId(todoId))
        setIsTodoVisible(true)
      }}>
      <OpenTodo
        hitSlop={{top: 10, bottom: 10, left: 10, right: 20}}>
        <IconContainer>
          <Ionicons 
            name="ios-more" 
            size={24} 
            color="rgb(150, 150, 150)" />
        </IconContainer>
      </OpenTodo>
    </OpenTodoTouchable>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IProps {
  todoId: ITodo['id']
  setIsTodoVisible(nextIsTodoVisible: boolean): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const OpenTodoTouchable = styled.TouchableWithoutFeedback``
const OpenTodo = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-left: 10px;
`

const IconContainer = styled.View`
`

export default TodosTodoOpenTodoButton
