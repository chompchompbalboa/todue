//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from '@/state'

import { 
  updateActiveIsCompletedTodosVisible
} from '@/state/active/actions'
import { 
  refreshVisibleTodos
} from '@/state/todo/actions'

import SettingsItem from '@web/Settings/SettingsItem'
import Toggle from '@/components/Toggle'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const SettingsCompletedTodosToggle = () => {
  
  // Redux
  const dispatch = useDispatch()
  const activeIsCompletedTodosVisible = useSelector((state: IAppState) => state.active.isCompletedTodosVisible)

  return (
    <SettingsItem
      label="Show Completed Todos">
      <Toggle
        isActive={activeIsCompletedTodosVisible}
        onClick={() => {
          dispatch(updateActiveIsCompletedTodosVisible(!activeIsCompletedTodosVisible))
          dispatch(refreshVisibleTodos())
        }}/>
    </SettingsItem>
  )
}

export default SettingsCompletedTodosToggle
