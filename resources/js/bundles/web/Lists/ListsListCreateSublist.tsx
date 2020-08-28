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
  cursor: pointer;
  padding: 0.2rem;
  padding-left: 0.75rem;
  font-size: 1.05rem;
  color: rgb(25, 25, 25);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  &:hover {
    background-color: rgb(235, 235, 235);
  }
`

export default ListsCreateSublist
