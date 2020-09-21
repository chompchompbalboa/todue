//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

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
const ListsListSublistNameInput = ({
  listId,
  sublistId
}: IListsListSublistNameInput) => {

  // Redux
  const dispatch = useDispatch()
  const sublistName = useSelector((state: IAppState) => state.sublist.allSublists[sublistId]?.name)

  // State
  const [ textInputValue, setTextInputValue ] = useState(sublistName)

  // Complete Editing
  const completeEditing = () => {
    if(textInputValue === null) {
      dispatch(deleteSublist(sublistId))
    }
    else if(sublistName !== textInputValue) {
      dispatch(updateSublist(sublistId, { name: textInputValue }, { name: sublistName }))
      if(sublistName === null) { // If we just created the sublist, create its default tag as well
        dispatch(createSublistDefaultTag(listId, sublistId, textInputValue))
      }
    }
  }

  return (
    <TextInput
      autoFocus
      onBlur={completeEditing}
      onChangeText={(nextValue: string) => setTextInputValue(nextValue)}
      onSubmitEditing={completeEditing}
      placeholder="Sublist Name..."
      value={textInputValue}/>
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
const TextInput = styled.TextInput`
  padding: 1px 0;
  font-size: 20px;
  font-family: OpenSans_400Regular;
  color: black;
`

export default ListsListSublistNameInput
