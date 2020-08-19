//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from '@/state'
import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'

import { updateList } from '@/state/list/actions'
import { updateSublist } from '@/state/sublist/actions'

import ReactInputAutosize from 'react-input-autosize'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeaderListName = ({
  listId,
  sublistId,
  isListOrSublist
}: ITodosHeaderListName) => {
  
  // Redux
  const dispatch = useDispatch()
  const activeListName = useSelector((state: IAppState) => isListOrSublist === 'LIST'
    ? state.list.allLists[listId]?.name
    : state.sublist.allSublists[sublistId]?.name
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
        ? dispatch(updateList(listId, { name: localActiveListName }, { name: activeListName }))
        : dispatch(updateSublist(sublistId, { name: localActiveListName }, { name: activeListName }))
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
  sublistId: ISublist['id']
  isListOrSublist: 'LIST' | 'SUBLIST'
}

export default TodosHeaderListName
