export interface IUser {
	id: string
	name: string
	email: string
}

export interface IUserUpdates {
	id?: IUser['id']
  email?: IUser['email']
  name?: IUser['name']
}
