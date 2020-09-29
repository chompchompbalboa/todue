//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react' 
import moment from 'moment'
import { useSelector } from 'react-redux'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'
import { IActiveEditor } from '@native/Todo/Todo'

import TodoItem from '@native/Todo/TodoItem'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoDate = ({
  todoId,
  openEditor
}: ITodoDate) => {

  // Redux
  const todoDateCurrent = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.dateCurrent
    ? moment(state.todo.allTodos[todoId]?.dateCurrent).format('MMMM Do, YYYY')
    : null
  )

  return (
    <TodoItem
      icon="calendar"
      label="Date"
      onPress={() => openEditor('DATE')}
      text={todoDateCurrent}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoDate {
  todoId: ITodo['id']
  openEditor(nextActiveEditor: IActiveEditor): void
}

export default TodoDate
