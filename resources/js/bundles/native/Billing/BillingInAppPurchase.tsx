//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const BillingInAppPurchase = () => {

  return (
    <Container>
      <Text>
        You owe me money, motherfucker. Pay your damn bills.
      </Text>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  justify-content: center;
  text-align: center;
`

const Text = styled.Text``

export default BillingInAppPurchase
