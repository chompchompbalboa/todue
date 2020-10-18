//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import SettingsCompletedTodosToggle from '@/bundles/web/Settings/SettingsCompletedTodosToggle'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Settings = () => {

  return (
      <Container>
        <SettingsCompletedTodosToggle />
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0.5rem 0;
`

export default Settings
