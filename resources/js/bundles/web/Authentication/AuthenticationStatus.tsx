//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AuthenticationStatus = ({
  status
}: IAuthenticationStatus) => (
  <Container>
    {status}
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IAuthenticationStatus {
  status: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin-top: 0.5rem;
  color: rgb(175, 0, 0);
`

export default AuthenticationStatus