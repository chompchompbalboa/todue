//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'

import AuthenticationLogout from '@native/Authentication/AuthenticationLogout'
import ListsList from '@native/Lists/ListsList'
import Modal from '@/components/native/Modal'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Lists = ({
  setIsListsVisible
}: ILists) => {

  // Redux
  const lists = useSelector((state: IAppState) => state.list.lists)

  return (
    <Modal
      closeModal={() => setIsListsVisible(false)}>
      <ListsContainer>
        {lists.map(listId => (
          <ListsList
            key={listId}
            listId={listId}
            setIsListsVisible={setIsListsVisible}/>
        ))}
      </ListsContainer>
      <AuthenticationLogout />
    </Modal>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ILists {
  setIsListsVisible(nextIsListsVisible: boolean): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const ListsContainer = styled.View`
  background-color: white;
`

export default Lists
