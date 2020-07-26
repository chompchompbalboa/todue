//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ISublist } from '@/state/sublist/types'

import { updateActiveSublistId } from '@/state/active/actions'

import ListsListSublistNameInput from '@web/Lists/ListsListSublistNameInput'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsListSublistName = ({
  sublistId
}: IListsListSublistName) => {
  
  // Redux
  const dispatch = useDispatch()
  const isActiveSublist = useSelector((state: IAppState) => state.active.sublistId === sublistId)
  const listName = useSelector((state: IAppState) => state.sublist.allSublists[sublistId]?.name)
  
  return (
    <Container>
      {listName
        ? <Name
            isActiveSublist={isActiveSublist}
            onClick={() => dispatch(updateActiveSublistId(sublistId))}>
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
const Container = styled.div`
  cursor: pointer;
  font-weight: inherit;
`
                               
const Name = styled.div`
  font-size: 1.25rem;
  font-weight: ${ ({ isActiveSublist }: IName ) => isActiveSublist ? 'bold' : 'inherit' };
  &:hover {
    font-weight: bold;
  }
`
interface IName {
  isActiveSublist: boolean
}

export default ListsListSublistName
