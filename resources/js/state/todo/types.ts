import { IList } from '@/state/list/types'
import { ITag, ITodoTag } from '@/state/tag/types'

export interface IAllTodos { [todoId: string]: ITodo }

export interface ITodo {
  id: string
  listId: IList['id']
  text: string
  dateCreated: string
  dateCurrent: string
  dateCompleted: string
  timeStart: string
  timeEnd: string
  priority: number
  tags: ITag['id'][]
}

export interface ITodoUpdates {
  text?: ITodo['text']
  dateCurrent?: ITodo['dateCurrent']
  dateCompleted?: ITodo['dateCompleted']
  timeStart?: ITodo['timeStart']
  timeEnd?: ITodo['timeEnd']
  priority?: ITodo['priority']
  tags?: ITodo['tags']
}

export interface ITodoFromDatabase {
  id: string
  listId: IList['id']
  text: string
  dateCreated: string
  dateCurrent: string
  dateCompleted: string
  timeStart: string
  timeEnd: string
  priority: number
  tags: ITodoTag[]
}