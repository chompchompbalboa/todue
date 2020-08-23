//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const SiteAuthenticationStatus = ({
  status
}: ISiteAuthenticationStatus) => (
  <Container>
    <Status>
      {status}
    </Status>
  </Container>
)

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ISiteAuthenticationStatus {
  status: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  margin-top: 8px;
  color: rgb(175, 0, 0);
`

const Status = styled.Text`
`

export default SiteAuthenticationStatus
