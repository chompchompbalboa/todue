//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { IList } from '@/state/list/types'

import {
  deleteList
} from '@/state/list/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export const TodosHeaderDeleteList = ({
  listId
}: ITodosHeaderDeleteList) => {

  // Redux
  const dispatch = useDispatch()

  return (
    <Container
      onClick={() => dispatch(deleteList(listId))}>
      Delete List
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosHeaderDeleteList {
  listId: IList['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  &:hover {
    background-color: rgb(200, 0, 0);
    color: white;
  }
`

export default TodosHeaderDeleteList
