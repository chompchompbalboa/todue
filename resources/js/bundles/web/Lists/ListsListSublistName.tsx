//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'

import ListsListSublistNameInput from '@web/Lists/ListsListSublistNameInput'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsListSublistName = ({
  listId,
  sublistId
}: IListsListSublistName) => {
  
  // Redux
  const listName = useSelector((state: IAppState) => state.sublist.allSublists[sublistId]?.name)
  
  return (
    <Container>
      {listName
        ? <Name>
            {listName}
          </Name>
        : <ListsListSublistNameInput
            listId={listId}
            sublistId={sublistId}/>
      }
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListSublistName {
  listId: IList['id']
  sublistId: ISublist['id']
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div``
                               
const Name = styled.div`
  font-size: 1.05rem;
`

export default ListsListSublistName
