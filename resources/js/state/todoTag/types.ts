import { IList } from '@/state/list/types'
import { ITag } from '@/state/tag/types'
import { ITodo } from '@/state/todo/types'

export interface IAllTodoTags { [todoTagId: string]: ITodoTag }

export interface ITodoTag {
  id: string
  listId: IList['id']
  todoId: ITodo['id']
  tagId: ITag['id']
}