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
    <Container>
      <LogoutButton
        onClick={() => handleLogout()}>
        {isLoggingOut ? "Logging Out..." : "Logout"}
      </LogoutButton>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: 0.5rem;
`

const LogoutButton = styled.div`
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: rgb(200, 0, 0);
    color: white;
  }
`

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
export default UserLogout
