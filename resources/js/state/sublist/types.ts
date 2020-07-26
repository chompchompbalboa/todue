import { IList } from '@/state/list/types'

export interface IAllSublists { [sublistId: string]: ISublist }

export interface ISublist {
  id: string
  listId: IList['id']
  name: string
}

export interface ISublistUpdates {
  name?: ISublist['name']
}