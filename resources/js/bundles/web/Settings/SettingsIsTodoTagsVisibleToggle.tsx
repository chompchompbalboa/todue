//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from '@/state'

import { 
  updateActiveIsTodoTagsVisible
} from '@/state/active/actions'

import SettingsItem from '@web/Settings/SettingsItem'
import Toggle from '@/components/Toggle'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const SettingsIsTodoTagsVisibleToggle = () => {
  
  // Redux
  const dispatch = useDispatch()
  const activeIsTodoTagsVisible = useSelector((state: IAppState) => state.active.isTodoTagsVisible)

  return (
    <SettingsItem
      label="Show Todo Sublists">
      <Toggle
        isActive={activeIsTodoTagsVisible}
        onClick={() =>  dispatch(updateActiveIsTodoTagsVisible(!activeIsTodoTagsVisible))}/>
    </SettingsItem>
  )
}

export default SettingsIsTodoTagsVisibleToggle
