import { IList } from '@/state/list/types'
import { ITag } from '@/state/tag/types'

export interface IAllSublists { [sublistId: string]: ISublist }

export interface ISublist {
  id: string
  listId: IList['id']
  name: string
  defaultTagId: ITag['id']
}

export interface ISublistUpdates {
  name?: ISublist['name']
  defaultTagId?: ISublist['defaultTagId']
}