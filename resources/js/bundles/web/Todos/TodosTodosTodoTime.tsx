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
export const TodosTodosTodoTime = ({
  todoId
}: ITodosTodosTodoTime) => {

  // Redux
  const todoTimeStart = useSelector((state: IAppState) => state.todo.allTodos[todoId].timeStart)
  const todoTimeEnd = useSelector((state: IAppState) => state.todo.allTodos[todoId].timeEnd)

  if(todoTimeStart) {
    return (
      <Container>
        ({todoTimeStart}{todoTimeEnd ? ' - ' + todoTimeEnd + ')' : ')'}
      </Container>
    )
  }
  return null
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosTodosTodoTime {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  white-space: nowrap;
  margin-right: 0.375rem;
  font-size: 0.925rem;
  font-weight: bold;
`

export default TodosTodosTodoTime
