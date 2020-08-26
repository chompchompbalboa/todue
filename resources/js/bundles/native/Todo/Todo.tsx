//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'

import TodoBacklog from '@native/Todo/TodoBacklog'
import TodoDate from '@native/Todo/TodoDate'
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
    <Container
      transparent
      animationType="slide">
      <CloseTodoTouchable
        onPress={() => setIsTodoVisible(false)}>
        <CloseTodo />
      </CloseTodoTouchable>
      <TodoDetails>
        <TodoText
          todoId={activeTodoId}/>
        <TodoDate
          todoId={activeTodoId}/>
        <TodoBacklog
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
const Container = styled.Modal`
  height: 100%;
  width: 100%;
`

const CloseTodoTouchable = styled.TouchableWithoutFeedback``
const CloseTodo = styled.View`
  height: 25%;
  width: 100%;
`

const TodoDetails = styled.View`
  height: 75%;
  width: 100%;
  padding: 15px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-width: 1px;
  border-color: rgb(200, 200, 200);
`

export default Todo
