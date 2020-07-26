//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { IList } from '@/state/list/types'

import { createSublist } from '@/state/sublist/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsCreateSublist = ({
  listId
}: IListsListCreateSublist) => {
  
  // Redux
  const dispatch = useDispatch()
  
  return (
    <Container
      onClick={() => dispatch(createSublist(listId))}>
      New Sublist +
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
export interface IListsListCreateSublist {
  listId: IList['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding-bottom: 1rem;
  font-size: 0.95rem;
  cursor: pointer;
`

export default ListsCreateSublist
