//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import { ISublist } from '@/state/sublist/types'

import ListsListSublistName from '@web/Lists/ListsListSublistName'
import ListsListSublistSettings from '@web/Lists/ListsListSublistSettings'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsListSublist = ({
  sublistId
}: IListsListSublist) => {
  
  return (
    <Container>
      <ListsListSublistName
        sublistId={sublistId}/>
      <ListsListSublistSettings
        sublistId={sublistId}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListSublist {
  sublistId: ISublist['id']
}
                               
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
`

export default ListsListSublist
