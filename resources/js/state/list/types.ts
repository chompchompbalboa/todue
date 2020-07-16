//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { ITag } from '@/state/tag/types'
import { ITodo } from '@/state/todo/types'

//-----------------------------------------------------------------------------
// Types
//-----------------------------------------------------------------------------
export interface IAllLists { [listId: string]: IList }

export interface IList {
  id: string
  name: string
  todos: ITodo['id'][]
  tags: ITag['id'][]
  visibleTodos: ITodo['id'][]
  isCompletedTodosVisible: boolean
}

export interface IListUpdates {
  name?: IList['name']
  todos?: IList['todos']
  tags?: IList['tags']
  visibleTodos?: IList['visibleTodos']
  isCompletedTodosVisible?: IList['isCompletedTodosVisible']
}

export interface IListFromDatabase {
  id: IList['id']
  name: IList['name']
  todos?: ITodo[] // Only the initially active list sends this
  tags?: ITag[] // Only the initially active list sends this
  isCompletedTodosVisible: boolean
}