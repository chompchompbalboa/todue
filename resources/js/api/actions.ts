//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import axios from '@/api/axios'

import { IUser } from '@/state/user/types'

//-----------------------------------------------------------------------------
// Actions
//-----------------------------------------------------------------------------
export const userLogin = async (email: string, password: string) => {
	return axios.post('/user/login', { email, password })
}

export const userLogout = async () => {
	return axios.post('/user/logout').then(response => {
		return response.data
	})
}

export const userRegister = async (email: string, password: string) => {
	return axios.post('/user/register', { email, password })
}

export const userRequestAccessToken = async (email: string, password: string) => {
	return axios.post('/oauth/token', { 
		grant_type: 'password',
		client_id: '918c358f-78c2-4fe1-b914-ad31bdce5f81',
		client_secret: 'Xxklm1dDfeJYoK5UuXc1DdfvPow9c66jmbfKt8ae',
		username: email,
		password: password
	})
}

export const userSubscriptionPurchase = async (userId: IUser['id'], stripeSetupIntentPaymentMethodId: string) => {
  return axios.post('/api/user/' + userId + '/subscription/purchase', { stripeSetupIntentPaymentMethodId })
}

export const userSubscriptionCancel = async (userId: IUser['id'], password: string) => {
  return axios.post('/api/user/' + userId + '/subscription/cancel', { password })
}

export const userSubscriptionGetStripeBillingPortalUrl = async (userId: IUser['id']) => {
  return axios.post('/api/user/' + userId + '/subscription/stripe-billing-portal-url')
}
