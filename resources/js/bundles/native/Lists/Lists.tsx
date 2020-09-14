//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'

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
      {lists.map(listId => (
        <ListsList
          key={listId}
          listId={listId}
          setIsListsVisible={setIsListsVisible}/>
      ))}
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

export default Lists
