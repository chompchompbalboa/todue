//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import UserActions from '@web/User/UserActions'
import UserInfo from '@web/User/UserInfo'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const User = () => {
  return (
      <Container>
        <UserInfo />
        <UserActions />
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default User
