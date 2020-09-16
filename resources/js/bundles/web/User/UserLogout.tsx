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

  // State
  const [ isLoggingOut, setIsLoggingOut ] = useState(false)

  // Handle Logout
  const handleLogout = () => {
    setIsLoggingOut(true)
    action.userLogout()
      .then(() => {
        window.location = window.location.href as any
      })
  }

  return (
    <Container
      onClick={() => handleLogout()}>
      {isLoggingOut ? "Logging Out..." : "Logout"}
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  white-space: nowrap;
  &:hover {
    background-color: rgb(240, 240, 240);
  }
`

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
export default UserLogout
