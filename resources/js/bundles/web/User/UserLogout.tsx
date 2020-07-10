//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import styled from 'styled-components'

import { action } from '@/api'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const UserLogout = () => {

  const [ isLoggingOut, setIsLoggingOut ] = useState(false)

  const handleLogoutButtonClick = () => {
    setIsLoggingOut(true)
    action.userLogout()
      .then(() => {
        window.location = window.location.href as any
      })
  }

  return (
    <Container
      onClick={() => handleLogoutButtonClick()}>
      {isLoggingOut ? "Logging Out..." : "Logout"}
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  cursor: pointer;
`

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
export default UserLogout
