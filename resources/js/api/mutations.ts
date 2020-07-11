//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import axios from '@/api/axios'

import { 
	IList,
	IListUpdates 
} from '@/state/list/types'

//-----------------------------------------------------------------------------
// Mutations
//-----------------------------------------------------------------------------
export const createList = async (list: IList) => {
	return axios.post('api/list', list)
}

export const deleteList = async (listId: IList['id']) => {
	return axios.delete('api/list/' + listId)
}

export const updateList = async (listId: IList['id'], updates: IListUpdates) => {
	return axios.patch('api/list/' + listId, updates)
}

