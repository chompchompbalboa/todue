//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'

import {
  deleteList,
  updateList
} from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsListNameInput = ({
  listId
}: IListsListNameInput) => {
  
  // Redux
  const dispatch = useDispatch()
  const listName = useSelector((state: IAppState) => state.list.allLists[listId]?.name)
 
  // State
  const [ localListName, setLocalListName ] = useState(listName)
                               
  // Completed Editing
  const completeEditing = () => {
    if(localListName === null) {
      dispatch(deleteList(listId))
    }
    else if(listName !== localListName) {
      dispatch(updateList(listId, { name: localListName }, { name: listName }))
    }
  }
                               
  // Handle Key Press
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      completeEditing()
    }
  }
  
  return (
    <StyledInput
      autoFocus
      value={localListName || ''}
      onBlur={completeEditing}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setLocalListName(e.target.value)}
      onKeyPress={handleKeyPress}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListNameInput {
  listId: IList['id']
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledInput = styled.input`
  font-size: 1.25rem;
  border: none;
  outline: none;
  background-color: transparent;
`

export default ListsListNameInput
