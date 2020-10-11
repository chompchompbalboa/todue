//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

import TodoSummaryActionsAction from '@native/Todo/TodoSummaryActionsAction'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoSummaryActionsBacklog = ({
  todoId
}: ITodoSummaryActionsBacklog) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCurrent = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.dateCurrent)

  return (
    <TodoSummaryActionsAction
      icon="inbox"
      onPress={todoDateCurrent !== null
        ? () => dispatch(updateTodo(todoId, { dateCurrent: null }, null, true))
        : null
      }
      text="Backlog"/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoSummaryActionsBacklog {
  todoId: ITodo['id']
}

export default TodoSummaryActionsBacklog
