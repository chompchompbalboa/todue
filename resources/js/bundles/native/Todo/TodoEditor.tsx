//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { Animated } from 'react-native'
import styled from 'styled-components/native'

import { ITodo } from '@/state/todo/types'
import { IActiveEditor } from '@native/Todo/Todo'

import GestureRecognizer from 'react-native-swipe-gestures'
import TodoEditorDate from '@native/Todo/TodoEditorDate'

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
      <StyledGestureRecognizer
        onSwipeRight={closeEditor}>
        <TodoEditorDate
          todoId={todoId}
          isVisible={activeEditor === 'DATE'}/>
      </StyledGestureRecognizer>
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

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledGestureRecognizer = styled(GestureRecognizer)`
`

export default TodoEditor
