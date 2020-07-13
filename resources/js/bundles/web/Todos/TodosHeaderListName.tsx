//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'

import { updateList } from '@/state/list/actions'

import ReactInputAutosize from 'react-input-autosize'

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
      dispatch(updateList(listId, { name: localActiveListName }, { name: activeListName }))
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

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosHeaderListName {
  listId: IList['id']
}

export default TodosHeaderListName
