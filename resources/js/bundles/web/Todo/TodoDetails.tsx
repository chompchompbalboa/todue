//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'

import { ITodo } from '@/state/todo/types'

import TodoBacklog from '@web/Todo/TodoBacklog'
import TodoDate from '@web/Todo/TodoDate'
import TodoPriority from '@web/Todo/TodoPriority'
import TodoTime from '@web/Todo/TodoTime'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoDetails = ({
  todoId
}: ITodoDetails) => {
  return (
    <>
      <TodoDate
        todoId={todoId}/>
      <TodoBacklog
        todoId={todoId}/>
      <TodoPriority
        todoId={todoId}/>
      <TodoTime
        todoId={todoId}/>
    </>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoDetails {
  todoId: ITodo['id']
}

export default TodoDetails
