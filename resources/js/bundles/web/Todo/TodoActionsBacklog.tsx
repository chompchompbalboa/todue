//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'

import { BACKLOG } from '@/assets/icons'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

import TodoAction from '@web/Todo/TodoAction'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoActionsBacklog = ({
  todoId
}: ITodoActionsBacklog) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCurrent = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].dateCurrent)
  const todoTimeStart = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].timeStart)
  const todoTimeEnd = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].timeEnd)

  return (
    <TodoAction
      icon={BACKLOG}
      isLast
      onClick={() => {
        dispatch(updateTodo(todoId, 
          { dateCurrent: todoDateCurrent === null ? moment().format('YYYY-MM-DD HH:mm:ss') : null, timeStart: null, timeEnd: null },
          { dateCurrent: todoDateCurrent, timeStart: todoTimeStart, timeEnd: todoTimeEnd },
          true
        ))
      }}
      text="Backlog"/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoActionsBacklog {
  todoId: ITodo['id']
}

export default TodoActionsBacklog
