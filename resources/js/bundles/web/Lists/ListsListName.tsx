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
`
                               
const Name = styled.div`
  padding: 0.125rem;
  padding-left: 0.75rem;
  font-size: 1.25rem;
  font-weight: bold;
  background-color: ${ ({ isActiveList }: IName ) => isActiveList ? 'rgb(235, 235, 235)' : 'transparent' };
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  &:hover {
    background-color: rgb(235, 235, 235);
  }
`
interface IName {
  isActiveList: boolean
}

export default ListsListName
