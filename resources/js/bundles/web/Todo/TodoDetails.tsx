//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'

import { ITodo } from '@/state/todo/types'

import TodoBacklog from '@web/Todo/TodoBacklog'
import TodoTime from '@web/Todo/TodoTime'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoDetails = ({
  todoId
}: ITodoDetails) => {
  return (
    <>
      <TodoBacklog
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
