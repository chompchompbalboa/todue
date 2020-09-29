//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
//import { useSelector } from 'react-redux'

//import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import TodoItem from '@native/Todo/TodoItem'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoTags = ({
  todoId
}: ITodoTags) => {

  // Redux
  //const todoTags = useSelector((state: IAppState) => todoId && state.todoTag.todoTagsByTodoId[todoId])
  return (
    <TodoItem
      icon="tag"
      label="Tags"/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoTags {
  todoId: ITodo['id']
}

export default TodoTags
