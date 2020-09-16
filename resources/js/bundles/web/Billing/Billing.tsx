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
        <LogoContainer>
          <Logo 
            fontSize="1.25rem"/>
        </LogoContainer>
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

const LogoContainer = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export default Billing
