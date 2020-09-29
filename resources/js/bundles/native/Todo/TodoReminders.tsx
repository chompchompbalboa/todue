//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'

import { ITodo } from '@/state/todo/types'

import TodoItem from '@native/Todo/TodoItem'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoReminders = ({
  todoId
}: ITodoReminders) => {
  false && console.log(todoId)
  return (
    <TodoItem
      icon="alert-circle"
      label="Reminders" />
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoReminders {
  todoId: ITodo['id']
}

export default TodoReminders
