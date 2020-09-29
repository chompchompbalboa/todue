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
import TodoPriority from '@native/Todo/TodoPriority'
import TodoReminders from '@native/Todo/TodoReminders'
import TodoTags from '@native/Todo/TodoTags'
import TodoTime from '@native/Todo/TodoTime'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoSummary = ({
  todoId,
  openEditor,
  summaryLeft
}: ITodoSummary) => {

  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: '100%',
        top: 0,
        left: summaryLeft
      }}>
      <TodoSummaryDate
        todoId={todoId}
        openEditor={openEditor}/>
      <TodoPriority
        todoId={todoId}/>
      <TodoTime
        todoId={todoId}/>
      <TodoReminders
        todoId={todoId}/>
      <TodoTags
        todoId={todoId}/>
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
