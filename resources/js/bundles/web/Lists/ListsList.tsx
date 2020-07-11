//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import { IList } from '@/state/list/types'

import ListsListName from '@web/Lists/ListsListName'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsList = ({
  listId
}: IListsList) => {
  
  return (
    <Container>
      <ListsListName
        listId={listId}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsList {
  listId: IList['id']
}
                               
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  height: 1.75rem;
  &:hover {
    font-weight: bold;
  }
`

export default ListsList
