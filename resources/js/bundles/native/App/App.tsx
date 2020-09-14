//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { query } from '@/api'

import { IAppState } from '@/state'
import { IActiveState } from '@/state/active/reducers'
import { IList } from '@/state/list/types'

import { loadActive } from '@/state/active/actions'
import { loadList, loadLists } from '@/state/list/actions'

import Header from '@native/Header/Header'
import Lists from '@native/Lists/Lists'
import Todo from '@native/Todo/Todo'
import Todos from '@native/Todos/Todos'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const App = () => {

  // Redux
  const dispatch = useDispatch()
  const activeListId = useSelector((state: IAppState) => state.active.listId)
  const activeTodoId = useSelector((state: IAppState) => state.active.todoId)
  const isUserLoggedIn = useSelector((state: IAppState) => state.user.email !== null)
  const isInitialDataLoaded = useSelector((state: IAppState) => state.active.listId !== null)
  const isActiveListLoaded = useSelector((state: IAppState) => state.list.loadedLists.has(state.active.listId))

  // State
  const [ isListsVisible, setIsListsVisible ] = useState(false)
  const [ isTodoVisible, setIsTodoVisible ] = useState(false)

  // Load the active list as needed
  useEffect(() => {
    if(isUserLoggedIn) {
      if(!isInitialDataLoaded) {
        query.loadInitialData().then((response: any) => {
          if(response.status === 200) {
            dispatch(loadLists(response.data.lists as IList[]))
            dispatch(loadActive(response.data.active as IActiveState))
          }
        })
      }
      else if(!isActiveListLoaded) {
        dispatch(loadList(activeListId))
      }
    }
  }, [ activeListId, isInitialDataLoaded, isActiveListLoaded ])

  return (
    <Container>
      {isInitialDataLoaded && 
        <Header
          isListsVisible={isListsVisible}
          setIsListsVisible={setIsListsVisible}/>}
      {isInitialDataLoaded && isListsVisible &&
        <Lists
          setIsListsVisible={setIsListsVisible}/>}
      {isActiveListLoaded && 
        <Todos
          setIsTodoVisible={setIsTodoVisible}/>}
      {isTodoVisible && activeTodoId && 
        <Todo
          setIsTodoVisible={setIsTodoVisible}/>}
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
`

export default App
