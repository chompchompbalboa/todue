import { IList } from '@/state/list/types'

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
}

export interface ITodoUpdates {
  text?: ITodo['text']
  dateCurrent?: ITodo['dateCurrent']
  dateCompleted?: ITodo['dateCompleted']
  timeStart?: ITodo['timeStart']
  timeEnd?: ITodo['timeEnd']
}