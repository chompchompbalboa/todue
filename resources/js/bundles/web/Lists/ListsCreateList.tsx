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
  padding-bottom: 1rem;
  font-size: 0.95rem;
  cursor: pointer;
  text-align: right;
`

export default ListsCreateList
