//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import { ITodo } from '@/state/todo/types'

import TodoBacklog from '@web/Todo/TodoBacklog'
import TodoDate from '@web/Todo/TodoDate'
import TodoPriority from '@web/Todo/TodoPriority'
import TodoSection from '@web/Todo/TodoSection'
import TodoTime from '@web/Todo/TodoTime'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoDetails = ({
  todoId
}: ITodoDetails) => {
  return (
    <TodoSection
      justifyContent="space-around"
      header="">
      <TodoDate
        todoId={todoId}/>
      <RightColumn>
        <TodoBacklog
          todoId={todoId}/>
        <TodoPriority
          todoId={todoId}/>
        <TodoTime
          todoId={todoId}/>
      </RightColumn>
    </TodoSection>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoDetails {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default TodoDetails
