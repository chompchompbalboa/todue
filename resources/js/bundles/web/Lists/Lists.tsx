//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'

import ListsCreateList from '@web/Lists/ListsCreateList'
import ListsList from '@web/Lists/ListsList'
import Logo from '@/components/Logo'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Lists = () => {
  
  // Redux
  const lists = useSelector((state: IAppState) => state.list.lists)
                               
  return (
      <Container>
        <LogoContainer>
          <Logo
            fontSize="1.1rem"/>
        </LogoContainer>
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
  width: 100%;
`

const LogoContainer = styled.div`
  padding: 1.5rem;
  padding-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Lists
