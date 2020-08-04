//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { createList } from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsCreateList = () => {
  
  // Redux
  const dispatch = useDispatch()
  
  return (
    <Container
      onClick={() => dispatch(createList())}>
      New List +
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin-bottom: 1rem;
  padding-left: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
`

export default ListsCreateList
