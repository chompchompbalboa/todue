//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IUserActive } from '@/state/active/types'
import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'
import { ISublistTag } from '@/state/sublistTag/types'
import { ITag } from '@/state/tag/types'
import { ITodo } from '@/state/todo/types'
import { ITodoTag } from '@/state/todoTag/types'
import { IUser } from '@/state/user/types'
import { IUserSubscription } from '@/state/userSubscription/types'

//-----------------------------------------------------------------------------
// Initial Data
//-----------------------------------------------------------------------------
declare global {
	const initialData: IInitialData
	interface IInitialData {
		accessToken: string
		csrfToken: string
		active: IUserActive
		lists: IList[]
		user: IUser
    userSubscription: IUserSubscription
	}
}
export {} // Typescript needs this file to be a module
