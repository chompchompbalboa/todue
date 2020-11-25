//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'

import { loadList } from '@/state/list/actions'
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
  const isAllTodosActiveList = listId === 'ALL_TODOS'
  const isListLoaded = useSelector((state: IAppState) => state.list.loadedLists.has(listId))
  const visibleTodos = useSelector((state: IAppState) => state.todo.visibleTodos)

  // Load a list's todos as needed
  useEffect(() => {
    if(!isListLoaded && !isAllTodosActiveList) {
      dispatch(loadList(listId))
    }
  }, [ isAllTodosActiveList, isListLoaded ])

  // Update the visible todos as needed
  useEffect(() => {
    dispatch(refreshVisibleTodos())
  }, [ listId, sublistId, isListLoaded ])

  if(isListLoaded || isAllTodosActiveList) {
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
  return (
    <Container>
      Loading...
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
