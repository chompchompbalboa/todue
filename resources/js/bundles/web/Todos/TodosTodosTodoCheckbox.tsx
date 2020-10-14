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
export const TodosTodosTodoCheckbox = ({
  todoId
}: ITodosTodosTodoCheckbox) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCompleted = useSelector((state: IAppState) => state.todo.allTodos[todoId].dateCompleted)

  return (
    <Container>
      <Checkbox
        onClick={() => 
          todoDateCompleted !== null 
            ? dispatch(updateTodo(todoId, { dateCompleted: null }, { dateCompleted: todoDateCompleted }, true))
            : dispatch(updateTodo(todoId, { dateCompleted: moment().format('YYYY-MM-DD HH:ss') }, { dateCompleted: null }, true))
        }
        isChecked={todoDateCompleted !== null}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosTodosTodoCheckbox {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Checkbox = styled.div`
  cursor: pointer;
  margin-right: 0.5rem;
  height: 1rem;
  width: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${ ({ isChecked }: IContainer ) => isChecked ? 'rgb(0, 140, 25)' : 'rgb(100, 100, 100)' };
  background-color: ${ ({ isChecked }: IContainer ) => isChecked ? 'rgb(0, 140, 25)' : 'transparent' };
`
interface IContainer {
  isChecked: boolean
}

export default TodosTodosTodoCheckbox
