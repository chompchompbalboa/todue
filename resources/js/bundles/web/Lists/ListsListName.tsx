//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'

import { updateActiveListId } from '@/state/active/actions'

import ListsListNameInput from '@web/Lists/ListsListNameInput'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsListName = ({
  listId
}: IListsListName) => {
  
  // Redux
  const dispatch = useDispatch()
  const isActiveList = useSelector((state: IAppState) => state.active.listId === listId && state.active.sublistId === null)
  const listName = useSelector((state: IAppState) => state.list.allLists[listId]?.name)
  
  return (
    <Container>
      {listName
        ? <Name
            isActiveList={isActiveList}
            onClick={() => dispatch(updateActiveListId(listId))}>
            {listName}
          </Name>
        : <ListsListNameInput
            listId={listId}/>
      }
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListName {
  listId: IList['id']
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
  font-weight: ${ ({ isActiveList }: IName ) => isActiveList ? 'bold' : 'inherit' };
  &:hover {
    font-weight: bold;
  }
`
interface IName {
  isActiveList: boolean
}

export default ListsListName
