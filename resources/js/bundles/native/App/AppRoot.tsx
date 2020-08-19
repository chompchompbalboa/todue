//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'

import { IAppState } from '@/state'

import App from '@native/App/App'
import Login from '@native/Login/Login'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AppRoot = () => {

  // Redux
  const isUserLoggedIn = useSelector((state: IAppState) => state.user !== null)
  
  if(isUserLoggedIn) {
    return <App />
  }
  return <Login />
}

export default AppRoot
