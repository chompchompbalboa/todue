//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'

import { ITodo } from '@/state/todo/types'

import TodoSummaryActionsAction from '@native/Todo/TodoSummaryActionsAction'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoSummaryActionsMoveList = ({
  todoId
}: ITodoSummaryActionsMoveList) => {

  return (
    <TodoSummaryActionsAction
      icon="list"
      text="Move To"/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoSummaryActionsMoveList {
  todoId: ITodo['id']
}

export default TodoSummaryActionsMoveList
