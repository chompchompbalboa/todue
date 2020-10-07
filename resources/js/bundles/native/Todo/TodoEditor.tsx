//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { Animated } from 'react-native'

import { ITodo } from '@/state/todo/types'
import { IActiveEditor } from '@native/Todo/Todo'

import TodoEditorDate from '@native/Todo/TodoEditorDate'
import TodoEditorHeader from '@native/Todo/TodoEditorHeader'
import TodoEditorTags from '@native/Todo/TodoEditorTags'
import TodoEditorTime from '@native/Todo/TodoEditorTime'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoEditor = ({
  todoId,
  activeEditor,
  closeEditor,
  editorLeft
}: ITodoEditor) => {

  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: '100%',
        top: 0,
        left: editorLeft,
        paddingLeft: 20,
        paddingRight: 20
      }}>
      <TodoEditorHeader
        activeEditor={activeEditor}
        closeEditor={closeEditor}/>
      <TodoEditorDate
        todoId={todoId}
        isVisible={activeEditor === 'DATE'}/>
      <TodoEditorTime
        todoId={todoId}
        isVisible={activeEditor === 'TIME'}/>
      <TodoEditorTags
        todoId={todoId}
        isVisible={activeEditor === 'TAGS'}/>
    </Animated.View>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoEditor {
  todoId: ITodo['id']
  activeEditor: IActiveEditor
  closeEditor(): void
  editorLeft: Animated.Value
}

export default TodoEditor
