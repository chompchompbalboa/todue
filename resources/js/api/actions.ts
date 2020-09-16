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
		client_id: '9183d461-362d-4861-811e-4f8d66be4924',
		client_secret: 'btPcIXiNqsLxcJFBwzoA34MgRYdIDJB546AN5i3s',
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
