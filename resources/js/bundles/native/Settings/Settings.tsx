//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'

import Modal from '@/components/native/Modal'
import SettingsUser from '@native/Settings/SettingsUser'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Settings = ({
  isSettingsVisible,
  setIsSettingsVisible
}: ISettings) => {

  return (
    <Modal
      closeModal={() => setIsSettingsVisible(false)}
      isVisible={isSettingsVisible}>
      <SettingsUser />
    </Modal>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ISettings {
  isSettingsVisible: boolean
  setIsSettingsVisible(nextIsSettingsVisible: boolean): void
}

export default Settings
