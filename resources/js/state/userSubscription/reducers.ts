//-----------------------------------------------------------------------------
// Initial
//-----------------------------------------------------------------------------
import defaultInitialData from '@/state/initialData'
import { IUserSubscription } from '@/state/userSubscription/types'
import { 
  IUserSubscriptionActions, 
  UPDATE_USER_SUBSCRIPTION
} from '@/state/userSubscription/actions'

//-----------------------------------------------------------------------------
// Initial
//-----------------------------------------------------------------------------
export const initialState: IUserSubscription = typeof initialData !== 'undefined' ? initialData.userSubscription : defaultInitialData.userSubscription

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const userSubscriptionReducer = (state = initialState, action: IUserSubscriptionActions): IUserSubscription => {
	switch (action.type) {
    
		case UPDATE_USER_SUBSCRIPTION: {
			const { updates } = action
			return { ...state, ...updates }
		}

		default:
			return state
	}
}

export default userSubscriptionReducer
