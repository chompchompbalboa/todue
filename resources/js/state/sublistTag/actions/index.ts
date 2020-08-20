//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { ISublistTagState } from '@/state/sublistTag/reducers'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type ISublistTagActions = 
ISetAllSublistTags |
ISetSublistTagsBySublistId

export { createSublistTag } from '@/state/sublistTag/actions/createSublistTag'
export { deleteSublistTag } from '@/state/sublistTag/actions/deleteSublistTag'
export { loadSublistTags } from '@/state/sublistTag/actions/loadSublistTags'

//-----------------------------------------------------------------------------
// Set All Sublist Tags
//-----------------------------------------------------------------------------
export const SET_ALL_SUBLIST_TAGS = 'SET_ALL_SUBLIST_TAGS'
interface ISetAllSublistTags {
  type: typeof SET_ALL_SUBLIST_TAGS
  nextAllSublistTags: ISublistTagState['allSublistTags']
}

export const setAllSublistTags = (nextAllSublistTags: ISublistTagState['allSublistTags']): ISublistTagActions => {
	return {
		type: SET_ALL_SUBLIST_TAGS,
		nextAllSublistTags
	}
}

//-----------------------------------------------------------------------------
// Set Sublist Tags By Sublist Id
//-----------------------------------------------------------------------------
export const SET_SUBLIST_TAGS_BY_SUBLIST_ID = 'SET_SUBLIST_TAGS_BY_SUBLIST_ID'
interface ISetSublistTagsBySublistId {
  type: typeof SET_SUBLIST_TAGS_BY_SUBLIST_ID
  nextSublistTagsBySublistId: ISublistTagState['sublistTagsBySublistId']
}

export const setSublistTagsBySublistId = (nextSublistTagsBySublistId: ISublistTagState['sublistTagsBySublistId']): ISublistTagActions => {
	return {
		type: SET_SUBLIST_TAGS_BY_SUBLIST_ID,
		nextSublistTagsBySublistId
	}
}