//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'

import { refreshVisibleTodos } from '@/state/todo/actions'

import TodosDate from '@native/Todos/TodosDate'
import TodosHeader from '@native/Todos/TodosHeader'
import TodosTodo from '@native/Todos/TodosTodo'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Todos = () => {

  // Redux
  const dispatch = useDispatch()
  const activeListId = useSelector((state: IAppState) => state.active.listId)
  const activeSublistId = useSelector((state: IAppState) => state.active.sublistId)
  const isActiveListLoaded = useSelector((state: IAppState) => state.list.loadedLists.has(state.active.listId))
  const visibleTodos = useSelector((state: IAppState) => state.todo.visibleTodos)

  // Update visible todos as needed
  useEffect(() => {
    dispatch(refreshVisibleTodos())
  }, [ activeListId, activeSublistId, isActiveListLoaded ])

  return (
    <Container>
      {visibleTodos && visibleTodos.map(todoId => {
        if(todoId === 'BACKLOG') {
          return (
            <TodosHeader
              key="BACKLOG"
              text="Backlog"/>
          )
        }
        else if(todoId.length === 10) {
          return (
            <TodosDate 
              key={todoId}
              dateString={todoId}/>
          )
        }
        else {
          return (
            <TodosTodo 
              key={todoId}
              todoId={todoId}/>
          )
        }
      })}
    </Container>
  );
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  height: 100%;
  padding: 10px 20px;
  display: flex;
  background-color: rgb(240, 240, 240);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export default Todos
