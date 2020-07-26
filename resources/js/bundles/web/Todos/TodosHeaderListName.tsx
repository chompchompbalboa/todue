//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from '@/state'

import { updateList } from '@/state/list/actions'
import { updateSublist } from '@/state/sublist/actions'

import ReactInputAutosize from 'react-input-autosize'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeaderListName = () => {
  
  // Redux
  const dispatch = useDispatch()
  const activeListId = useSelector((state: IAppState) => state.active.listId)
  const activeSublistId = useSelector((state: IAppState) => state.active.sublistId)
  const isListOrSublist = activeSublistId === null ? 'LIST' : 'SUBLIST'
  const activeListName = useSelector((state: IAppState) => isListOrSublist === 'LIST'
    ? state.list.allLists[state.active.listId]?.name
    : state.sublist.allSublists[state.active.sublistId]?.name
  )
 
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
      isListOrSublist === 'LIST'
        ? dispatch(updateList(activeListId, { name: localActiveListName }, { name: activeListName }))
        : dispatch(updateSublist(activeSublistId, { name: localActiveListName }, { name: activeListName }))
    }
  }
  
  return (
    <ReactInputAutosize
      value={localActiveListName || ''}
      onBlur={completeEditing}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setLocalActiveListName(e.target.value)}
      inputStyle={{
        fontSize: '1.25rem',
        fontWeight: 'bold',
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        marginRight: '0.25rem'
      }}/>
  )
}

export default TodosHeaderListName
