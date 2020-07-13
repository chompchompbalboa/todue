//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { ITodo } from '@/state/todo/types'

//-----------------------------------------------------------------------------
// Types
//-----------------------------------------------------------------------------
export interface IAllLists { [listId: string]: IList }

export interface IList {
  id: string
  name: string
  todos: ITodo['id'][]
  visibleTodos: ITodo['id'][]
}

export interface IListUpdates {
  name?: IList['name']
  todos?: IList['todos']
  visibleTodos?: IList['visibleTodos']
}

export interface IListFromDatabase {
  id: IList['id']
  name: IList['name']
  todos?: ITodo[] // Only the initially active list sends this
}