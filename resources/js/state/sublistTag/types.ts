import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'
import { ITag } from '@/state/tag/types'

export interface IAllSublistTags { [sublistTagId: string]: ISublistTag }

export interface ISublistTag {
  id: string
  listId: IList['id']
  sublistId: ISublist['id']
  tagId: ITag['id']
}