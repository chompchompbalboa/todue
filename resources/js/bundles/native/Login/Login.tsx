//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import LoginSkip from '@native/Login/LoginSkip'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Login = () => {
  
  return (
    <Container
      testID="Login">
      <LoginSkip />
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Login
