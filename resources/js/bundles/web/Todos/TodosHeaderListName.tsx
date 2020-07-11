//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'

import { updateList } from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeaderListName = () => {
  
  // Redux
  const dispatch = useDispatch()
  const activeListId = useSelector((state: IAppState) => state.active.listId)
  const activeListName = useSelector((state: IAppState) => state.list.allLists[activeListId]?.name)
 
  // State
  const [ localActiveListName, setLocalActiveListName ] = useState(activeListName)
                                     
  // Update localActiveListName as needed
  useEffect(() => {
    if(activeListName !== localActiveListName) {
      setLocalActiveListName(activeListName)
    }
  }, [ activeListName ])
                               
  // Complete Editing
  const completeEditing = () => {
    dispatch(updateList(activeListId, { name: localActiveListName }))
  }
  
  return (
    <StyledInput
      value={localActiveListName || ''}
      onBlur={completeEditing}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setLocalActiveListName(e.target.value)}/>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledInput = styled.input`
  font-size: 1.25rem;
  font-weight: bold;
  border: none;
  outline: none;
  background-color: transparent;
`

export default TodosHeaderListName