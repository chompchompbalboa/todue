import { IList } from '@/state/list/types'
import { ITodo } from '@/state/todo/types'

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

export interface ITodoTag {
  id: string
  listId: IList['id']
  todoId: ITodo['id']
  tagId: ITag['id']
}