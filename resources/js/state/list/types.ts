export interface IAllLists { [listId: string]: IList }

export interface IList {
  id: string
  name: string
}

export interface IListUpdates {
  name?: IList['name']
}