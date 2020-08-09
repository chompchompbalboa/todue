//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoText = ({
  todoId
}: ITodoText) => {

  // Redux
  const todoText = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].text)

  return (
      <Container>
        {todoText}
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoText {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: sticky;
  top: 0;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: rgb(252, 252, 252);
`

export default TodoText
