export interface IAllLists { [listId: string]: IList }

export interface IList {
  id: string
  listId: IList['id']
  rootListId: IList['id']
  name: string
}

export interface IListUpdates {
  name?: IList['name']
}

export interface IListFromDatabase {
  id: IList['id']
  listId: IList['listId']
  rootListId: IList['rootListId']
  name: IList['name']
  sublists: IList['id'][]
}