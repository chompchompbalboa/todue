//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import UserActions from '@web/User/UserActions'
import UserInfo from '@web/User/UserInfo'
import UserTrialStatus from '@web/User/UserTrialStatus'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const User = () => {
  return (
      <Container>
        <UserTrialStatus />
        <UserInfoContainer>
          <UserInfo />
          <UserActions />
        </UserInfoContainer>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: 1rem;
`

const UserInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default User
