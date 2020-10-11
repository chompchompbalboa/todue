//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

import TodoSummaryActionsAction from '@native/Todo/TodoSummaryActionsAction'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoSummaryActionsAddDay = ({
  todoId
}: ITodoSummaryActionsAddDay) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCurrent = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.dateCurrent)

  const isTodoBacklogged = todoDateCurrent === null

  const nextTodoDateCurrent = !isTodoBacklogged
    ? moment(todoDateCurrent).add(1, 'day').format()
    : moment().format()

  return (
    <TodoSummaryActionsAction
      icon={!isTodoBacklogged ? "corner-up-right" : "calendar"}
      onPress={() => dispatch(updateTodo(todoId, { dateCurrent: nextTodoDateCurrent }, null, true))}
      text={!isTodoBacklogged ? "+1 Day" : "Today"}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoSummaryActionsAddDay {
  todoId: ITodo['id']
}

export default TodoSummaryActionsAddDay
