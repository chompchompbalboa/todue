//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import SettingsIsCompletedTodosVisibleToggle from '@/bundles/web/Settings/SettingsIsCompletedTodosVisibleToggle'
import SettingsIsTodoTagsVisibleToggle from '@/bundles/web/Settings/SettingsIsTodoTagsVisibleToggle'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Settings = () => {

  return (
      <Container>
        <SettingsIsCompletedTodosVisibleToggle />
        <SettingsIsTodoTagsVisibleToggle />
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
