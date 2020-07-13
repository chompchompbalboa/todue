//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'

import TodoDateTime from '@web/Todo/TodoDateTime'
import TodoPriority from '@web/Todo/TodoPriority'
import TodoNotes from '@web/Todo/TodoNotes'
import TodoTags from '@web/Todo/TodoTags'
import TodoText from '@web/Todo/TodoText'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Todo = () => {

  const todoId = useSelector((state: IAppState) => state.active.todoId)

  return (
      <Container>
        {todoId &&
          <TodoContainer>
            <TodoText
              todoId={todoId}/>
            <TodoDateTime
              todoId={todoId}/>
            <TodoPriority
              todoId={todoId}/>
            <TodoTags
              todoId={todoId}/>
            <TodoNotes
              todoId={todoId}/>
          </TodoContainer>
        }
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  padding-left: 0;
`

const TodoContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgb(252, 252, 252);
`

export default Todo
