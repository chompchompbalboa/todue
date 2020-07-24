//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'

import TodosTodosCreateTodo from '@web/Todos/TodosTodosCreateTodo'
import TodosTodosDate from '@web/Todos/TodosTodosDate'
import TodosTodosTodo from '@web/Todos/TodosTodosTodo'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosTodos = ({
  listId
}: ITodosTodos) => {

  // Redux
  const visibleTodos = useSelector((state: IAppState) => state.todo.visibleTodosByListId[listId])

  return (
      <Container>
        {visibleTodos && visibleTodos.map(todoId => {
          if(todoId.length === 10) {
            return (
              <TodosTodosDate 
                key={todoId}
                dateString={todoId}/>
            )
          }
          else {
            return (
              <TodosTodosTodo 
                key={todoId}
                todoId={todoId}/>
            )
          }
        })}
        <TodosTodosCreateTodo
          listId={listId}/>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosTodos {
  listId: IList['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;
  padding-left: 1rem;
`

export default TodosTodos
