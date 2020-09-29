//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'

import datetime from '@/utils/datetime'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import TodoItem from '@native/Todo/TodoItem'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoTime = ({
  todoId
}: ITodoTime) => {

  // Redux
  const todoTimeStart = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].timeStart)
  const todoTimeEnd = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].timeEnd)

  const timeText = todoTimeStart === null
    ? null
    : todoTimeEnd === null
      ? datetime.twentyFourHourToTwelveHour(todoTimeStart) + ''
      : datetime.twentyFourHourToTwelveHour(todoTimeStart) + ' - ' + datetime.twentyFourHourToTwelveHour(todoTimeEnd)

  return (
    <TodoItem
      icon="clock"
      label="Time"
      text={timeText}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoTime {
  todoId: ITodo['id']
}

export default TodoTime
