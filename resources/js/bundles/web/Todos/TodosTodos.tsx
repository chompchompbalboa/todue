//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'

import { refreshVisibleTodos } from '@/state/todo/actions'

import TodosTodosCreateTodo from '@web/Todos/TodosTodosCreateTodo'
import TodosTodosDate from '@web/Todos/TodosTodosDate'
import TodosTodosHeader from '@web/Todos/TodosTodosHeader'
import TodosTodosTodo from '@web/Todos/TodosTodosTodo'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosTodos = ({
  listId,
  sublistId
}: ITodosTodos) => {

  // Redux
  const dispatch = useDispatch()
  const visibleTodos = useSelector((state: IAppState) => state.todo.visibleTodos)

  // Update the visible todos as needed
  useEffect(() => {
    dispatch(refreshVisibleTodos())
  }, [ listId, sublistId ])

  return (
      <Container>
        {visibleTodos && visibleTodos.map(todoId => {
          if(todoId === 'BACKLOG') {
            return (
              <TodosTodosHeader
                key="BACKLOG"
                text="Backlog"/>
            )
          }
          else if(todoId.length === 10) {
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
  sublistId: ISublist['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: relative;
  padding-left: 1rem;
`

export default TodosTodos
