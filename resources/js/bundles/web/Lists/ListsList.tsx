//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'

import ListsListCreateSublist from '@web/Lists/ListsListCreateSublist'
import ListsListName from '@web/Lists/ListsListName'
import ListsListSublist from '@web/Lists/ListsListSublist'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsList = ({
  listId
}: IListsList) => {
  
  // Redux
  const listSublists = useSelector((state: IAppState) => state.sublist.sublistsByListId[listId])
  
  return (
    <Container>
      <ListsListName
        listId={listId}/>
      <SublistContainer>
        {listSublists && listSublists.map(sublistId => (
          <ListsListSublist
            key={sublistId}
            sublistId={sublistId}/>
        ))}
        <ListsListCreateSublist
          listId={listId}/>
      </SublistContainer>
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
const Container = styled.div``

const SublistContainer = styled.div`
  margin-left: 1rem;
`

export default ListsList
