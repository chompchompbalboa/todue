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
export const TodoTime = ({
  todoId
}: ITodoTime) => {

  // Redux
  const dispatch = useDispatch()
  const todoTimeStart = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].timeStart)
  const todoTimeEnd = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].timeEnd)

  return (
    <Container>
      <Timepicker
        label="Start Time"
        onTimeChange={nextTime => {
          dispatch(updateTodo(todoId, 
            { timeStart: nextTime },
            { timeStart: todoTimeStart },
            true
          ))
        }}
        value={todoTimeStart}/>
      <TimeSeparator>-</TimeSeparator>
      <Timepicker
        label="End Time"
        onTimeChange={nextTime => {
          dispatch(updateTodo(todoId, 
            { timeEnd: nextTime },
            { timeEnd: todoTimeEnd },
            true
          ))
        }}
        value={todoTimeEnd}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoTime {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const TimeSeparator = styled.Text`
  padding: 0 8px;
`

export default TodoTime
