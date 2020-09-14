//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import BillingMessage from '@web/Billing/BillingMessage'
import BillingLogout from '@web/Billing/BillingLogout'
import BillingPaymentForm from '@web/Billing/BillingPaymentForm'
import Logo from '@/components/Logo'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Billing = () => {
  return (
    <Container>
      <Content>
        <Logo 
          fontSize="1.25rem"/>
        <Divider />
        <BillingMessage />
        <BillingPaymentForm />
        <BillingLogout />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Divider = styled.div`
  margin: 0.35rem 0;
  height: 1px;
  background-color: black;
  width: 2rem;
`

export default Billing
