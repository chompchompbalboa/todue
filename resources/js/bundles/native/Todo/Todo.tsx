//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'

import TodoText from '@native/Todo/TodoText'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Todo = ({
  setIsTodoVisible
}: ITodoComponent) => {

  // Redux
  const activeTodoId = useSelector((state: IAppState) => state.active.todoId)

  return (
    <Container>
      <CloseTodoTouchable
        onPress={() => setIsTodoVisible(false)}>
        <CloseTodo />
      </CloseTodoTouchable>
      <TodoDetails>
        <TodoText
          todoId={activeTodoId}/>
      </TodoDetails>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoComponent {
  setIsTodoVisible(nextIsTodoVisible: boolean): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
`

const CloseTodoTouchable = styled.TouchableWithoutFeedback``
const CloseTodo = styled.View`
  height: 25%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`

const TodoDetails = styled.View`
  height: 75%;
  width: 100%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export default Todo
