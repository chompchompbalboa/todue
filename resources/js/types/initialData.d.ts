//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IActiveState } from '@/state/active/reducers'
import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'
import { ITag } from '@/state/tag/types'
import { ITodoFromDatabase } from '@/state/todo/types'

//-----------------------------------------------------------------------------
// Initial Data
//-----------------------------------------------------------------------------
declare global {
	const initialData: IInitialData
	interface IInitialData {
		active: {
			listId: IActiveState['listId']
		}
		lists: IList[]
		sublists: ISublist[]
		todos: ITodoFromDatabase[] // Only the initially active list sends this
		tags: ITag[] // Only the initially active list sends this
	}
}
export {} // Typescript needs this file to be a module
