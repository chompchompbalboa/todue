//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { IAllTags } from '@/state/tag/types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type ITagActions = ITagAction

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