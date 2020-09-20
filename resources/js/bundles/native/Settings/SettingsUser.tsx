//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'

import AuthenticationLogout from '@native/Authentication/AuthenticationLogout'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Settings = () => {

  // Redux
  const userEmail = useSelector((state: IAppState) => state.user?.email)

  return (
    <Container>
      <InfoContainer>
        <Info>
          {userEmail}
        </Info>
      </InfoContainer>
      <AuthenticationLogout />
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  padding: 16px;
`

const InfoContainer = styled.View`
  justify-content: center;
  align-items: center;
`

const Info = styled.Text`
  margin-bottom: 12px;
  font-size: 22px;
  font-family: OpenSans_700Bold;
`

export default Settings
