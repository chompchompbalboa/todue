//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ISublist } from '@/state/sublist/types'

import ListsListSublistNameInput from '@web/Lists/ListsListSublistNameInput'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsListSublistName = ({
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
            sublistId={sublistId}/>
      }
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListSublistName {
  sublistId: ISublist['id']
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div``
                               
const Name = styled.div`
  font-size: 1.15rem;
  font-weight: bold;
  color: rgb(0, 0, 0);
`

export default ListsListSublistName
