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

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodoBacklog = ({
  todoId
}: ITodoBacklog) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCurrent = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].dateCurrent)
  const todoTimeStart = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].timeStart)
  const todoTimeEnd = useSelector((state: IAppState) => todoId && state.todo.allTodos[todoId].timeEnd)

  return (
    <Container
      isBacklogged={todoDateCurrent === null}
      onClick={() => {
        dispatch(updateTodo(todoId, 
          { dateCurrent: todoDateCurrent === null ? moment().format('YYYY-MM-DD HH:mm:ss') : null, timeStart: null, timeEnd: null },
          { dateCurrent: todoDateCurrent, timeStart: todoTimeStart, timeEnd: todoTimeEnd },
          true
        ))
      }}>
      <BacklogCheckbox
        readOnly
        type="checkbox"
        checked={todoDateCurrent === null}/>
        Backlog
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoBacklog {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin-bottom: 0.35rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: ${ ({ isBacklogged }: IContainer) => isBacklogged ? 'rgb(0, 150, 0)' : 'transparent' };
  color: ${ ({ isBacklogged }: IContainer) => isBacklogged ? 'white' : 'black' };
  &:hover {
      background-color: rgb(0, 150, 0);
      color: white;
  }
`
interface IContainer {
  isBacklogged: boolean
}

const BacklogCheckbox = styled.input`
  margin-right: 0.5rem;
`

export default TodoBacklog
