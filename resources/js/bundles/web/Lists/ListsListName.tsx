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
  const listName = useSelector((state: IAppState) => state.list.allLists[listId]?.name)
  
  return (
    <Container>
      {listName
        ? <Name
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
                               
const Name = styled.div``

export default ListsListName
