//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import * as InAppPurchases from 'expo-in-app-purchases'
import { IAPResponseCode} from 'expo-in-app-purchases'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'

import { updateUserSubscription } from '@/state/userSubscription/actions'

import Logo from '@/components/native/Logo'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const BillingInAppPurchase = ({
  isIapConnected
}: IBillingInAppPurchase) => {
  
  // Redux
  const dispatch = useDispatch()
  const userSubscriptionType = useSelector((state: IAppState) => state.userSubscription.type)

  // State
  const [ isPurchasing, setIsPurchasing ] = useState(false)

  // Handle Subscription Purchase
  const handleSubscriptionPurchase = async () => {
    if(isIapConnected) {
      setIsPurchasing(true)
      const { responseCode, results } = await InAppPurchases.getProductsAsync([ 'quickdo_yearly_ios' ])
      if (responseCode === IAPResponseCode.OK && results.length === 1) {
        InAppPurchases.setPurchaseListener(purchaseListener)
        InAppPurchases.purchaseItemAsync(results[0].productId)
      }
    }
  }

  // Set purchase listener
  const purchaseListener = async (response: any) => {
    const {
      responseCode,
      results
    } = response
    setIsPurchasing(false)
    if (responseCode === IAPResponseCode.OK) {
      results.forEach((purchase: any) => {
        if (!purchase.acknowledged) {
          dispatch(updateUserSubscription({ 
            type: 'YEARLY',
            provider: 'APPLE'
          }, false))
          InAppPurchases.finishTransactionAsync(purchase, true)
        }
      })
    }
  }

  return (
    <Container>
      <Logo />
      <Message>
        {billingMessages[userSubscriptionType]}
      </Message>
      <PurchaseButtonTouchable
        onPress={handleSubscriptionPurchase}>
        <PurchaseButton
          isEnabled={isIapConnected}>
          {isPurchasing
            ? <PurchaseButtonText>
                Purchasing...
              </PurchaseButtonText>
            : <>
                <PurchaseButtonText>
                  Purchase Subscription
                </PurchaseButtonText>
                <PurchaseButtonText>
                  ($10 per year, renews automatically)
                </PurchaseButtonText>
              </>
          }
        </PurchaseButton>
      </PurchaseButtonTouchable>
    </Container>
  )
}
  
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IBillingInAppPurchase {
  isIapConnected: boolean
}

//-----------------------------------------------------------------------------
// Billing Messages
//-----------------------------------------------------------------------------
export const billingMessages = {
  TRIAL: "QuickDo requires an $10 annual subscription after your 7-day trial period expires. Subscriptions include complete and unlimited access to every QuickDo feature.",
  TRIAL_EXPIRED: 'Your trial has expired. Please subscribe to resume access.',
  YEARLY: 'Please enter your new credit card information.',
  YEARLY_EXPIRED: 'Your subscription has expired. Please resubscribe to resume access.'
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  align-items: center;
  justify-content: center;
`

const Message = styled.Text`
  text-align: center;
  margin: 18px 0;
  font-size: 18px;
  font-family: OpenSans_400Regular;
`

const PurchaseButtonTouchable = styled.TouchableWithoutFeedback``
const PurchaseButton = styled.View`
  width: 100%;
  margin-bottom: 24px;
  padding: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${ ({ isEnabled }: IPurchaseButton) => isEnabled ? 'rgba(100, 175, 250, 1)' : 'rgba(100, 175, 250, 0.6)' };
`
interface IPurchaseButton {
  isEnabled: boolean
}

const PurchaseButtonText = styled.Text`
  font-size: 16px;
  font-family: OpenSans_700Bold;
  color: white;
`

export default BillingInAppPurchase
