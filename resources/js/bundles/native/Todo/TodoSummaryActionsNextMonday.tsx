//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

import TodoSummaryActionsAction from '@native/Todo/TodoSummaryActionsAction'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoSummaryActionsNextMonday = ({
  todoId
}: ITodoSummaryActionsNextMonday) => {

  // Redux
  const dispatch = useDispatch()

  // Next Monday
  const nextMonday = moment().day() === 0
    ? moment().day(1).format()
    : moment().add(1, 'week').day(1).format()

  return (
    <TodoSummaryActionsAction
      icon="arrow-right"
      onPress={() => dispatch(updateTodo(todoId, { dateCurrent: nextMonday }, null, true))}
      text="Monday"/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoSummaryActionsNextMonday {
  todoId: ITodo['id']
}

export default TodoSummaryActionsNextMonday
