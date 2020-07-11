//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import {
	IList
} from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Initial Data
//-----------------------------------------------------------------------------
declare global {
	const initialData: IInitialData
	interface IInitialData {
		lists: IList[]
	}
}
export {} // Typescript needs this file to be a module
