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
  
  return (
    <Container>
      {billingMessages[userSubscriptionType]}
    </Container>
  )
} 
  
//-----------------------------------------------------------------------------
// Billing Messages
//-----------------------------------------------------------------------------
export const billingMessages = {
  TRIAL: "QuickDo requires an $10 annual subscription after your 7-day trial period expires. Subscriptions include complete and unlimited access to every QuickDo feature. If you'd like to begin your subscription now, please enter your billing information. Your card will be charged and your subscription will start immediately.",
  TRIAL_EXPIRED: 'Your trial has expired. Please enter your billing information to resume access.',
  YEARLY: 'Please enter your new credit card information.',
  YEARLY_EXPIRED: 'Your subscription has expired. Please enter your billing information to resume access.'
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
`

export default Billing
