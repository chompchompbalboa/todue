//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'

import { updateList } from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeaderListName = ({
  listId
}: ITodosHeaderListName) => {
  
  // Redux
  const dispatch = useDispatch()
  const activeListName = useSelector((state: IAppState) => state.list.allLists[listId]?.name)
 
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
    if(activeListName !== localActiveListName) {
      dispatch(updateList(listId, { name: localActiveListName }))
    }
  }
  
  return (
    <StyledInput
      value={localActiveListName || ''}
      onBlur={completeEditing}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setLocalActiveListName(e.target.value)}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosHeaderListName {
  listId: IList['id']
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
