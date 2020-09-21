//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { IList } from '@/state/list/types'

import { createTodo } from '@/state/todo/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosTodosCreateTodo = ({
  listId
}: ITodosTodosCreateTodo) => {

  // Redux
  const dispatch = useDispatch()

  return (
    <Container
      onClick={() => dispatch(createTodo(listId))}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosTodosCreateTodo {
  listId: IList['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  cursor: text;
  height: 3rem;
  width: 100%;
`

export default TodosTodosCreateTodo
