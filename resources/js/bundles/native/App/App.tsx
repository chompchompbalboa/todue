//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { query } from '@/api'

import { IAppState } from '@/state'
import { IActiveState } from '@/state/active/reducers'
import { IList } from '@/state/list/types'

import { loadActive } from '@/state/active/actions'
import { loadList, loadLists } from '@/state/list/actions'

import Lists from '@native/Lists/Lists'
import Todos from '@native/Todos/Todos'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const App = () => {

  // Redux
  const dispatch = useDispatch()
  const activeListId = useSelector((state: IAppState) => state.active.listId)
  const isInitialDataLoaded = useSelector((state: IAppState) => state.active.listId !== null)
  const isActiveListLoaded = useSelector((state: IAppState) => state.list.loadedLists.has(state.active.listId))

  // Load the active list as needed
  useEffect(() => {
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
  }, [ activeListId, isInitialDataLoaded, isActiveListLoaded ])

  return (
    <Container>
      {isInitialDataLoaded && <Lists />}
      {isActiveListLoaded && <Todos />}
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
