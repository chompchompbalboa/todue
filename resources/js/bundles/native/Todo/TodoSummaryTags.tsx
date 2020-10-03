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
export const TodoSummaryTags = ({
}: ITodoSummaryTags) => {
  return (
    <TodoItem
      icon={editorConfig['TAGS'].icon}
      label={editorConfig['TAGS'].label}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoSummaryTags {
  todoId: ITodo['id']
}

export default TodoSummaryTags
