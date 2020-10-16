//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'

import { TEXT } from '@/assets/icons'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import TodoItem from '@web/Todo/TodoItem'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoText = ({
  todoId
}: ITodoText) => {

  // Redux
  const todoText = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].text)

  return (
    <TodoItem
      icon={TEXT}
      label="Text"
      text={todoText || ''}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoText {
  todoId: ITodo['id']
}

export default TodoText
