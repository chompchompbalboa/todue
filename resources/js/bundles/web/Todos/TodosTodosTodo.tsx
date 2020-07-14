//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import TodosTodosTodoCheckbox from '@web/Todos/TodosTodosTodoCheckbox'
import TodosTodosTodoPriority from '@web/Todos/TodosTodosTodoPriority'
import TodosTodosTodoTime from '@web/Todos/TodosTodosTodoTime'
import TodosTodosTodoText from '@web/Todos/TodosTodosTodoText'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosTodosTodo = ({
  todoId
}: ITodosTodosTodo) => {

  // Redux
  const isActiveTodo = useSelector((state: IAppState) => state.active.todoId === todoId)

  return (
      <Container
        isActiveTodo={isActiveTodo}>
        <TodosTodosTodoCheckbox
          todoId={todoId}/>
        <TodosTodosTodoPriority
          todoId={todoId}/>
        <TodosTodosTodoTime
          todoId={todoId}/>
        <TodosTodosTodoText
          todoId={todoId}/>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosTodosTodo {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0.125rem 0 0.125rem -0.25rem;
  padding: 0.25rem;
  padding-right: 0;
  padding-left: 0.5rem;
  background-color: ${ ({ isActiveTodo }: IContainer ) => isActiveTodo ? 'rgb(252, 252, 252)' : 'transparent' };
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
interface IContainer {
  isActiveTodo: boolean
}

export default TodosTodosTodo
