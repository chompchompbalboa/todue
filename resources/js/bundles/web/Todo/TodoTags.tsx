//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'

import { ITodo } from '@/state/todo/types'

import TodoSection from '@web/Todo/TodoSection'
import TodoTagsCreateTodoTag from '@web/Todo/TodoTagsCreateTodoTag'
import TodoTagsTags from '@web/Todo/TodoTagsTags'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoTags = ({
  todoId
}: ITodoTags) => {

  return (
      <TodoSection
        header="Tags"
        headerMarginBottom="0"
        marginBottom="0">
        <TodoTagsCreateTodoTag
          todoId={todoId}/>
        <TodoTagsTags 
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
