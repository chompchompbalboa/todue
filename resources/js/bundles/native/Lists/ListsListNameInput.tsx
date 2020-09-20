//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'

import { IList } from '@/state/list/types'

import { updateList } from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const ListsListNameInput = ({
  listId
}: IListsListNameInput) => {

  // Redux
  const dispatch = useDispatch()

  // State
  const [ textInputValue, setTextInputValue ] = useState('')

  // Update List Name
  const updateListName = () => {
    if(textInputValue) {
      dispatch(updateList(listId, { name: textInputValue }))
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
  listId: IList['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const TextInput = styled.TextInput`
  font-size: 24px;
  font-family: OpenSans_700Bold;
  color: black;
  margin-bottom: 5px;
`

export default ListsListNameInput
