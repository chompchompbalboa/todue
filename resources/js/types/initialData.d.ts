//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IListFromDatabase } from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Initial Data
//-----------------------------------------------------------------------------
declare global {
	const initialData: IInitialData
	interface IInitialData {
		lists: IListFromDatabase[]
	}
}
export {} // Typescript needs this file to be a module
