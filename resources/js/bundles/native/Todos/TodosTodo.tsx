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
const TodosTodo = ({
  todoId
}: ITodosTodo) => {

  // Redux
  const todo = useSelector((state: IAppState) => state.todo.allTodos[todoId])

  return (
    <Container>
      <Text>{todo.text}</Text>
    </Container>
  );
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosTodo {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  margin-bottom: 2px;
`

const Text = styled.Text`
  font-size: 20px;
`

export default TodosTodo
