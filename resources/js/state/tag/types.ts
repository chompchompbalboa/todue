import { IList } from '@/state/list/types'

export interface IAllTags { [tagId: string]: ITag }

export interface ITag {
  id: string
  listId: IList['id']
  text: string
  backgroundColor: string
}

export interface ITagUpdates {
  backgroundColor?: ITag['backgroundColor']
}