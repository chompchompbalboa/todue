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
`

const Status = styled.Text`
  font-size: 16px;
  font-family: OpenSans_400Regular;
  color: rgb(200, 0, 0);
  text-align: center;
`

export default SiteAuthenticationStatus
