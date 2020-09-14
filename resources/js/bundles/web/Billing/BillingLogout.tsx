//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import styled from 'styled-components'

import { action } from '@/api'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const BillingLogout = () => {

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
        {isLoggingOut ? "Redirecting..." : "Sign In To A Different Account"}
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  font-style: italics;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

export default BillingLogout
