//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'

import TodoDetails from '@web/Todo/TodoDetails'
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
            <TodoDetails
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
  position: sticky;
  top: 0;
  width: 100%;
  height: 100%;
`

const TodoContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  overflow-y: scroll;
	scrollbar-width: none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
`

export default Todo
