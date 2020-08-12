//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { initialState as initialActiveState } from '@/state/active/reducers'
import { initialState as initialHistoryState } from '@/state/history/reducers'
import { initialState as initialListState } from '@/state/list/reducers'
import { initialState as initialSublistState } from '@/state/sublist/reducers'
import { initialState as initialSublistTagState } from '@/state/sublistTag/reducers'
import { initialState as initialTagState } from '@/state/tag/reducers'
import { initialState as initialTodoState } from '@/state/todo/reducers'
import { initialState as initialTodoNoteState } from '@/state/todoNote/reducers'
import { initialState as initialTodoTagState } from '@/state/todoTag/reducers'

//-----------------------------------------------------------------------------
// Get Mock App State
//-----------------------------------------------------------------------------
export const getMockAppState = () => {
  return {
    active: initialActiveState,
    history: initialHistoryState,
    list: initialListState,
    sublist: initialSublistState,
    sublistTag: initialSublistTagState,
    tag: initialTagState,
    todo: initialTodoState,
    todoNote: initialTodoNoteState,
    todoTag: initialTodoTagState,
  }
}
export const mockAppState = getMockAppState()