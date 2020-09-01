//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from '@/state'

import { refreshVisibleTodos } from '@/state/todo/actions'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
    <KeyboardAwareScrollView
      keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
      stickyHeaderIndices={stickyHeaderIndices}
      style={{
      height: '100%',
      paddingLeft: 20,
      paddingRight: 20,
      display: 'flex',
      backgroundColor: 'rgb(240, 240, 250)',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      }}>
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
    </KeyboardAwareScrollView>
  );
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodos {
  setIsTodoVisible(nextIsTodoVisible: boolean): void
}

export default Todos
