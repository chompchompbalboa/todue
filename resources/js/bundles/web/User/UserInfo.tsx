//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state' 

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const UserInfo = () => {
  
  // Redux
  const userEmail = useSelector((state: IAppState) => state.user?.email)
  
  return (
      <Container>
        {userEmail}
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default UserInfo
