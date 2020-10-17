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
export const TodoActionsTomorrow = ({
  todoId
}: ITodoActionsTomorrow) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCurrent = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].dateCurrent)

  // Tomorrow
  const tomorrow = moment().add(1, 'd')

  return (
    <TodoAction
      iconText={tomorrow.format('D')}
      onClick={() => {
        dispatch(updateTodo(todoId, 
          { dateCurrent: tomorrow.format('YYYY-MM-DD HH:mm:ss') },
          { dateCurrent: todoDateCurrent },
          true
        ))
      }}
      text="Tomorrow"/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoActionsTomorrow {
  todoId: ITodo['id']
}

export default TodoActionsTomorrow
