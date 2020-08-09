import { IList } from '@/state/list/types'
import { ITodo } from '@/state/todo/types'

export interface IAllTodoNotes { [todoNoteId: string]: ITodoNote }

export interface ITodoNote {
  id: string
  listId: IList['id']
  todoId: ITodo['id']
  value: string
  createdAt: string
}

export interface ITodoNoteUpdates {
  value?: string
}