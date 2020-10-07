//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { Animated } from 'react-native'
import styled from 'styled-components/native'

import { ITodo } from '@/state/todo/types'
import { IActiveEditor } from '@native/Todo/Todo'

import { Feather } from '@expo/vector-icons'

import TodoSummaryDate from '@native/Todo/TodoSummaryDate'
import TodoSummaryPriority from '@/bundles/native/Todo/TodoSummaryPriority'
import TodoSummaryText from '@native/Todo/TodoSummaryText'
import TodoSummaryTime from '@/bundles/native/Todo/TodoSummaryTime'
import TodoSummaryReminders from '@/bundles/native/Todo/TodoSummaryReminders'
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
      <TodoSummaryReminders
        todoId={todoId}/>
      <TodoSummaryTags
        todoId={todoId}
        openEditor={openEditor}/>
      <TodoRow>
        <TodoButton>
          <TodoButtonIcon>
            <Feather
              name="corner-up-right"
              size={26}
              color="rgb(50, 50, 50)"/>
          </TodoButtonIcon>
          <TodoButtonText>
            Tomorrow
          </TodoButtonText>
        </TodoButton>
        <TodoButton>
          <TodoButtonIcon>
            <Feather
              name="inbox"
              size={26}
              color="rgb(50, 50, 50)"/>
          </TodoButtonIcon>
          <TodoButtonText>
            Backlog
          </TodoButtonText>
        </TodoButton>
        <TodoButton>
          <TodoButtonIcon>
            <Feather
              name="list"
              size={26}
              color="rgb(50, 50, 50)"/>
          </TodoButtonIcon>
          <TodoButtonText>
            Move To
          </TodoButtonText>
        </TodoButton>
      </TodoRow>
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

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const TodoRow = styled.View`
  width: 100%;
  padding: 10px 5px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const TodoButton = styled.View`
  margin: 4px;
  padding: 12px 0;
  width: 30%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(240, 240, 240);
`
const TodoButtonIcon = styled.View`
  justify-content: center;
  align-items: center;
`
const TodoButtonText = styled.Text`
  margin-top: 4px;
  font-size: 16px;
  font-family: OpenSans_600SemiBold;
`

export default TodoSummary
