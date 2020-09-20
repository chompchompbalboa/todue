//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { mutation } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { 
	IUserSubscription,
	IUserSubscriptionUpdates 
} from '@/state/userSubscription/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type IUserSubscriptionActions = 
	ILoadUserSubscription |
	IUpdateUserSubscription

//-----------------------------------------------------------------------------
// Load User Subscription
//-----------------------------------------------------------------------------
export const LOAD_USER_SUBSCRIPTION = 'LOAD_USER_SUBSCRIPTION'
interface ILoadUserSubscription {
  type: typeof LOAD_USER_SUBSCRIPTION
  nextUserSubscription: IUserSubscription
}

export const loadUserSubscription = (nextUserSubscription: IUserSubscription): IUserSubscriptionActions => {
  return {
    type: LOAD_USER_SUBSCRIPTION,
    nextUserSubscription
  }
}

//-----------------------------------------------------------------------------
// Update User Subscription
//-----------------------------------------------------------------------------
export const UPDATE_USER_SUBSCRIPTION = 'UPDATE_USER_SUBSCRIPTION'
interface IUpdateUserSubscription {
	type: typeof UPDATE_USER_SUBSCRIPTION
	updates: IUserSubscriptionUpdates
}

export const updateUserSubscription = (updates: IUserSubscriptionUpdates, skipDatabaseUpdate: boolean = true) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    dispatch(updateUserSubscriptionReducer(updates))
		if(!skipDatabaseUpdate) {
			const {
				userSubscription: {
					id: userSubscriptionId
				}
			} = getState()
			mutation.updateUserSubscription(userSubscriptionId, updates)
		}
	}
}

export const updateUserSubscriptionReducer = (updates: IUserSubscriptionUpdates): IUserSubscriptionActions => {
	return {
		type: UPDATE_USER_SUBSCRIPTION,
		updates: updates,
	}
}