//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useMemo } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import styled from 'styled-components'

import BillingPaymentFormElements from '@web/Billing/BillingPaymentFormElements'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const BillingPaymentForm = () => {

  // @ts-ignore
  const stripe = useMemo(() => window.Stripe(environment.stripeKey), [])

  return (
    <Container>
      <Elements
        stripe={stripe}>
        <BillingPaymentFormElements />
      </Elements>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 1rem;
`

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
export default BillingPaymentForm
