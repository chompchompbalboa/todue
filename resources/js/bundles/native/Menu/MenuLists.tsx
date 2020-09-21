//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'

import { IAppState } from '@/state'

import MenuItem from '@native/Menu/MenuItem'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const MenuLists = ({
  setIsListsVisible
}: IMenuLists) => {

  // Redux
  const activeListName = useSelector((state: IAppState) => state.active.sublistId
    ? state.sublist.allSublists[state.active.sublistId]?.name
    : state.list.allLists[state.active.listId]?.name
  )

  return (
    <MenuItem
      icon="list-ul"
      onPress={() => setIsListsVisible(true)}
      justifyContent="space-between"
      text={activeListName || 'Lists'}
      width="62%" />
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IMenuLists {
  setIsListsVisible(nextIsListsVisible: boolean): void
}

export default MenuLists
