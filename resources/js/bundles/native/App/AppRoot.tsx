//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

import { IAppState } from '@/state'

import App from '@native/App/App'
import Authentication from '@native/Authentication/Authentication'
import { SafeAreaView } from 'react-native-safe-area-context'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AppRoot = () => {

  // Redux
  const userEmail = useSelector((state: IAppState) => state.user?.email)

  // State
  const [ isUserLoggedIn, setIsUserLoggedIn ] = useState(false)

  // If there's an access token stored, the user is logged in
  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem('@todue/accessToken')
      if(token) {
        setIsUserLoggedIn(true)
      }
      else {
        setIsUserLoggedIn(false)
      }
    }
    getToken()
  }, [ userEmail ])

  return (
    <SafeAreaView>
      {isUserLoggedIn
        ? <App />
        : <Authentication />}
    </SafeAreaView>
  )
}

export default AppRoot
