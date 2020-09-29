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
  background-color: white;
  padding: 18px;
  padding-bottom: 10px;
`

const Text = styled.Text`
  font-size: 22px;
  font-family: OpenSans_700Bold;
`

export default TodoText
