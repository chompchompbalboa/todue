//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

import Datepicker from '@/components/Datepicker'
import Timepicker from '@/components/Timepicker'
import TodoSection from '@web/Todo/TodoSection'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoDateTime = ({
  todoId
}: ITodoDateTime) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCurrent = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].dateCurrent)
  const todoTimeStart = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].timeStart)
  const todoTimeEnd = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].timeEnd)

  return (
      <TodoSection
        header="">
        <Datepicker
          value={todoDateCurrent}
          onDateChange={nextDate => {
            dispatch(updateTodo(todoId, 
              { dateCurrent: moment(nextDate).format('YYYY-MM-DD HH:mm:ss') },
              { dateCurrent: todoDateCurrent },
              true
            ))
        }}/>
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
        <BacklogButton
          isBacklogged={todoDateCurrent === null}
          onClick={() => {
            dispatch(updateTodo(todoId, 
              { dateCurrent: null },
              { dateCurrent: todoDateCurrent },
              true
            ))
          }}>
          Backlog
        </BacklogButton>
      </TodoSection>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoDateTime {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const BacklogButton = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: ${ ({ isBacklogged }: IBacklogButton) => isBacklogged ? 'rgb(0, 150, 0)' : 'transparent' };
  color: ${ ({ isBacklogged }: IBacklogButton) => isBacklogged ? 'white' : 'black' };
  &:hover {
      background-color: rgb(0, 150, 0);
      color: white;
  }
`
interface IBacklogButton {
  isBacklogged: boolean
}

export default TodoDateTime
