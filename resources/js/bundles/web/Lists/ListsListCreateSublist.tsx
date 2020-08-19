//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { IList } from '@/state/list/types'

import { createSublist } from '@/state/sublist/actions'
import { refreshVisibleTodos } from '@/state/todo/actions'

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
      onClick={() => {
        dispatch(createSublist(listId))
        dispatch(refreshVisibleTodos())
      }}>
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
  padding-left: 0.75rem;
  font-size: 1.15rem;
  cursor: pointer;
`

export default ListsCreateSublist
