export interface IUser {
	id: string
	email: string
}

export interface IUserUpdates {
	id?: IUser['id']
  email?: IUser['email']
}
