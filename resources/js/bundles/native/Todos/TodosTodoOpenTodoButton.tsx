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
    <Container>
      <OpenTodoTouchable
        onPress={() => {
          dispatch(updateActiveTodoId(todoId))
          setIsTodoVisible(true)
        }}>
        <OpenTodo>
          <IconContainer>
            <Ionicons 
              name="ios-more" 
              size={24} 
              color="rgb(150, 150, 150)" />
          </IconContainer>
        </OpenTodo>
      </OpenTodoTouchable>
    </Container>
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
const Container = styled.View``

const OpenTodoTouchable = styled.TouchableWithoutFeedback``
const OpenTodo = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const IconContainer = styled.View`
  margin-left: 10px;
`

export default TodosTodoOpenTodoButton
