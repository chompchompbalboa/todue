//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

import TodoAction from '@web/Todo/TodoAction'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoActionsNextWeek = ({
  todoId
}: ITodoActionsNextWeek) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCurrent = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].dateCurrent)

  // Next Week
  const nextWeek = todoDateCurrent && moment(todoDateCurrent).isAfter(moment(), 'day')
    ? moment(todoDateCurrent).add(1, 'w')
    : moment().add(1, 'w')

  return (
    <TodoAction
      iconText={nextWeek.format('D')}
      onClick={() => {
        dispatch(updateTodo(todoId, 
          { dateCurrent: nextWeek.format('YYYY-MM-DD HH:mm:ss') },
          { dateCurrent: todoDateCurrent },
          true
        ))
      }}
      text="+1 Week"/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoActionsNextWeek {
  todoId: ITodo['id']
}

export default TodoActionsNextWeek
