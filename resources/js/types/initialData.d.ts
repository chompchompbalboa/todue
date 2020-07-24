//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IListFromDatabase } from '@/state/list/actions'
import { ITag } from '@/state/tag/types'
import { ITodoFromDatabase } from '@/state/todo/types'

//-----------------------------------------------------------------------------
// Initial Data
//-----------------------------------------------------------------------------
declare global {
	const initialData: IInitialData
	interface IInitialData {
		lists: IListFromDatabase[]
		todos: ITodoFromDatabase[] // Only the initially active list sends this
		tags: ITag[] // Only the initially active list sends this
	}
}
export {} // Typescript needs this file to be a module
