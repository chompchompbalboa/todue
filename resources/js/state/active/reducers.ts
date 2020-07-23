//-----------------------------------------------------------------------------
// Initial
//-----------------------------------------------------------------------------
import defaultInitialData from '@/state/initialData'

import { IList } from '@/state/list/types'
import { ITodo } from '@/state/todo/types'

import { 
  IActiveActions,
  UPDATE_ACTIVE_IS_COMPLETED_TODOS_VISIBLE,
  UPDATE_ACTIVE_LIST_ID,
  UPDATE_ACTIVE_TODO_ID
} from '@/state/active/actions'

//-----------------------------------------------------------------------------
// Initial State
//-----------------------------------------------------------------------------
const initialListData = typeof initialData !== 'undefined' ? initialData.lists : defaultInitialData.lists
export type IActiveState = {
  listId: IList['id']
  todoId: ITodo['id']
  isCompletedTodosVisible: boolean
}

export const initialState: IActiveState = {
  listId: initialListData.length > 0 ? initialListData[0].id : null,
  todoId: null,
  isCompletedTodosVisible: false
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const active = (state = initialState, action: IActiveActions): IActiveState => {
	switch (action.type) {

    case UPDATE_ACTIVE_IS_COMPLETED_TODOS_VISIBLE: {
      const { nextActiveIsCompletedTodosVisible } = action
      return {
        ...state,
        isCompletedTodosVisible: nextActiveIsCompletedTodosVisible
      }
    }

    case UPDATE_ACTIVE_LIST_ID: {
      const { nextActiveListId } = action
      return {
        ...state,
        listId: nextActiveListId
      }
    }

    case UPDATE_ACTIVE_TODO_ID: {
      const { nextActiveTodoId } = action
      return {
        ...state,
        todoId: nextActiveTodoId
      }
    }

		default:
			return state
	}
}

export default active
