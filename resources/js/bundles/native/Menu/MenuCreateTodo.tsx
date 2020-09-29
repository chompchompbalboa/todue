//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from '@/state'

import { createTodo } from '@/state/todo/actions'

import MenuItem from '@native/Menu/MenuItem'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const MenuCreateTodo = () => {

  // Redux
  const dispatch = useDispatch()
  const activeListId = useSelector((state: IAppState) => state.active.listId)

  return (
    <MenuItem
      icon="plus"
      onPress={() => {
        dispatch(createTodo(activeListId, null, true))
      }}
      justifyContent="center"
      width="19%" />
  )
}

export default MenuCreateTodo
