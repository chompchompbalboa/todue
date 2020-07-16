//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
//import { useSelector } from 'react-redux'

//import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import TodoSection from '@web/Todo/TodoSection'
import TodoTagsCreateTodoTag from '@web/Todo/TodoTagsCreateTodoTag'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoTags = ({
  todoId
}: ITodoTags) => {
  
  // Redux

  return (
      <TodoSection
        header="Tags">
        <TodoTagsCreateTodoTag
          todoId={todoId}/>
      </TodoSection>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoTags {
  todoId: ITodo['id']
}

export default TodoTags
