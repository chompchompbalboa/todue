//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { action } from '@/api'

import { IAppState } from '@/state'

import Alert from '@/components/Alert'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const UserManageSubscription = ({
  closeDropdown
}: IUserManageSubscription) => {
  
  // State
  const defaultButtonText = 'Manage Subscription'
  const [ alertText, setAlertText ] = useState('')
  const [ buttonText, setButtonText ] = useState(defaultButtonText)
  const [ isAlertVisible, setIsAlertVisible ] = useState(false)
  
  // Redux
  const userId = useSelector((state: IAppState) => state.user?.id)
  const userSubscriptionProvider = useSelector((state: IAppState) => state.userSubscription?.provider)
  const userSubscriptionType = useSelector((state: IAppState) => state.userSubscription?.type || 'TRIAL')
                             
  // Handle Click
  const handleClick = () => {
    // Stripe subscriptions
    if(userSubscriptionType.includes('YEARLY') && userSubscriptionProvider === 'STRIPE') {
      setButtonText('Opening...')
      action.userSubscriptionGetStripeBillingPortalUrl(userId).then(response => {
        const billingPortalUrl = response.data as string
        if(billingPortalUrl) {
          window.open(billingPortalUrl, "_blank")
          setButtonText(defaultButtonText)
          closeDropdown()
        }
      })
    }
    // Apple subscriptions
    if(userSubscriptionType.includes('YEARLY') && userSubscriptionProvider === 'APPLE') {
      setAlertText("Apologies for the inconvience, but since your subscription was originally purchased in the App Store, you will need to use the App Store to manage your subscription. We'd like to allow you to manage Apple subscriptions from our web app, but for now it isn't possible.")
      setIsAlertVisible(true)
    }
    // Gift subscriptions
    if(userSubscriptionType.includes('YEARLY') && userSubscriptionProvider === 'QUICKDO') {
      setAlertText("Congratulations! If you're seeing this message, you have a free subscription to QuickDo and don't need to worry about managing your subscription")
      setIsAlertVisible(true)
    }
    // Gift subscriptions
    if(userSubscriptionType.includes('YEARLY') && userSubscriptionProvider === null) {
      setAlertText("We're unable to access your billing information. We normally sort these problems out during our nightly maintenance. If you continue to see this message please reach out and let us know.")
      setIsAlertVisible(true)
    }
  }

  if(userSubscriptionType.includes('YEARLY')) {
    return (
      <>
        <Container
          onClick={handleClick}>
          {buttonText}
        </Container>
        {isAlertVisible &&
          <Alert
            closeAlert={() => setIsAlertVisible(false)}>
            {alertText}
          </Alert>
        }
      </>
    )
  }
  return null
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
export interface IUserManageSubscription {
  closeDropdown(): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  white-space: nowrap;
  &:hover {
    background-color: rgb(240, 240, 240);
  }
`

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
export default UserManageSubscription
