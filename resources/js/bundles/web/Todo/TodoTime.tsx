//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

import Timepicker from '@/components/Timepicker'

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
      <Separator>-</Separator>
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
const Container = styled.div`
  margin-top: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Separator = styled.div`
  padding: 0 0.5rem;
`

export default TodoTime
