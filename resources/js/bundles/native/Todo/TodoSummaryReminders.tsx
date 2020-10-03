//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'

import { ITodo } from '@/state/todo/types'

import { editorConfig } from '@native/Todo/Todo'

import TodoItem from '@native/Todo/TodoItem'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoReminders = ({
}: ITodoReminders) => {
  return (
    <TodoItem
      icon={editorConfig['REMINDERS'].icon}
      label={editorConfig['REMINDERS'].label} />
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoReminders {
  todoId: ITodo['id']
}

export default TodoReminders
