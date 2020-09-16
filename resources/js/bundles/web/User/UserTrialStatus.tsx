//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state' 

import Billing from '@web/Billing/Billing'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const UserTrialStatus = () => {
  
  // Redux
  const userSubscriptionType = useSelector((state: IAppState) => state.userSubscription?.type)
                                           
  // State
  const [ isBillingVisible, setIsBillingVisible ] = useState(false)
  
  if(userSubscriptionType === 'TRIAL') {
    return (
      <>
        <Container
          onClick={() => setIsBillingVisible(true)}>
          6 days left in trial
        </Container>
        {isBillingVisible && 
          <Billing
            closeBilling={() => setIsBillingVisible(false)}/>
        }
      </>
    )
  }
  return null
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  cursor: pointer;
  margin-bottom: 0.1rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: italic;
  &:hover {
    text-decoration: underline;
  }
`

export default UserTrialStatus
