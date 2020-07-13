//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'

import { ITodo } from '@/state/todo/types'

import TodoSection from '@web/Todo/TodoSection'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoPriority = ({
  todoId
}: ITodoPriority) => {

  return (
      <TodoSection
        header="Priority">
      </TodoSection>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoPriority {
  todoId: ITodo['id']
}

export default TodoPriority
