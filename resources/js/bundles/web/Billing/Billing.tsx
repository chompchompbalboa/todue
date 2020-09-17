//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import Alert from '@/components/Alert'
import BillingMessage from '@web/Billing/BillingMessage'
import BillingLogout from '@web/Billing/BillingLogout'
import BillingPaymentForm from '@web/Billing/BillingPaymentForm'
import Logo from '@/components/Logo'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const Billing = ({
  closeBilling,
  isLogoutVisible = false
}: IBilling) => {
  return (
    <Alert
      closeAlert={closeBilling}>
      <LogoContainer>
        <Logo 
          fontSize="1.25rem"/>
      </LogoContainer>
      <BillingMessage />
      <BillingPaymentForm />
      {isLogoutVisible && <BillingLogout />}
    </Alert>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IBilling {
  closeBilling?(): void
  isLogoutVisible?: boolean
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const LogoContainer = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export default Billing
