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
export const TodoActionsToday = ({
  todoId
}: ITodoActionsToday) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCurrent = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].dateCurrent)

  // Today
  const today = moment()

  return (
    <TodoAction
      isFirst
      iconText={today.format('D')}
      onClick={() => {
        dispatch(updateTodo(todoId, 
          { dateCurrent: today.format('YYYY-MM-DD HH:mm:ss') },
          { dateCurrent: todoDateCurrent },
          true
        ))
      }}
      text="Today"/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoActionsToday {
  todoId: ITodo['id']
}

export default TodoActionsToday
