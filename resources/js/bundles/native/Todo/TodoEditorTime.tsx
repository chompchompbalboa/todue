//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

import Timepicker from '@/components/native/Timepicker'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoEditorTime = ({
  todoId,
  isVisible
}: ITodoEditorTime) => {

  // Redux
  const dispatch = useDispatch()
  const todoTimeStart = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.timeStart)
  const todoTimeEnd = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.timeEnd)

  return (
    <Container
      isVisible={isVisible}>
      <ClearTimesTouchable
        onPress={() => dispatch(updateTodo(todoId, { timeStart: null, timeEnd: null }))}>
        <ClearTimes>
          <ClearTimesButton>
            Clear Times
          </ClearTimesButton>
        </ClearTimes>
      </ClearTimesTouchable>
      <Timepicker
        label="Start Time"
        onTimeChange={nextTimeStart => dispatch(updateTodo(todoId, { timeStart: nextTimeStart }))}
        value={todoTimeStart}/>
      <Timepicker
        label="End Time"
        onTimeChange={nextTimeEnd => dispatch(updateTodo(todoId, { timeEnd: nextTimeEnd }))}
        value={todoTimeEnd}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoEditorTime {
  todoId: ITodo['id']
  isVisible: boolean
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  display: ${ ({ isVisible }: IContainer) => isVisible ? 'flex' : 'none' };
  margin: 10px 0;
`
interface IContainer {
  isVisible: boolean
}

const ClearTimesTouchable = styled.TouchableWithoutFeedback``
const ClearTimes = styled.View`
  width: 100%;
  border-radius: 10px;
  background-color: rgb(200, 0, 0);
  padding: 10px;
`
const ClearTimesButton = styled.Text`
  color: white;
  text-align: center;
  font-family: OpenSans_600SemiBold;
  font-size: 18px;
`

export default TodoEditorTime
