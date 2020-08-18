//-----------------------------------------------------------------------------
// Initial
//-----------------------------------------------------------------------------
import defaultInitialData from '@/state/initialData'
import { IUser } from '@/state/user/types'
import { 
  IUserActions, 
  UPDATE_USER
} from '@/state/user/actions'

//-----------------------------------------------------------------------------
// Initial
//-----------------------------------------------------------------------------
export const initialState: IUser = typeof initialData !== 'undefined' ? initialData.user : defaultInitialData.user

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const userReducer = (state = initialState, action: IUserActions): IUser => {
	switch (action.type) {
    
		case UPDATE_USER: {
			const { updates } = action
			return { ...state, ...updates }
		}

		default:
			return state
	}
}

export default userReducer
