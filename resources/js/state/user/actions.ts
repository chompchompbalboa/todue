//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { 
	IUser,
	IUserUpdates 
} from '@/state/user/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type IUserActions = 
	ILoadUser |
	IUpdateUser

//-----------------------------------------------------------------------------
// Load User
//-----------------------------------------------------------------------------
export const LOAD_USER = 'LOAD_USER'
interface ILoadUser {
  type: typeof LOAD_USER
  nextUser: IUser
}

export const loadUser = (nextUser: IUser): IUserActions => {
  return {
    type: LOAD_USER,
    nextUser
  }
}

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