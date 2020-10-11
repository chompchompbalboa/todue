//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect, useState } from 'react'
//import * as SplashScreen from 'expo-splash-screen'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import styled from 'styled-components/native'

import { IAppState } from '@/state'

import App from '@native/App/App'
import Billing from '@native/Billing/Billing'
import Splash from '@native/Splash/Splash'
import { SafeAreaView } from 'react-native-safe-area-context'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AppRoot = () => {

  // Redux
  const userEmail = useSelector((state: IAppState) => state.user?.email)
  const userSubscriptionType = useSelector((state: IAppState) => state.userSubscription?.type || 'TRIAL')

  // State
  const [ isTokenCheckComplete, setIsTokenCheckComplete ] = useState(false)
  const [ isUserLoggedIn, setIsUserLoggedIn ] = useState(false)

  // If there's an access token stored, the user is logged in
  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem('@todue/accessToken')
      setIsTokenCheckComplete(true)
      if(token) {
        setIsUserLoggedIn(true)
      }
      else {
        setIsUserLoggedIn(false)
      }
    }
    getToken()
  }, [ userEmail ])

  if(isTokenCheckComplete) {
    return (
      <Background>
        <SafeAreaView
          edges={[ 'left', 'top', 'right' ]}>
          {isUserLoggedIn
            ? !userSubscriptionType.includes('EXPIRED')
              ? <App />
              : <Billing />
            : <Splash />}
        </SafeAreaView>
      </Background>
    )
  }
  return null
}

const Background = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgb(250, 250, 250);
`

export default AppRoot
