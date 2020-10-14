//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'

import {
  createSublistDefaultTag,
  deleteSublist,
  updateSublist
} from '@/state/sublist/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const ListsListSublistNameInput = ({
  listId,
  sublistId
}: IListsListSublistNameInput) => {
  
  // Redux
  const dispatch = useDispatch()
  const sublistName = useSelector((state: IAppState) => state.sublist.allSublists[sublistId]?.name)
 
  // State
  const [ localSublistName, setLocalSublistName ] = useState(sublistName)

  // Complete Editing
  const completeEditing = () => {
    if(localSublistName === null) {
      dispatch(deleteSublist(sublistId))
    }
    else if(sublistName !== localSublistName) {
      dispatch(updateSublist(sublistId, { name: localSublistName }, { name: sublistName }))
      if(sublistName === null) { // If we just created the sublist, create its default tag as well
        dispatch(createSublistDefaultTag(listId, sublistId, localSublistName))
      }
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
      value={localSublistName || ''}
      onBlur={completeEditing}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setLocalSublistName(e.target.value)}
      onKeyPress={handleKeyPress}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListSublistNameInput {
  listId: IList['id']
  sublistId: ISublist['id']
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: transparent;
`

export default ListsListSublistNameInput
