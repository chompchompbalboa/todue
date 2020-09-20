//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect, useState } from 'react'
import * as InAppPurchases from 'expo-in-app-purchases'
import { IAPResponseCode} from 'expo-in-app-purchases'
import styled from 'styled-components/native'

import AuthenticationLogout from '@native/Authentication/AuthenticationLogout'
import BillingInAppPurchase from '@native/Billing/BillingInAppPurchase'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Billing = () => {

  // State
  const [ isIapConnected, setIsIapConnected ] = useState(false)

  useEffect(() => {
    async function connectIap() {
      const connectionAttempt = await InAppPurchases.connectAsync()
      if(connectionAttempt.responseCode === IAPResponseCode.OK) {
        /*
        if(connectionAttempt.results && connectionAttempt.results.length > 0) {
          connectionAttempt.results.forEach(result => {
            console.log(result)
          })
        }
        */
        setIsIapConnected(true)
      }
    }
    connectIap()
    return () => InAppPurchases.disconnectAsync()
  }, [])

  return (
    <Container>
    <BillingInAppPurchase
      isIapConnected={isIapConnected}/>
      <AuthenticationLogout />
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  height: 100%;
  justify-content: center;
  padding: 16px;
`

export default Billing
