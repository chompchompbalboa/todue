//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import BillingMessage from '@web/Billing/BillingMessage'

import BillingPaymentForm from '@web/Billing/BillingPaymentForm'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Billing = () => {
  return (
    <Container>
      <Content>
        <BillingMessage />
        <BillingPaymentForm />
      </Content>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
`

const Content = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
`

export default Billing
