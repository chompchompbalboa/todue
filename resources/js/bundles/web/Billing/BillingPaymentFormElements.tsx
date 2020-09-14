//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useElements, useStripe } from '@stripe/react-stripe-js'
import styled from 'styled-components'

import { action } from '@/api'
import { IAppState } from '@/state'

import { updateUserSubscription } from '@/state/userSubscription/actions'

import BillingCardInput from '@web/Billing/BillingCardInput'
import BillingErrorMessage, { IBillingError } from '@web/Billing/BillingErrorMessage'
import BillingSubmitButton from '@web/Billing/BillingSubmitButton'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const BillingPaymentFormElements = () => { 
  
  // Stripe
  const stripeElements = useElements()
  const stripe = useStripe()

  // Redux
  const dispatch = useDispatch()
  const userId = useSelector((state: IAppState) => state.user.id)
  const userSubscriptionStripePaymentIntentClientSecret = useSelector((state: IAppState) => state.userSubscription?.stripeSetupIntentClientSecret)
  
  // State
  const [ isChargeBeingProcessed, setIsChargeBeingProcessed ] = useState(false)
  const [ stripeError, setStripeError] = useState(null as IBillingError)
  
  // Handle Submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStripeError(null)
    setIsChargeBeingProcessed(true)

    // Get the card number 
    const cardNumberElement = stripeElements.getElement('cardNumber')

    if(userSubscriptionStripePaymentIntentClientSecret) {
      // Get the Stripe setupIntent
      const { setupIntent, error } = await stripe.confirmCardSetup(userSubscriptionStripePaymentIntentClientSecret, {
        payment_method: {
          card: cardNumberElement,
        }
      })
      if(error) {
        setTimeout(() => {
          setStripeError(error as IBillingError)
          setIsChargeBeingProcessed(false)
        }, 500)
      }
      else {
        // Send the setupIntent to the backend to process the subscription
        action.userSubscriptionPurchase(userId, setupIntent.payment_method)
          .then(() => {
            dispatch(updateUserSubscription({ 
              type: 'YEARLY'
            }))
          })
          .catch(() => {
            setIsChargeBeingProcessed(false)
            setStripeError({ code: 'error', message: null }) // This will display a generic error message in StripeErrorMessage
          })
      }
    }
    else {
      setTimeout(() => {
        setIsChargeBeingProcessed(false)
        setStripeError({ code: 'error', message: null }) // This will display a generic error message in StripeErrorMessage
      }, 500)
    }
  }
  
  return (
    <StyledForm 
      data-testid="StripeForm"
      onSubmit={handleSubmit}>
      <BillingCardInput />
      <BillingSubmitButton 
        text={isChargeBeingProcessed ? 'Processing...' : 'Purchase Subscription ($10 per year, renews automatically)'}/>
      <BillingErrorMessage
        error={stripeError}/>
    </StyledForm>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledForm = styled.form`
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default BillingPaymentFormElements
