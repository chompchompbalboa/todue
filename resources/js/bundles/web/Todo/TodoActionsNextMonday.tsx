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
export const TodoActionsMonday = ({
  todoId
}: ITodoActionsMonday) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCurrent = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].dateCurrent)

  // Monday
  const monday = moment().day() === 0
    ? moment().day(1)
    : moment().add(1, 'week').day(1)

  return (
    <TodoAction
      iconText={monday.format('D')}
      onClick={() => {
        dispatch(updateTodo(todoId, 
          { dateCurrent: monday.format('YYYY-MM-DD HH:mm:ss') },
          { dateCurrent: todoDateCurrent },
          true
        ))
      }}
      text="Monday"/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoActionsMonday {
  todoId: ITodo['id']
}

export default TodoActionsMonday
