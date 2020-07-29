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

//-----------------------------------------------------------------------------
// Initial Data
//-----------------------------------------------------------------------------
declare global {
	const initialData: IInitialData
	interface IInitialData {
		active: IUserActive
		lists: IList[]
		sublists: ISublist[] // Only the initially active list sends this
		sublistTags: ISublistTag[] // Only the initially active list sends this
		todos: ITodo[] // Only the initially active list sends this
		tags: ITag[] // Only the initially active list sends this
		todoTags: ITodoTag[] // Only the initially active list sends this
	}
}
export {} // Typescript needs this file to be a module
