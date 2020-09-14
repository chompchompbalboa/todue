//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { ITagState } from '@/state/tag/reducers'
import { 
  IAllTags,
  ITag,
  ITagUpdates
} from '@/state/tag/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type ITagActions = 
	IClearState | 
	ISetAllTags | 
	ISetTagsByListId | 
	IUpdateTag

export { createListTag } from '@/state/tag/actions/createListTag'
export { loadTags } from '@/state/tag/actions/loadTags'
export { updateTag } from '@/state/tag/actions/updateTag'

//-----------------------------------------------------------------------------
// Clear State
//-----------------------------------------------------------------------------
export const CLEAR_STATE = 'CLEAR_STATE'
interface IClearState {
  type: typeof CLEAR_STATE
}

export const clearState = (): ITagActions => {
	return {
		type: CLEAR_STATE
	}
}

//-----------------------------------------------------------------------------
// Tag Action
//-----------------------------------------------------------------------------
export const SET_TAGS_BY_LIST_ID = 'SET_TAGS_BY_LIST_ID'
interface ISetTagsByListId {
  type: typeof SET_TAGS_BY_LIST_ID
  nextTagsByListId: ITagState['tagsByListId']
}

export const setTagsByListId = (nextTagsByListId: ITagState['tagsByListId']): ITagActions => {
	return {
		type: SET_TAGS_BY_LIST_ID,
		nextTagsByListId
	}
}

//-----------------------------------------------------------------------------
// Tag Action
//-----------------------------------------------------------------------------
export const SET_ALL_TAGS = 'SET_ALL_TAGS'
interface ISetAllTags {
  type: typeof SET_ALL_TAGS
  nextAllTags: IAllTags
}

export const setAllTags = (nextAllTags: IAllTags): ITagActions => {
	return {
		type: SET_ALL_TAGS,
		nextAllTags
	}
}

//-----------------------------------------------------------------------------
// Set Lists
//-----------------------------------------------------------------------------
export const UPDATE_TAG = 'UPDATE_TAG'
interface IUpdateTag {
  type: typeof UPDATE_TAG
  tagId: ITag['id']
  updates: ITagUpdates
}

export const updateTagReducer = (tagId: ITag['id'], updates: ITagUpdates): ITagActions => {
	return {
		type: UPDATE_TAG,
		tagId,
    updates
	}
}