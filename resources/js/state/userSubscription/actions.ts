//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IUserSubscriptionUpdates } from '@/state/userSubscription/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type IUserSubscriptionActions = IUpdateUserSubscription

//-----------------------------------------------------------------------------
// Update User
//-----------------------------------------------------------------------------
export const UPDATE_USER_SUBSCRIPTION = 'UPDATE_USER_SUBSCRIPTION'
interface IUpdateUserSubscription {
	type: typeof UPDATE_USER_SUBSCRIPTION
	updates: IUserSubscriptionUpdates
}

export const updateUserSubscription = (updates: IUserSubscriptionUpdates): IUserSubscriptionActions => {
	return {
		type: UPDATE_USER_SUBSCRIPTION,
		updates: updates,
	}
}