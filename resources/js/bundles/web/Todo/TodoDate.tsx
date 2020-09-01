//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

import Datepicker from '@/components/Datepicker'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoDate = ({
  todoId
}: ITodoDate) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCurrent = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].dateCurrent)

  return (
    <Datepicker
      value={todoDateCurrent}
      onDateChange={nextDate => {
        dispatch(updateTodo(todoId, 
          { dateCurrent: moment(nextDate).format('YYYY-MM-DD HH:mm:ss') },
          { dateCurrent: todoDateCurrent },
          true
        ))
    }}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoDate {
  todoId: ITodo['id']
}

export default TodoDate
