//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { action } from '@/api'

import { IAppState } from '@/state'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const UserManageSubscription = ({
  closeDropdown
}: IUserManageSubscription) => {
  
  // State
  const [ isOpeningStripeBillingPortal, setIsOpeningStripeBillingPortal ] = useState(false)
  
  // Redux
  const userId = useSelector((state: IAppState) => state.user.id)
  
  // Open Stripe Billing Portal
  const openStripeBillingPortal = () => {
    setIsOpeningStripeBillingPortal(true)
    action.userSubscriptionGetStripeBillingPortalUrl(userId).then(response => {
      const billingPortalUrl = response.data as string
      if(billingPortalUrl) {
        window.open(billingPortalUrl, "_blank")
        setIsOpeningStripeBillingPortal(false)
        closeDropdown()
      }
    })
  }

  return (
    <Container
      onClick={openStripeBillingPortal}>
      {isOpeningStripeBillingPortal ? 'Opening...' : 'Manage Subscription'}
    </Container>
  )
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
