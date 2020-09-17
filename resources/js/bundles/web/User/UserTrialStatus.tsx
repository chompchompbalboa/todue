//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state' 

import Billing from '@web/Billing/Billing'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const UserTrialStatus = () => {
  
  // Redux
  const userSubscriptionTrialEndDate = useSelector((state: IAppState) => state.userSubscription?.trialEndDate)
  const userSubscriptionType = useSelector((state: IAppState) => state.userSubscription?.type)
                                           
  // State
  const [ isBillingVisible, setIsBillingVisible ] = useState(false)
  
  // Days left in trial
  const daysLeftInTrial = moment(userSubscriptionTrialEndDate).diff(moment(), 'days')
  
  if(userSubscriptionType === 'TRIAL') {
    return (
      <>
        <Container
          onClick={() => setIsBillingVisible(true)}>
          {daysLeftInTrial > 1
            ? daysLeftInTrial + ' days left in trial'
            : 'Your trial ends soon'
          }
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
