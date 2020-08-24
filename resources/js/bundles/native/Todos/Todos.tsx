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
const Todos = ({
  setIsTodoVisible
}: ITodos) => {

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

  // Sticky header indices
  const stickyHeaderIndices = visibleTodos.map((todoId, index) => todoId.length <= 10 ? index : null).filter(index => index !== null)

  return (
    <Container
      stickyHeaderIndices={stickyHeaderIndices}>
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
              todoId={todoId}
              setIsTodoVisible={setIsTodoVisible}/>
          )
        }
      })}
    </Container>
  );
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodos {
  setIsTodoVisible(nextIsTodoVisible: boolean): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.ScrollView`
  height: 100%;
  padding: 0 20px;
  display: flex;
  background-color: rgb(240, 240, 240);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export default Todos
