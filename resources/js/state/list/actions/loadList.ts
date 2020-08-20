//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { query } from '@/api'

import { IAppState } from '@/state'
import { IThunkDispatch } from '@/state/types'
import { IList } from '@/state/list/types'
import { ISublist } from '@/state/sublist/types'
import { ISublistTag } from '@/state/sublistTag/types'
import { ITag } from '@/state/tag/types'
import { ITodo } from '@/state/todo/types'
import { ITodoNote } from '@/state/todoNote/types'
import { ITodoTag } from '@/state/todoTag/types'

import { setLoadedLists } from '@/state/list/actions'
import { loadSublists } from '@/state/sublist/actions'
import { loadSublistTags } from '@/state/sublistTag/actions'
import { loadTags } from '@/state/tag/actions'
import { loadTodos } from '@/state/todo/actions'
import { loadTodoNotes } from '@/state/todoNote/actions'
import { loadTodoTags } from '@/state/todoTag/actions'

//-----------------------------------------------------------------------------
// Action
//-----------------------------------------------------------------------------
export const loadList = (
  listId: IList['id']
) => {
	return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    query.loadList(listId).then(response => {
      if(response.status === 200) {
        const {
          list: {
            loadedLists
          }
        } = getState()
        // Note: The order these are loaded in matters. Don't change it unlesss
        // you know what you're doing.
        dispatch(loadSublists(response.data.sublists as ISublist[]))
        dispatch(loadTags(response.data.tags as ITag[]))
        dispatch(loadSublistTags(response.data.sublistTags as ISublistTag[]))
        dispatch(loadTodos(response.data.todos as ITodo[]))
        dispatch(loadTodoNotes(response.data.todoNotes as ITodoNote[]))
        dispatch(loadTodoTags(response.data.todoTags as ITodoTag[]))
        setTimeout(() => {
          dispatch(setLoadedLists(new Set([ ...loadedLists, listId ])))
        }, 150)
      }
    })
	}
}