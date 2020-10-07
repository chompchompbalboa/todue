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
  left: 0;
  bottom: 0;
  height: 5rem;
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`

const UserInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default User
