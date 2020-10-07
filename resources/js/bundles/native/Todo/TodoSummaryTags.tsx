//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { 
  IActiveEditor,
  editorConfig
} from '@native/Todo/Todo'

import TodoItem from '@native/Todo/TodoItem'
import TodoSummaryTagsTag from '@native/Todo/TodoSummaryTagsTag'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoSummaryTags = ({
  todoId,
  openEditor
}: ITodoSummaryTags) => {

  // Redux
  const todoTags = useSelector((state: IAppState) => state.todoTag.todoTagsByTodoId[todoId])
  
  return (
    <TodoItem
      icon={editorConfig['TAGS'].icon}
      label={editorConfig['TAGS'].label}
      onPress={() => openEditor('TAGS')}>
      {todoTags && todoTags.map(todoTagId => (
        <TodoSummaryTagsTag
          key={todoTagId}
          todoTagId={todoTagId}/>
      ))}
    </TodoItem>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoSummaryTags {
  todoId: ITodo['id']
  openEditor(nextActiveEditor: IActiveEditor): void
}

export default TodoSummaryTags
