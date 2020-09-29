//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react' 
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '@/state'
import { ITodo } from '@/state/todo/types'

import { updateTodo } from '@/state/todo/actions'

import Datepicker from '@/components/native/Datepicker'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoEditorDate = ({
  todoId,
  isVisible
}: ITodoEditorDate) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCurrent = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.dateCurrent)

  return (
    <Container
      isVisible={isVisible}>
      <Datepicker
        onDateChange={(nextDate: string) => {
          dispatch(updateTodo(todoId, 
            { dateCurrent: moment(nextDate).format() }, 
            { dateCurrent: todoDateCurrent },
            true
          ))
        }}
        value={todoDateCurrent}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoEditorDate {
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

export default TodoEditorDate
