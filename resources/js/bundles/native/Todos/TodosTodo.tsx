//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import { ITodo } from '@/state/todo/types'

import TodosTodoCompleted from '@native/Todos/TodosTodoCompleted'
import TodosTodoText from '@native/Todos/TodosTodoText'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodosTodo = ({
  todoId
}: ITodosTodo) => {
  return (
    <Container>
      <TodosTodoCompleted
        todoId={todoId}/>
      <TodosTodoText
        todoId={todoId}/>
    </Container>
  )
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
  margin-bottom: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export default TodosTodo
