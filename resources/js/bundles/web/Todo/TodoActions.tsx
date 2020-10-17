//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import { ITodo } from '@/state/todo/types'

import TodoActionsToday from '@web/Todo/TodoActionsToday'
import TodoActionsTomorrow from '@web/Todo/TodoActionsTomorrow'
import TodoActionsNextWeek from '@web/Todo/TodoActionsNextWeek'
import TodoActionsNextMonday from '@web/Todo/TodoActionsNextMonday'
import TodoActionsBacklog from '@web/Todo/TodoActionsBacklog'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoActions = ({
  todoId
}: ITodoActions) => {

  return (
      <Container>
        <Actions>
          <TodoActionsToday
            todoId={todoId}/>
          <TodoActionsTomorrow
            todoId={todoId}/>
          <TodoActionsNextMonday
            todoId={todoId}/>
          <TodoActionsNextWeek
            todoId={todoId}/>
          <TodoActionsBacklog
            todoId={todoId}/>
        </Actions>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoActions {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: 0.5rem 1rem;
`

const Actions = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(230, 230, 235);
  border-radius: 5px;
`

export default TodoActions
