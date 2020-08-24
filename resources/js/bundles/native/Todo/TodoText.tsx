//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoText = ({
  todoId
}: ITodoComponent) => {

  // Redux
  const todoText = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.text)

  return (
    <Container>
      <Text>{todoText}</Text>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoComponent {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
`

const Text = styled.Text``

export default TodoText
