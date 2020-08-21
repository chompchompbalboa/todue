//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
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
  const isListLoaded = useSelector((state: IAppState) => state.list.loadedLists.has(listId))
  const listSublists = useSelector((state: IAppState) => state.sublist.sublistsByListId[listId])
  
  // State
  const [ isSublistsVisible, setIsSublistsVisible ] = useState(true)
  
  return (
    <Container
      data-testid="ListsList">
      <ListsListName
        listId={listId}
        isListLoaded={isListLoaded}
        isSublistsVisible={isSublistsVisible}
        setIsSublistsVisible={setIsSublistsVisible}/>
      {isListLoaded && isSublistsVisible && 
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
  margin-left: 0.25rem;
  margin-bottom: 1rem;
`

const SublistContainer = styled.div`
  margin-left: 1rem;
`

export default ListsList
