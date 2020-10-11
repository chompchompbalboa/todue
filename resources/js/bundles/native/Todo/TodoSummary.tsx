//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { Animated } from 'react-native'

import { ITodo } from '@/state/todo/types'
import { IActiveEditor } from '@native/Todo/Todo'

import TodoSummaryActions from '@native/Todo/TodoSummaryActions'
import TodoSummaryDate from '@native/Todo/TodoSummaryDate'
import TodoSummaryPriority from '@/bundles/native/Todo/TodoSummaryPriority'
import TodoSummaryText from '@native/Todo/TodoSummaryText'
import TodoSummaryTime from '@/bundles/native/Todo/TodoSummaryTime'
import TodoSummaryTags from '@/bundles/native/Todo/TodoSummaryTags'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoSummary = ({
  todoId,
  isTodoVisible,
  openEditor,
  summaryLeft
}: ITodoSummary) => {

  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: '100%',
        paddingTop: 10,
        top: 0,
        left: summaryLeft
      }}>
      <TodoSummaryText
        todoId={todoId}
        openEditor={openEditor}
        isTodoVisible={isTodoVisible}/>
      <TodoSummaryDate
        todoId={todoId}
        openEditor={openEditor}/>
      <TodoSummaryTime
        todoId={todoId}
        openEditor={openEditor}/>
      <TodoSummaryPriority
        todoId={todoId}/>
      <TodoSummaryTags
        todoId={todoId}
        openEditor={openEditor}/>
      <TodoSummaryActions
        todoId={todoId}/>
    </Animated.View>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoSummary {
  todoId: ITodo['id']
  isTodoVisible: boolean
  openEditor(nextActiveEditor: IActiveEditor): void
  summaryLeft: Animated.Value
}

export default TodoSummary
