//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IUserUpdates } from '@/state/user/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type IUserActions = IUpdateUser

//-----------------------------------------------------------------------------
// Update User
//-----------------------------------------------------------------------------
export const UPDATE_USER = 'UPDATE_USER'
interface IUpdateUser {
	type: typeof UPDATE_USER
	updates: IUserUpdates
}

export const updateUser = (updates: IUserUpdates): IUserActions => {
	return {
		type: UPDATE_USER,
		updates: updates,
	}
}