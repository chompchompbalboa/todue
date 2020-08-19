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
    <Container
      data-testid="ListsList">
      <ListsListName
        listId={listId}/>
      <SublistContainer>
        {listSublists && listSublists.map(sublistId => (
          <ListsListSublist
            key={sublistId}
            listId={listId}
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
const Container = styled.div`
  margin-left: 0.25rem;
  margin-bottom: 1rem;
`

const SublistContainer = styled.div`
  margin-left: 0.5rem;
`

export default ListsList
