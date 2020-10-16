//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { TIME } from '@/assets/icons'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

import Timepicker from '@/components/Timepicker'
import TodoItem from '@web/Todo/TodoItem'

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
    <TodoItem
      icon={TIME}
      label="Time">
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
    </TodoItem>
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
const Separator = styled.div`
  padding: 0 0.5rem;
`

export default TodoTime
