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
export const Billing = () => {
  
  // Redux
  const userSubscriptionType = useSelector((state: IAppState) => state.userSubscription.type)
  
  // Billing Messages
  const billingMessages = {
    TRIAL: '',
    TRIAL_EXPIRED: 'Your trial has expired. Please enter your billing information below.',
    YEARLY: '',
    YEARLY_EXPIRED: 'Your subscription has expired. Please enter your billing information below.',
    YEARLY_EXPIRED_GRACE_PERIOD: ''
  }
  
  return (
    <Container>
      {billingMessages[userSubscriptionType]}
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
`

export default Billing
