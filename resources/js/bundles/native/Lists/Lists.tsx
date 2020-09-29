//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'

import ListsCreateList from '@native/Lists/ListsCreateList'
import ListsList from '@native/Lists/ListsList'
import Modal from '@/components/native/Modal'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Lists = ({
  isListsVisible,
  setIsListsVisible
}: ILists) => {

  // Redux
  const lists = useSelector((state: IAppState) => state.list.lists)

  return (
    <Modal
      closeModal={() => setIsListsVisible(false)}
      isVisible={isListsVisible}>
      <ListsContainer>
        <ListsCreateList />
        {lists.map(listId => (
          <ListsList
            key={listId}
            listId={listId}
            setIsListsVisible={setIsListsVisible}/>
        ))}
      </ListsContainer>
    </Modal>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ILists {
  isListsVisible: boolean
  setIsListsVisible(nextIsListsVisible: boolean): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const ListsContainer = styled.ScrollView`
  background-color: white;
  padding: 20px;
`

export default Lists
