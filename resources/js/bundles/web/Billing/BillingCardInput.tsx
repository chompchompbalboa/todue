//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { CardCvcElement, CardExpiryElement, CardNumberElement } from '@stripe/react-stripe-js'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const BillingCardInput = () => { 

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        fontFamily: 'Open Sans, sans-serif',
        letterSpacing: '0.025em',
        backgroundColor: 'white',
        '::placeholder': {
          color: '#aab7c4',
        }
      },
      invalid: {
        color: '#c23d4b',
      }
    }
  }
  
  return (
    <Container>
      <CardDetailsContainer>
        <CardDetailContainer
          width="60%">
          <CardNumberElement 
            options={cardElementOptions}/>
        </CardDetailContainer>
        &nbsp;&nbsp;
        <CardDetailContainer
          width="20%">
          <CardCvcElement
            options={cardElementOptions}/>
        </CardDetailContainer>
        &nbsp;&nbsp;
        <CardDetailContainer
          width="20%">
          <CardExpiryElement
            options={cardElementOptions}/>
        </CardDetailContainer>
      </CardDetailsContainer>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin: 0.5rem 0;
  width: 100%;
`

const CardDetailsContainer = styled.div`
  margin-bottom: 0.25rem;
  display: flex;
  justify-content: center;
`

const CardDetailContainer = styled.div`
  display: inline;
  width: ${ ({ width }: ICardDetailContainer) => 'calc(' + width + ' - 0.5rem)' };
`
interface ICardDetailContainer {
  width: string
}

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
export default BillingCardInput
