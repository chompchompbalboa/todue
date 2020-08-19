export interface IUser {
	id: string
	name: string
	email: string
}

export interface IUserUpdates {
	id?: IUser['id']
  name?: IUser['name']
}
