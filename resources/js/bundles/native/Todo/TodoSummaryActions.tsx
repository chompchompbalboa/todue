//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import { ITodo } from '@/state/todo/types'

import TodoSummaryActionsAddDay from '@native/Todo/TodoSummaryActionsAddDay'
import TodoSummaryActionsBacklog from '@native/Todo/TodoSummaryActionsBacklog'
import TodoSummaryActionsNextMonday from '@native/Todo/TodoSummaryActionsNextMonday'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoSummaryActions = ({
  todoId
}: ITodoSummaryActions) => {

  return (
    <Container>
      <TodoSummaryActionsAddDay
        todoId={todoId}/>
      <TodoSummaryActionsNextMonday
        todoId={todoId}/>
      <TodoSummaryActionsBacklog
        todoId={todoId}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoSummaryActions {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  width: 100%;
  padding: 10px 5px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export default TodoSummaryActions
