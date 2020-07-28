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

  // Redux
  const todo = useSelector((state: IAppState) => state.todo.allTodos[state.active.todoId])

  return (
      <Container>
        {todo &&
          <TodoContainer>
            <TodoText
              todoId={todo.id}/>
            <TodoDateTime
              todoId={todo.id}/>
            <TodoPriority
              todoId={todo.id}/>
            <TodoTags
              todoId={todo.id}/>
            <TodoNotes
              todoId={todo.id}/>
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
