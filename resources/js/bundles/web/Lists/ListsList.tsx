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

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsList = ({
  listId
}: IListsList) => {
  
  // Redux
  const listSublists = useSelector((state: IAppState) => state.list.sublistsByListId[listId])
  
  return (
    <Container>
      <ListsListName
        listId={listId}/>
      <ListsListCreateSublist
        listId={listId}/>
      {listSublists &&
        <SublistContainer>
          {listSublists.map(sublistId => (
            <ListsList
              key={sublistId}
              listId={sublistId}/>
          ))}
        </SublistContainer>
      }
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
  &:hover {
    font-weight: bold;
  }
`

const SublistContainer = styled.div`
  margin-left: 1rem;
`

export default ListsList
