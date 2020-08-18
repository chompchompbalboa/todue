//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'

import Login from '@native/Login/Login'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const App = () => {

  // Redux
  const isUserLoggedIn = useSelector((state: IAppState) => state.user !== null)
  
  if(isUserLoggedIn) {
    return (
      <Container>
        The user is logged in!!
      </Container>
    )
  }
  return <Login />
}

const Container = styled.Text``

export default App
