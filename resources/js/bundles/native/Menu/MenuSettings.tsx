//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'

import MenuItem from '@native/Menu/MenuItem'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const MenuSettings = ({
  setIsSettingsVisible
}: IMenuSettings) => {

  return (
    <MenuItem
      icon="gear"
      onPress={() => setIsSettingsVisible(true)}
      justifyContent="center"
      width="18%" />
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IMenuSettings {
  setIsSettingsVisible(nextIsSettingsVisible: boolean): void
}

export default MenuSettings
