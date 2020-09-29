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

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodosTodoCompleted = ({ 
  todoId
}: IProps) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCompleted = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.dateCompleted)

  return (
    <Container
      onPress={() => dispatch(updateTodo(
        todoId, 
        { 
          dateCurrent: moment().format(),
          dateCompleted: todoDateCompleted ? null : moment().format() 
        }
      ))}>
      <Checkbox
        isCompleted={todoDateCompleted !== null}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IProps {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.TouchableWithoutFeedback``

const Checkbox = styled.View`
  margin-right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 28px;
  border: 1px solid ${({ isCompleted }: ICheckbox) => (isCompleted ? 'rgb(0, 168, 25)' : 'rgb(100, 100, 100)')};
  background-color: ${({ isCompleted }: ICheckbox) => isCompleted ? 'rgb(0, 168, 25)' : 'transparent'};
`
interface ICheckbox {
  isCompleted: boolean
}

export default TodosTodoCompleted
