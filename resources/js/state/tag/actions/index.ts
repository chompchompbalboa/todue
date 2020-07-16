//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IAllTags } from '@/state/tag/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type ITagActions = ITagAction

export { createListTag } from '@/state/tag/actions/createListTag'

//-----------------------------------------------------------------------------
// Tag Action
//-----------------------------------------------------------------------------
export const SET_ALL_TAGS = 'SET_ALL_TAGS'
interface ITagAction {
  type: typeof SET_ALL_TAGS
  nextAllTags: IAllTags
}

export const setAllTags = (nextAllTags: IAllTags): ITagActions => {
	return {
		type: SET_ALL_TAGS,
		nextAllTags
	}
}