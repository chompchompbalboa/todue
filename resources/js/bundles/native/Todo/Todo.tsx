//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect, useRef, useState } from 'react'
import { Animated, useWindowDimensions } from 'react-native'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'

import Modal from '@/components/native/Modal'
import TodoEditor from '@native/Todo/TodoEditor'
import TodoSummary from '@native/Todo/TodoSummary'
import TodoText from '@native/Todo/TodoText'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Todo = ({
  isTodoVisible,
  setIsTodoVisible
}: ITodoComponent) => {

  // Window Dimensions
  const { width: windowWidth } = useWindowDimensions()

  // Refs
  const editorLeft = useRef(new Animated.Value(windowWidth)).current
  const summaryLeft = useRef(new Animated.Value(0)).current

  // Redux
  const activeTodoId = useSelector((state: IAppState) => state.active.todoId)

  // State
  const [ activeEditor, setActiveEditor ] = useState(null as IActiveEditor)

  // Close Editor When Todo Closes
  useEffect(() => {
    if(!isTodoVisible && activeEditor !== null) {
      setTimeout(() => {
        closeEditor()
      }, EDITOR_OPEN_CLOSE_DURATION + 50)
    }
  }, [ isTodoVisible ])

  // Editor Open Close Duration
  const EDITOR_OPEN_CLOSE_DURATION = 150

  // Open Editor
  const openEditor = (nextActiveEditor: IActiveEditor) => {
    setActiveEditor(nextActiveEditor)
    Animated.timing(editorLeft, {
      useNativeDriver: false,
      toValue: 0,
      duration: EDITOR_OPEN_CLOSE_DURATION
    }).start()
    Animated.timing(summaryLeft, {
      useNativeDriver: false,
      toValue: -windowWidth,
      duration: EDITOR_OPEN_CLOSE_DURATION
    }).start()
  }

  // Close Editor
  const closeEditor = () => {  
    Animated.timing(editorLeft, {
      useNativeDriver: false,
      toValue: windowWidth,
      duration: EDITOR_OPEN_CLOSE_DURATION
    }).start()
    Animated.timing(summaryLeft, {
      useNativeDriver: false,
      toValue: 0,
      duration: EDITOR_OPEN_CLOSE_DURATION
    }).start()
    setTimeout(() => setActiveEditor(null), EDITOR_OPEN_CLOSE_DURATION + 50)
  }

  return (
    <Modal
      closeModal={() => setIsTodoVisible(false)}
      isVisible={isTodoVisible}
      stickyHeaderIndices={[ 0 ]}>
        <TodoText
          todoId={activeTodoId}/>
        <TodoContent>
          <TodoSummary
            todoId={activeTodoId}
            openEditor={openEditor}
            summaryLeft={summaryLeft}/>
          <TodoEditor
            todoId={activeTodoId}
            activeEditor={activeEditor}
            closeEditor={closeEditor}
            editorLeft={editorLeft}/>
        </TodoContent>
    </Modal>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoComponent {
  isTodoVisible: boolean
  setIsTodoVisible(nextIsTodoVisible: boolean): void
}

export type IActiveEditor = null | 'DATE' | 'TIME' | 'REMINDERS' | 'TAGS'

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const TodoContent = styled.View`
  position: relative;
`

export default Todo
