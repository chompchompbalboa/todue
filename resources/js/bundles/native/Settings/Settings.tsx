//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import AuthenticationLogout from '@native/Authentication/AuthenticationLogout'
import Modal from '@/components/native/Modal'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Settings = ({
  setIsSettingsVisible
}: ISettings) => {

  return (
    <Modal
      closeModal={() => setIsSettingsVisible(false)}>
      <LogoutContainer>
        <AuthenticationLogout />
      </LogoutContainer>
    </Modal>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ISettings {
  setIsSettingsVisible(nextIsSettingsVisible: boolean): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const LogoutContainer = styled.View`
  padding: 16px;
`

export default Settings
