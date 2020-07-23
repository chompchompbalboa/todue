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
  listId: IList['id']
  name: string
  todos: ITodo['id'][]
  sublists: ISublist['id'][]
  visibleTodos: ITodo['id'][]
}

export interface IListUpdates {
  name?: IList['name']
  todos?: IList['todos']
  visibleTodos?: IList['visibleTodos']
}

export interface IListFromDatabase {
  id: IList['id']
  listId: IList['listId']
  name: IList['name']
  sublists: ISublist[]
  todos?: ITodo[] // Only the initially active list sends this
  tags?: ITag[] // Only the initially active list sends this
}

export type ISublist = Pick<IList, 'id' | 'listId' | 'name'>