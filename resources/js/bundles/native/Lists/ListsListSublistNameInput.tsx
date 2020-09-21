//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'

import { ISublist } from '@/state/sublist/types'

import { updateSublist } from '@/state/sublist/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const ListsListNameInput = ({
  sublistId
}: IListsListNameInput) => {

  // Redux
  const dispatch = useDispatch()

  // State
  const [ textInputValue, setTextInputValue ] = useState('')

  // Update List Name
  const updateListName = () => {
    if(textInputValue) {
      dispatch(updateSublist(sublistId, { name: textInputValue }))
    }
  }

  return (
    <TextInput
      autoFocus
      onBlur={updateListName}
      onChangeText={(nextValue: string) => setTextInputValue(nextValue)}
      onSubmitEditing={updateListName}
      placeholder="List Name..."
      value={textInputValue}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IListsListNameInput {
  sublistId: ISublist['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const TextInput = styled.TextInput`
  font-size: 20px;
  font-family: OpenSans_400Regular;
  color: black;
`

export default ListsListNameInput
