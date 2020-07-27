//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { ITagState } from '@/state/tag/reducers'
import { IAllTags } from '@/state/tag/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type ITagActions = ISetAllTags | ISetTagsByListId

export { createListTag } from '@/state/tag/actions/createListTag'

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