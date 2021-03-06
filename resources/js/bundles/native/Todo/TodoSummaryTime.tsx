//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'

import datetime from '@/utils/datetime'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { 
  IActiveEditor,
  editorConfig
} from '@native/Todo/Todo'

import TodoItem from '@native/Todo/TodoItem'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoSummaryTime = ({
  todoId,
  openEditor
}: ITodoSummaryTime) => {

  // Redux
  const todoTimeStart = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId]?.timeStart)
  const todoTimeEnd = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId]?.timeEnd)

  const timeText = todoTimeStart === null
    ? null
    : todoTimeEnd === null
      ? datetime.twentyFourHourToTwelveHour(todoTimeStart) + ''
      : datetime.twentyFourHourToTwelveHour(todoTimeStart) + ' - ' + datetime.twentyFourHourToTwelveHour(todoTimeEnd)

  return (
    <TodoItem
      icon={editorConfig['TIME'].icon}
      label={editorConfig['TIME'].label}
      onPress={() => openEditor('TIME')}
      text={timeText}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoSummaryTime {
  todoId: ITodo['id']
  openEditor(nextActiveEditor: IActiveEditor): void
}

export default TodoSummaryTime
