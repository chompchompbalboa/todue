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

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoDateCurrent = ({
  todoId
}: ITodoDateCurrent) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCurrent = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].dateCurrent)

  return (
      <Container>
        <Datepicker
          value={todoDateCurrent}
          onDateChange={nextDate => {
            dispatch(updateTodo(todoId, 
              { dateCurrent: moment(nextDate).format('YYYY-MM-DD HH:mm:ss') },
              { dateCurrent: todoDateCurrent },
              true
            ))
        }}/>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoDateCurrent {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: 0 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default TodoDateCurrent
