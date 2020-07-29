import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'

export interface IUserActive {
  id: string
  listId: IList['id']
  sublistId: ISublist['id']
  isCompletedTodosVisible: boolean
}

export interface IUserActiveUpdates {
  listId?: IUserActive['listId']
  sublistId?: IUserActive['sublistId']
  isCompletedTodosVisible?: IUserActive['isCompletedTodosVisible']
}