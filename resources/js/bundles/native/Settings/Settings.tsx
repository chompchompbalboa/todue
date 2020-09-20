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
  setIsSettingsVisible
}: ISettings) => {

  return (
    <Modal
      closeModal={() => setIsSettingsVisible(false)}>
      <SettingsUser />
    </Modal>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ISettings {
  setIsSettingsVisible(nextIsSettingsVisible: boolean): void
}

export default Settings
