//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'

import ListsCreateList from '@web/Lists/ListsCreateList'
import ListsList from '@web/Lists/ListsList'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Lists = () => {
  
  // Redux
  const lists = useSelector((state: IAppState) => state.list.lists)
                               
  return (
      <Container>
        <ListsCreateList />
        {lists.map(listId => (
          <ListsList
            key={listId}
            listId={listId}/>
        ))}
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  top: 3rem;
  left: 0;
  width: 100%;
  height: calc(100% - 10rem);
  overflow-y: auto;
`

export default Lists
