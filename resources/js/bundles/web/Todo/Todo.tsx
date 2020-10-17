//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'

import TodoActions from '@web/Todo/TodoActions'
import TodoDate from '@web/Todo/TodoDate'
import TodoNotes from '@web/Todo/TodoNotes'
import TodoPriority from '@web/Todo/TodoPriority'
import TodoTags from '@web/Todo/TodoTags'
import TodoText from '@web/Todo/TodoText'
import TodoTime from '@web/Todo/TodoTime'

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
            <TodoDate
              todoId={todo.id}/>
            <TodoTime
              todoId={todo.id}/>
            <TodoPriority
              todoId={todo.id}/>
            <TodoActions
              todoId={todo.id}/>
            {false &&
              <>
                <TodoTags
                  todoId={todo.id}/>
                <TodoNotes
                  todoId={todo.id}/>
              </>
            }
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
  padding: 0.5rem 0;
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
